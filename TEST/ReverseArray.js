const originalArray = ['Michael', 'Oyama', 'Godfrey', 'Isaach',]

console.log(originalArray);

const ReversedArray = [...originalArray].reverse()
console.log(ReversedArray)

// Calculate the actual index in the original array for deletion
const deletedIndex = 0;

const realIndex = originalArray.length - 1 - deletedIndex;

console.log(realIndex)
originalArray.splice(realIndex, 1)

console.log(originalArray);


