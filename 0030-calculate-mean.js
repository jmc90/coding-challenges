// Calculate the Mean
// Create a function that takes an array of numbers and returns the mean value.

function mean(arr) {
	let sum = arr.reduce((tot, num) => tot + num)
	let mean = sum / arr.length
	return +mean.toFixed(2)
}