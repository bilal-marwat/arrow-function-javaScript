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