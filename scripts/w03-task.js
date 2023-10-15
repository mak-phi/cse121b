/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    return number1 + number2;
}

function addNumbers(){
    let num1 = parseInt(document.getElementById("add1").value);
    let num2 = parseInt(document.getElementById("add2").value);

    document.getElementById("sum").value = add(num1, num2);
}

document.getElementById("addNumbers").addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */
const subtract = function (num1, num2) {
    return num1 - num2;
};

const subtractNumbers = function(){
    let num1 = parseInt(document.getElementById("subtract1").value);
    let num2 = parseInt(document.getElementById("subtract2").value);

    document.getElementById("difference").value = subtract(num1, num2);
};

document.getElementById("subtractNumbers").addEventListener("click", subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (factor1, factor2) => {
    return factor1 * factor2;
}
const multiplyNumbers = () => {
    let num1 = parseInt(document.getElementById("factor1").value);
    let num2 = parseInt(document.getElementById("factor2").value);

    document.getElementById("product").value = multiply(num1, num2);
}

document.getElementById("multiplyNumbers").addEventListener("click", multiplyNumbers);

/* Open Function Use - Divide Numbers */
const divide = function(number1, number2) {
    return number1 / number2;
}

function divideNumbers(){
    let num1 = parseInt(document.getElementById("dividend").value);
    let num2 = parseInt(document.getElementById("divisor").value);

    document.getElementById("quotient").value = divide(num1, num2);
}

document.getElementById("divideNumbers").addEventListener("click", divideNumbers);

/* Decision Structure */
let currentDate = new Date();
let currentYear;
currentYear = currentDate.getFullYear();
document.getElementById("year").innerHTML = currentYear;

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.querySelector("#array").innerHTML = numbers;

/* Output Odds Only Array */
let odds = numbers.filter((number)=>{return number % 2 === 1});
document.querySelector("#odds").innerHTML = odds;

/* Output Evens Only Array */
let evens = numbers.filter((number)=>{return number % 2 === 0});
document.querySelector("#evens").innerHTML = evens;

/* Output Sum of Org. Array */
document.getElementById("sumOfArray").innerHTML = numbers.reduce((total, num) => total + num);

/* Output Multiplied by 2 Array */
document.getElementById("multiplied").innerHTML = numbers.map((num) => num * 2);

/* Output Sum of Multiplied by 2 Array */
document.getElementById("sumOfMultiplied").innerHTML = numbers.map((num) => num * 2).reduce((total, num) => total + num);
