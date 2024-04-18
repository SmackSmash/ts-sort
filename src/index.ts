const numArr = [5, 0, 10, -1];
const largeNumArr = [
  55, 41, -51, 0, 78, 74, -81, -72, -49, -2, -54, 8, 38, 81, 25, -24, 35, -40,
  -66, -50, 62, -75, 97, 86, 66, 47, -56, 20, -16, -47, 45, -84, -30, 40, -63,
  99, -52, -8, 18, -18, -89, 46, -87, 3, 82, 31, 23, 83, -95, -80
];

class Sorter {
  constructor(public set: number[]) {
    this.set = set;
  }

  bubbleSort = (): number[] => {
    for (let i = this.set.length; i > 0; i--) {
      for (let j = 0; j < i; j++) {
        if (this.set[j] > this.set[j + 1]) {
          [this.set[j], this.set[j + 1]] = [this.set[j + 1], this.set[j]];
        }
      }
    }
    return this.set;
  };
}

const sort = new Sorter(numArr);
console.log(sort.bubbleSort());
