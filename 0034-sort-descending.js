// Sort Numbers in Descending Order
// Create a function that takes any nonnegative number as an argument and return it with it's digits in descending order. Descending order is when you sort from highest to lowest.

function sortDecending(num) {
	let numStr = num.toString()
	let arr = numStr.split("")
	return Number(arr.sort((a, b) => b - a).join(""))
}