// --- Task 1 ---------------------------------------------------------
// Apply the map() function so that it returns every element of the array multiplied by 3.

var numbers = [1, 2, 3, 4, 5];
var result = task1(numbers);
function task1(numbers) {
  return numbers.map(number => number * 3);
}
console.log(result);
