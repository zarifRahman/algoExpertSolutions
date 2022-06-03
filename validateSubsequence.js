
// Validate a sequence

const array = [5, 1, 22, 25, 6, -1, 8, 10];
const sequence = [1, 6, -1, 10];

const validateSequence = (array, sequence) => {
  let i = 0;
  let j = 0;
  while (i < array.length && j < sequence.length) {
    if (array[i] === sequence[j]) {
      i++;
      j++;
    } else {
      i++;
    }
  }
  return j === sequence.length;
}
// 0(n) time complexity and O(1) space complexity
