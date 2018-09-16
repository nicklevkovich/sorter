class Sorter {
  constructor() {
    this.array = [];
  }

  add(element) {
    this.array.push(element);
    // your implementation
  }

  at(index) {
    return this.array[index];
    // your implementation
  }

  get length() {
    return this.array.length;
    // your implementation
  }

  toArray() {
    return this.array;
    // your implementation
  }

  sort(indices) {
    // your implementation
  }

  setComparator(compareFunction) {
    // your implementation
  }
}

module.exports = Sorter;