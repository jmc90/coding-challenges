// Find the Largest Numbers in a Group of Arrays
// Create a function that takes an array of arrays with numbers. Return a new (single) array with the largest numbers of each.

function findLargestNums(arr) {
	let newArr = []
	for (let i = 0; i < arr.length; i++) {
		newArr.push(Math.max(...arr[i]))
	}
	return newArr
}