import compare from 'all-about-vr-compare';

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
