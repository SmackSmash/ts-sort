const numArr = [5, 0, 10, -1];

const bubbleSort = (array: number[]): number[] => {
  let depth = array.length;
  for (let j = 0; j < array.length; j++) {
    for (let i = 0; i < depth; i++) {
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
      }
    }
    depth--;
  }
  return array;
};

console.log(bubbleSort(numArr));
