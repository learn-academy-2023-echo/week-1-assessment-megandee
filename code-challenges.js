// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Pseudo code:

// Set one:
// const fruit1 = "apple"
// const fruit2 = "banana"
// // Expected outcome: "banana"

// // Set two:
// const fruit3 = "cherry"
// const fruit4 = "kiwi"
// Expected outcome: "cherry"

// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Pseudo code: I will need to assign a function to boiling point which does not change / there will be an if, else if, else statement/syntax / there will be use of relational operators / 
 
// const boilingPoint = 212
// const temperature1 = 42
// // Expected output: "42 is below boiling point"
// const temperature2 = 350
// // Expected output: "350 is above boiling point"
// const temperature3 = 212
// // Expected output: "212 is at boiling point"


// if (boilingPoint > temperature1){
//     console.log ("42 is below boiling point")
// } else if (boilingPoint < temperature2){
//     console.log ("350 is above boiling point")
// } else (boilingPoint = temperature3)
//     console.log ("212 is at boiling point")

// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Pseudo code: I will need to use the .concat function to add both arrays together and then i will need to use the .length() to figure out the total value of the array.

// const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
// const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// console.log(padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns).length)

// Expected output: 9

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Pseudo code: i know i need to reverse this.. .reverse() only works on arrays not strings so i have to make my string into an array in order to reverse it/

// const currentCohort = "Echo 2023"
// console.log(currentCohort.reverse())  *********
// // Expected output: "3202 ohcE"
// const stringReverse = currentCohort.split("")
// console.log(stringReverse.reverse().join(""))

// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Pseudo code: I need to locate where my value is and show where it is in my array 

// const numberOfConnections = [13, 34, 42, 5, 5, 10, 27, 42, 10]

// const givenValue1 = 42
// Expected output: 7
// console.log(numberOfConnections.lastIndexOf(givenValue1))
// const givenValue2 = 10
// console.log(numberOfConnections.lastIndexOf(givenValue2))
// Expected output: 8

// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Pseudo code: i will need to use a numerical sorting function / greatest to smallest ... 

// const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
// // Expected output: [82, 80, 79, 77, 76, 73, 72]
// console.log(sanDiegoSummerTemperatures.sort().reverse())

// const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
// // Expected output: [68, 67, 66, 66, 62, 59, 59]
// console.log(sanDiegoWinterTemperatures.sort().reverse())
