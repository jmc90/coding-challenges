// Return the Highest and Lowest Numbers
// Create a function that accepts a string of space separated numbers and returns the highest and lowest number (as a string).

function highLow(str) {
	let arr = str.split(" ")
	let high = Math.max(...arr)
	let low = Math.min(...arr)
	return [high, low].join(" ")
}