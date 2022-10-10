// N^2
class Sorting {
  static bubbleSort(nums) {
    let nothingChanged = true;
    let saved = 0;
    while (nothingChanged) {
      nothingChanged = false;
      for (let i = 1; i < nums.length; i++) {
        if (nums[i] < nums[i - 1]) {
          saved = nums[i];
          nums[i] = nums[i - 1];
          nums[i - 1] = saved;
          nothingChanged = true;
        }
      }
    }
    return nums;
  }

  static selectionSort(nums) {
    const ordered = [];
    while (nums.length !== 0) {
      let minimo = nums[0];
      let indexToRemove = 0;
      nums.forEach((value, i) => {
        if (value < minimo) {
          minimo = value;
          indexToRemove = i;
        }
      });
      nums.splice(indexToRemove, 1);
      ordered.push(minimo);
    }
    return ordered;
  }
}

example1 = [34, 67, 29, 63, 2, 28, 49, 51, 94, 32, 84, 98, 15, 75, 39, 6, 38];
console.log(Sorting.selectionSort(example1));
