class Sorter {
  constructor() {
    this.array = [];
    this.compareFunction = (function(a,b){
      return (a-b)
    })
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
    var SortedArray=[];
    if (indices[1]<indices[0]){
      indices.reverse();
    }
    for(var i=0;i<indices.length;i++){
      SortedArray.push(this.array[indices[i]]);
    }
    SortedArray.sort(this.compareFunction);
    for (var i=0;i<SortedArray.length;i++){
      this.array.splice(indices[i],1,SortedArray[i])
    }
  }

  setComparator(compareFunction) {
    // your implementation
    this.compareFunction=compareFunction;
  }
}

module.exports = Sorter;