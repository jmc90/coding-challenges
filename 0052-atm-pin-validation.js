// ATM PIN Code Validation
// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits. Your task is to create a function that takes a string and returns true if the PIN is valid and false if it's not.

// Examples
// validatePIN("1234") ➞ true

// validatePIN("12345") ➞ false

// validatePIN("a234") ➞ false

// validatePIN("") ➞ false
// Notes
// Some test cases contain special characters.
// Empty strings must return false.

function validatePIN(pin) {
	const regex = /(\d{4}|\d{6})/
	if (pin.length === 4 || pin.length === 6) {
			return regex.test(pin)
	}
	return false
}