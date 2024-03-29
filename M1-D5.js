/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be pushed to the repository and be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area of the associated rectangle.
*/
let area = 11 * 12

function calculateArea(firstNumber, secondNumber) {
    let result = firstNumber * secondNumber
    return result
}

area = calculateArea(11, 12)

//console.log(area)


/* EXERCISE 2
 Write a function called "crazySum" which receives two integers as parameters.
 It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

function madSum(int1 , int2){
  if(int1 === int2){
    let sum = int1 + int2
    let newSum = sum * 3
    return newSum
  } else {
    return int1 + int2
  }
}

console.log(madSum(5, 5))


// function crazySum(int1, int2) {
//     if (int1 === int2) {
//         return (int1 + int2) * 3
//     } else {
//         return int1 + int2
//     }
// }
// console.log(crazySum(2, 2))


/* EXERCISE 3
 Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
 It should return triple their absolute difference if the given number is greater than 19.
*/


 
  const crazydiff = function (x) {
    if (x > 19) {
         return Math.abs(x - 19) * 3
    } else {
        return Math.abs(x - 19)
    }

  }
  console.log(crazydiff(21))
  console.log(crazydiff(18))

/* EXERCISE 4
 Write a function called "boundary" which accept an integer parameter n and returns true if n is within 20 and 100 (included) or if n it's equal to 400.
*/

function boundry(n){
  if(n > 19 && n < 101){
    return true
  } else if (n === 400){
    return true
  } else {
    return false
  
}
}

console.log(boundry(20))
console.log(boundry(80))
console.log(boundry(400))

// const boundry = function (n) {
//     if ((n > 20 && n <= 100) || n === 400) {
//         return true
//     } else {
//         return false
//     }
// }
// console.log(boundry(400))
// console.log(boundry(45))
// console.log(boundry(250))

/* EXERCISE 5
 Write a function called "strivify" which accepts a string as a parameter.
 It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/
function strivify(string){
  if(string.startsWith("Strive")){
    return string
  }else {
    return `Strive ${string}`
  }
}
console.log(strivify("javascript is cool"))


// function strivify(str) {
//     if (str.startsWith("Strive")) {
//         return str;
//     } else {
//         return "Strive " + str;

//     }

// }
// console.log(strivify("javaScript is cool"))

/* EXERCISE 6
 Write a function called "check3and7" which accepts a positive number as a parameter and checks if it is a multiple of 3 or a multiple of 7.
 HINT: Modulus Operator
*/
// function check3and7(n) {
//     if (n % 3 === 0 || n % 7 === 0) {
//         return "Is a multiple of 3 and 7", true
//     } else {
//         return "Is not a multiple of 3 or 7", false
//     }

// }
// console.log(check3and7(15))
// console.log(check3and7(14))
// console.log(check3and7(13))

/* EXERCISE 7
 Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS).
*/

// function reverseString(str) {
//     return str.split("").reverse().join("")
// }
// console.log(reverseString("Hello world"))

/* EXERCISE 8
 Write a function called "upperFirst" which capitalizes the first letter of each word of a given string passed as a parameter.
*/

// const upperFirstPhrase = function (str) {
//     let words = str.split(" ")
//     let finalString = []
//     for (let i = 0; i < words.length; i++) {
//         let firstChar = words[i].charAt(0)
//         console.log(firstChar)
//         let uppercaseChar = firstChar.toUpperCase()
//         let cutString = words[i].slice(1)
//         let finalWord = uppercaseChar + cutString
//         finalString.push(finalWord)
//     }
//     console.log(finalString.join(" "))
// }

// upperFirstPhrase("hello my name is raeven")


/* EXERCISE 9
 Write a function called "cutString" which creates a new string without the first and last character of a given string passed as a parameter.
*/

// function cutString(str) {
//     return str.slice(1, -1)
// }
// console.log(cutString("hello world"))

/* EXERCISE 10
 Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

// function giveMeRandom(n) {
//     let numArr = []
//     for (let i = 0; i <= n; i++) {
//         let randomArr = Math.floor(Math.random() * 10)
//         numArr.push(randomArr)
//     }
//     return numArr
// }
// console.log(giveMeRandom(9))

/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow. */
