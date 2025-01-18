// arrow function in javascript
//introduction of arrow function
//arrow function is a function without name
//arrow function is a function without function keyword

//Arrow functions JavaScript mein ek concise way hai functions likhne ka. Yeh ES6 (ECMAScript 2015) me introduce ki gayi thi aur traditional function expressions ka alternative hain. Arrow functions ka syntax aur behavior thoda different hai traditional functions se.


//Basic syntax
const firstFunction = () => {
    console.log("Hello i am arrow function");
    console.log(this);
    
};
firstFunction();




const addTwoNum = (a,b) => {
    return a+b;
}
console.log(addTwoNum(2,3));




//=====================================================implicit return
// Agar ek single expression hai, aur {} curly braces ka use nahi karte, toh arrow function us expression ka result automatically return kar deta hai.
//no need of return keyword and curly braces
// implicit return es jab curly braces ko remove krty hain tu return keyword ke zarorat nhii hutee wo khud return kar taa hain liken 
//our paranthesis laganay ka faidaa yee hain jab hum without parathesis object ko es tarhaa create kry 
// Example

const obj = () => ({userName: "Bilal"})
console.log(obj());


const addTwoNum1 = (a,b) => ( a+b );
console.log(addTwoNum1(10 , 20));



//=================================================explicit 
// when you have more than one line of code in your arrow function, you need to use curly braces.
const addTwoNum2 = (a,b) => {
    let result = a+b;
    return result;
}
console.log(addTwoNum2(10 , 20));

//=========================================PRACTICE SECTION==============================================

// Task 1: Convert Traditional Function to Arrow Function
function multiply(a, b) {
    return a * b;
  }

  //convert to arrow function this is implicit function
  const multiplyArrow = (a, b) => a * b;
  console.log(multiplyArrow(2, 3)); // Output: 6


  // convert explicit function 
  const multiplyArrowExplcit = (a,b) => (a * b);
  console.log(multiplyArrowExplcit(3, 3));
  


//   Task 2: Sum of an Array

const arr = [2, 4, 5, 6, 7, 10]
const sumArray = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

console.log(sumArray(arr));



// Task 3: Filter Even Numbers

const array = [2, 5, 8, 9, 0, 12, 13, 15, 17, 16, 20, 22, 24];
const arraEvenNum = (array) => {
    let evenNum = [];
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 === 0){
            evenNum.push(array[i]);
        }
    }
    return evenNum;

    // return array.filter((num) => num % 2 === 0); // short code filter method
}

console.log(arraEvenNum(array));


// Task 4: Greeting Function
let userEnter = prompt("Enter your name");
const greeting = (userEnter) => {
    return `Hello ${userEnter}`;
}
console.log(greeting(userEnter));


// Task 5: Find Maximum Value
// Ek arrow function likho jo 3 numbers ka input le aur sabse bada number return kare.

let number1 = Number(prompt("Enter first number"));
let number2 = Number(prompt("Enter second number"));
let number3 = Number(prompt("Enter third number"));
const maxNum = (number1,number2,number3) => {
    return Math.max(number1,number2,number3);
}
console.log(maxNum(number1,number2,number3));


