// ​​​​​AlTeRnAtInG CaPs​​​​​
// Create a function that alternates the case of the characters in a string.
// Examples
// alternatingCaps("Hello") ➞ "HeLlO"

// alternatingCaps("Hey, how are you?") ➞ "HeY, hOw aRe yOu?"

// alternatingCaps("OMG!!! This website is awesome!!") ➞ "OmG!!! tHiS WeBsItE Is aWeSoMe!!"
// Notes
// The first character should always be UPPERCASE.

function alternatingCaps(str) {
	const chars = str.toLowerCase().split("");
  for (let i = 0; i < chars.length; i += 2) {
    chars[i] = chars[i].toUpperCase();
  }
  return chars.join("")
}
