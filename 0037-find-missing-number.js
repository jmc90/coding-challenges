// Find the Missing Number
// Create a function that takes an array of numbers between 1 and 10 (excluding one number) and returns the missing number.

function missingNums(arr) {
	let sorted = arr.sort((a, b) => a - b)
	for (let i = 0; i < 10; i++) {
		if (i + 1 !== sorted[i]) {
			return i + 1
		}
	}
}