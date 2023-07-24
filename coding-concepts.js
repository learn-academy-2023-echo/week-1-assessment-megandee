// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer: 
// b) Verify and explain:

// --------------------1) What will this log?

const cohort = "LEARN 2023"
// console.log(cohort.length)

// a) Your answer: 10, .length is not zero index
// b) Verify and explain: answer is 10, because .length is not zero index 

// --------------------2) What will this log?

const greeting = "Hello World!"
// console.log(greeting[4])

// a) Your answer: o, because [] with numbers can be used as a zero index counter
// b) Verify and explain: o, because of above reasoning given 

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
// const index = 1
// console.log(languages[index])

// a) Your answer: "Ruby", index starts at zero
// b) Verify and explain: The answer is "Ruby", because index starts counting at zero  

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
console.log(weekendDays.join())
// const string = weekendDays.toUpperCase()
// // console.log(string)

// a) Your answer: SATURDAY, SUNDAY // because .toUpperCase capitalizes all 
// b) Verify and explain: 

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
console.log(dataTypes.length)

// a) Your answer: error, typeof does not belong 
// b) Verify and explain: number, Im not sure i know why.. 
