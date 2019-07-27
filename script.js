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

// ---Task 3----------------------------------------------------------------
// Remove all negative numbers from the array using filter function

// Example invocation:
var numbers = [-3, -2, -1, 0, 1, 2, 3];
var result = task3(numbers);

function task3(numbers) {
  return numbers.filter(number => number >= 0);
}

console.log(result);
