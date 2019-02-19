// Check for Anagrams
// Write a function that takes two strings and returns (true or false) whether they're anagrams or not.

// Examples
// isAnagram("cristian", "Cristina") ➞ true

// isAnagram("Dave Barry", "Ray Adverb") ➞ true

// isAnagram("Nope", "Note") ➞ false
// Notes
// Should be case insensitive.

function isAnagram(s1, s2) {
	const sort1 = s1.toLowerCase().split('').sort().join('')
	const sort2 = s2.toLowerCase().split('').sort().join('')
	return sort1 === sort2
}