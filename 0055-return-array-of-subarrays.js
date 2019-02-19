// Return an Array of Subarrays
// Create a function that takes three arguments (x, y, z) and returns an array containing subarrays (e.g. [[], [], []]), each of a certain number of items, all set to either a string or an integer.

// x argument: Number of subarrays contained within the main array.
// y argument Number of items contained within each subarray(s).
// z argument: Item contained within each subarray(s).
// Examples
// matrix(3, 2, 3) ➞ [[3, 3], [3, 3], [3, 3]]

// matrix(2, 1, "edabit") ➞ [["edabit"], ["edabit"]]

// matrix(3, 2, 0) ➞ [[0, 0], [0, 0], [0, 0]]
// Notes
// The first two arguments will always be valid integers.
// The third is either a string or an integer.
// You can expect valid input for all test cases.

function matrix(x, y, z) {
	const arr = []
	for (let i = 0; i < x; i++) {
		arr.push([])
		for (let j = 0; j < y; j++) {
			arr[i].push(z)
		}
	}
	return arr
}