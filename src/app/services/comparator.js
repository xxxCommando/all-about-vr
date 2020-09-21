const compareScreen = (item1, item2) => {
  const FOV_WEIGHT = 3;
  const RR_WEIGHT = 2;
  const RES_WEIGHT = 4;
  const PD_WEIGHT = 1;
  const IPD_WEIGHT = 1;

  const itemWeight = (item, compareResult) => {
    let weight = 0;
    if (item.fov === compareResult.fov) {
      weight += FOV_WEIGHT;
    }
    if (item.refreshrate === compareResult.rr) {
      weight += RR_WEIGHT;
    }
    if (item.res === compareResult.res) {
      weight += RES_WEIGHT;
    }
    if (item.pixeldensity === compareResult.pd) {
      weight += PD_WEIGHT;
    }
    if (item.ipd === compareResult.ipd) {
      weight += IPD_WEIGHT;
    }
    return weight;
  };

  const compareFov = (fov1, fov2) => {
    if (!fov1) return fov2;
    if (!fov2) return fov1;
    return fov1 > fov2 ? fov1 : fov2;
  };

  const compareRefreshrate = (rr1, rr2) => {
    if (!rr1) return rr2;
    if (!rr2) return rr1;
    return rr1 > rr2 ? rr1 : rr2;
  };

  const compareResolution = (res1, res2) => {
    if (!res1) return res2;
    if (!res2) return res1;
    const resolution1 = res1.split('x');
    const resolution2 = res2.split('x');
    return parseInt(resolution1[0], 10) * parseInt(resolution1[1], 10)
      > parseInt(resolution2[0], 10) * parseInt(resolution2[1], 10)
      ? res1
      : res2;
  };

  const comparePixelDensity = (pd1, pd2) => {
    if (!pd1) return pd2;
    if (!pd2) return pd1;
    return pd1 > pd2 ? pd1 : pd2;
  };

  const compareResult = {
    fov: compareFov(item1.fov, item2.fov),
    rr: compareRefreshrate(item1.refreshrate, item2.refreshrate),
    res: compareResolution(item1.res, item2.res),
    pd: comparePixelDensity(item1.pixeldensity, item2.pixeldensity),
    ipd: true,
  };

  const itemWeight1 = itemWeight(item1, compareResult);
  const itemWeight2 = itemWeight(item2, compareResult);

  if (itemWeight1 === itemWeight2) {
    return [item1, item2];
  }
  return itemWeight1 > itemWeight2 ? [item1] : [item2];
};

const comparePrice = (item1, item2) => {
  if (item1.price === item2.price) {
    return [item1, item2];
  }
  return item1.price < item2.price ? [item1] : [item2];
};

const compare = (items) => {
  const defaultItem = { ...items[0] };
  items.shift();
  return items.reduce(
    (acc, item) => ({
      price: [...comparePrice(acc.price[acc.price.length - 1], item)],
      screen: [...compareScreen(acc.screen[acc.screen.length - 1], item)],
    }),
    {
      price: [defaultItem],
      screen: [defaultItem],
    },
  );
};

const MAX_SELECT = 2;

class ComparatorService {
  constructor() {
    this.selected = {};
    this.inputMapping = [...Array(MAX_SELECT).keys()].reduce(
      (acc, item) => ({
        ...acc,
        [item]: null,
      }),
      {},
    );
    this.selectedId = [];
  }

  deleteFromMapping(id, selectorIndex = null) {
    if (selectorIndex) {
      this.inputMapping[selectorIndex] = null;
      return;
    }
    const indexToDelete = Object.keys(this.inputMapping).find((key) => {
      if (this.inputMapping[key] === null) {
        return false;
      }
      return this.inputMapping[key].id === id;
    });
    this.inputMapping[indexToDelete] = null;
  }

  addInMapping(item, selectorIndex = null) {
    if (selectorIndex) {
      this.inputMapping[selectorIndex] = item;
      return;
    }
    const emptyKey = Object.keys(this.inputMapping).find((key) => this.inputMapping[key] === null);
    if (emptyKey) {
      this.inputMapping[emptyKey] = item;
    }
  }

  getInputMapping(index = null) {
    if (index !== null) {
      return this.inputMapping[index];
    }
    return Object.values(this.inputMapping);
  }

  getSelectedIds() {
    return this.selectedId;
  }

  add(item, id) {
    if (this.isFull()) return;
    this.selectedId = [...this.selectedId, item.id];
    this.selected[id] = item;
  }

  remove(id) {
    const index = this.selectedId.indexOf(id);
    if (index > -1) {
      this.selectedId.splice(index, 1);
    }
    delete this.selected[id];
  }

  isSelected(id) {
    return this.selected[id];
  }

  doCompare() {
    return compare(Object.values(this.selected));
  }

  isFull() {
    return Object.values(this.selected).length === MAX_SELECT;
  }
}

export default ComparatorService;
