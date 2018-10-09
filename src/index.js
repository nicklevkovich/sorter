class Sorter {
  constructor() {
    this.array = [];
    this.compareFunction = (a,b) => {
      return (a - b)
    }
  }

  add(element) {
    this.array.push(element);
  }

  at(index) {
    return this.array[index];
  }

  get length() {
    return this.array.length;
  }

  toArray() {
    return this.array;
  }

  sort(indices) {
    const SortedArray = [];
    if (indices[1] < indices[0]) 
      indices.reverse();
    for(let i = 0; i < indices.length; i++)
      SortedArray.push(this.array[indices[i]]);
    SortedArray.sort(this.compareFunction);
    for (let i = 0; i < SortedArray.length; i++){
      this.array.splice(indices[i],1,SortedArray[i])
    };
  }

  setComparator(compareFunction) {
    this.compareFunction = compareFunction;
  }
}

module.exports = Sorter;