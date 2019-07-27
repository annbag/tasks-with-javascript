// --- Task 1 ---------------------------------------------------------
// Apply the map() function so that it returns every element of the array multiplied by 3.

var numbers = [1, 2, 3, 4, 5];
var result = task1(numbers);

function task1(numbers) {
  return numbers.map(number => number * 3);
}

console.log(result);

// --- Task 2---------------------------------------------------------
// Apply the map() function to the variable `sentence` so that every other word in the string is uppercase.

var sentence = 'i like hiking in the tatra mountains.';
var result = task2(sentence);

function task2(sentence) {
  return sentence
    .split(' ')
    .map((word, index) => {
      if ((index + 1) % 2 == 0) {
        return word.toUpperCase();
      } else {
        return word;
      }
    })
    .join(' ');
}
console.log(result);
