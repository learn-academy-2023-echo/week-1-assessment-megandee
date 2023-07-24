// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
// const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer:
// b) Verify and explain:

// --------------------1) What will this log?

// const cohort = "LEARN 2023"
// console.log(cohort.length)

// a) Your answer: 9
// b) Verify and explain: Incorrect, I thought it was LEARN 2023
// But I was incorrect.                               0123456789
// I forgot .length was different to index value, so there would be no 0.
// // --------------------2) What will this log?

// const greeting = "Hello World!"
// console.log(greeting[4])

// // a) Your answer: o
// // b) Verify and explain: Correct! The index of the string. 0 is H. Counting upwards to 4 arives at o.

// // --------------------3) What will this log?

// const languages = ["JavaScript", "Ruby", "Python", "C++"]
// const index = 1
// console.log(languages[index])

// // a) Your answer:Ruby 
// // b) Verify and explain: Correct! the index of the array. 0 = javascript, counting to 1 = Ruby.

// // --------------------4) What will this log?

// const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// // a) Your answer: SATURDAYSUNDAY
// // b) Verify and explain: Incorrect, toUpperCase is not a function error. It should be outside of the console log and inside brackets () in order to work. Example:
//  if/else(weekendDays.toUpperCase)
//  console.log(weekendDays)

// // --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
console.log(typeof dataTypes.length)

// // a) Your answer: Some type of error due to typeof?
// // b) I thought camelCase was required and was unsure typeof was a valid built in method for Arrays/.js code. But 4 is returned due to the 4 different types of primitivie data types listed in the strings, or just listing the amount of strings? 
