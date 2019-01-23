// Sometimes We Stretch the Truth
// Create a function that: - Takes a number, a string, and an array as parameters (in that order) - Adds up points based on how many times the number or string is in the array - For example: - If the number is in the array x times, then that is x points - If the string is in the array y times, then that is y+1 points - Returns total number of points calculated

function stretchTruth(num,str,arr) {
  let numPoints = 0
  let strPoints = 0
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] === str) {
          strPoints += 1
      } else if (arr[i] === num) {
          numPoints += 1
      }
  }
  return numPoints + strPoints + 1
}