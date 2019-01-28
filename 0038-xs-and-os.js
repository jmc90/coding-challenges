// X's and O's
// Create a function that takes a string, checks if it has the same number of 'x's and 'o's and returns either true or false.
// Return a boolean value (true or false).
// The string can contain any character.
// When neither an x nor an o is in the string, return true.

function XO(str) {
	let x = str.match(/x/gi)
	let o = str.match(/o/gi)
	if (x === null && o === null) {
		return true 
	} else if (x === null || o === null) {
		return false
	} else if (x.length === o.length) {
		return true 
	} else {
		return false
	}
}