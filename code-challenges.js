// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Pseudo code:

// // Set one:
// const fruit1 = "apple"
// const fruit2 = "banana"
// // Expected outcome: "banana"

// // Set two:
// const fruit3 = "cherry"
// const fruit4 = "kiwi"
// // Expected outcome: "cherry"

// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Pseudo code: First create a variable and name it to make it an arrow function. Add if else conditionals with greater than or qeual to and less that or equal to outcomes. Add string interpolation to invoke the function added with a message that will run in the console log, telling you if the entered number is greater than or less than boiling point. Finally add the else statement similar to the others only that it is equal to instead. With the interpolated message saying that the temp is at boiling point.
// Finally add a console log with the variable name which will also invoke the arrow function. The console log has to contain extra brackets at the end, to put in the desired number to test it for boiling point to be returned in the console log.

// const temperature1 = 42
// // Expected output: "42 is below boiling point"

// const temperature2 = 350
// // Expected output: "350 is above boiling point"

// const temperature3 = 212
// // Expected output: "212 is at boiling point"

// const boilingOrNot = (tempCheck) => {
//     if (tempCheck <= 211) {
//         return `${tempCheck} is below boiling point.`
//     }else if(tempCheck >= 213) {
//         return `${tempCheck} is above boiling point.`
//     }else (tempCheck = 212) 
//         return `${tempCheck} is at boiling point.`
//     }

// console.log(boilingOrNot(212))



// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// // Pseudo code:Add a new variable that is able to be reassigned, give it a new meaningful name, link to the first const variable with an = assignment operator, concatinate it to the 2nd const variable. Console log the new variable name with the .length built in method to get the desired answer returned in the console log. 

// const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
// const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// // // Expected output: 9
// let padresJoined = (padres1984WorldSeriesRuns).concat(padres1998WorldSeriesRuns)
// console.log(padresJoined.length)




// // --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// // Pseudo code: (I struggled to do this from lecture notes and had to go online for assistance) Add a brand new const variable with a name and make it an arrow function, now it's a function it is able to use different built in methods such as ".reverse". Console log the name of the new function, add the variable name holding the original string in brackets afterwards. It will return the string reversed! 

// const currentCohort = "Echo 2023"
// // Expected output: "3202 ohcE"

// const reverseString = str => [...str].reverse().join('');

// console.log(reverseString(currentCohort));

// // -------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// // #1 - Pseudo code:change the const1 last of index to 6, console log const2 / by the changed last of index from const1.
//#2 - Console log the var and  minus it by 2 to get output 8

// const numberOfConnections = [13, 34, 42, 5, 5, 10, 27, 42, 10]

// const givenValue1 = 42

// numberOfConnections[8] = 6
// console.log( givenValue1 /numberOfConnections[8])


// // Expected output: 7

// const givenValue2 = 10

// console.log(givenValue2 -2)

// // Expected output: 8

// // --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// // Pseudo code: console log the var name with a .sort built in array method. the returned log will be in order. So change the order using the a,b => b - a reverse sort method attribute?(idk what it's called)

// const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
// // Expected output: [82, 80, 79, 77, 76, 73, 72]

// console.log(sanDiegoSummerTemperatures.sort((a, b) => b - a))

// const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
// // Expected output: [68, 67, 66, 66, 62, 59, 59]

// console.log(sanDiegoWinterTemperatures.sort((a, b) => b - a))
