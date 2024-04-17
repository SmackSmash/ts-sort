console.log('Some changes');

const numArr = [5, 0, 10, -1];

const bubbleSort = (array: number[]) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[i + 1]) {
      [array[i], array[i + 1]] = [array[i + 1], array[i]];
    }
  }
  console.log(array);
};

bubbleSort(numArr);
