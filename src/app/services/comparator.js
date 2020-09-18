const comparePrice = (price1, price2) => (price1 < price2 ? price1 : price2);

const compare = (items) => {
  const defaultItem = { ...items[0] };
  items.shift();
  return items.reduce(
    (acc, item) => ({
      price: comparePrice(acc.price, item.price),
    }),
    {
      price: defaultItem.price,
    },
  );
};

const MAX_SELECT = 2;

class ComparatorService {
  constructor() {
    this.selected = {};
    this.inputMapping = [...Array(MAX_SELECT).keys()].reduce((acc, item) => ({
      ...acc,
      [item]: null,
    }), {});
  }

  updateMapping(selectorIndex = null, item = null) {
    const index = selectorIndex || Object.values(this.selected).length;
    this.inputMapping[index] = item;
  }

  getInputMapping(index = null) {
    if (index !== null) {
      return this.inputMapping[index];
    }
    return Object.values(this.inputMapping);
  }

  add(item, id) {
    if (this.isFull()) return;
    this.selected[id] = item;
  }

  remove(id) {
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
