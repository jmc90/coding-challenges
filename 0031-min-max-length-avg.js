// Find the Minimum, Maximum, Length and Average Values
// Create a function that takes an array of numbers and returns the following statistics:
// Minimum Value
// Maximum Value
// Sequence Length
// Average Value

function minMaxLengthAverage(arr) {
  return [
          Math.min(...arr),
          Math.max(...arr), 
          arr.length, 
          arr.reduce((tot, num) => tot + num) / arr.length
        ]
}