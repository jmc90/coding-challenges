// Capitalize the First Letter of Each Word
// Create a function that takes a string as an argument and converts the first character of each word to uppercase. Return the newly formatted string.

// Examples
// makeTitle("This is a title") ➞ "This Is A Title"

// makeTitle("capitalize every word") ➞ "Capitalize Every Word"

// makeTitle("I Like Pizza") ➞ "I Like Pizza"

// makeTitle("PIZZA PIZZA PIZZA") ➞ "PIZZA PIZZA PIZZA"
// Notes
// You can expect a valid string for each test case.

function makeTitle(str) {
  let arr = str.split(" ")
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i].charAt(0).toUpperCase() + arr[i].substring(1))
  }
  return newArr.join(" ")
}