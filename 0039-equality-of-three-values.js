// Equality of 3 Values
// Write a function that takes three input values (a, b, c) and returns the number of equal values.

function equal(a, b, c) {
	if (a === b && a === c) {
		return 3
	} else if (a === b || a === c || b === c ) {
		return 2
	}
	return 0
}
