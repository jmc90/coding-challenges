// Capitalize the Names
// Create a function that takes an array of names and returns an array with the first letter capitalized.
// Examples
// capMe(["mavis", "senaida", "letty"]) ➞ ["Mavis", "Senaida", "Letty"]

// capMe(["samuel", "MABELLE", "letitia", "meridith"]) ➞ ["Samuel", "Mabelle", "Letitia", "Meridith"]

// capMe(["Slyvia", "Kristal", "Sharilyn", "Calista"]) ➞ ["Slyvia", "Kristal", "Sharilyn", "Calista"]


function capMe(arr) {
	return arr.map(string => string.charAt(0).toUpperCase() + string.toLowerCase().slice(1))
}

