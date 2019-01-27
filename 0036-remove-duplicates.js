// Remove Duplicates from Array
// Create a function that takes an array of items, removes all duplicate items and returns a new array in the same sequential order as the old array (minus duplicates).

function removeDups(arr) {
  return arr.filter((x, i, a) => a.indexOf(x) === i);
}