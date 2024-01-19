function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

let firstNum;
let secondNum;
let operator;

function operate(num1, op, num2) {
    switch(op) {
        case "+":
            return add(num1, num2);
            break;
        case "-":
            return subtract(num1, num2);
            break;
        case "*":
            return multiply(num1, num2);
            break;
        case "/":
            return divide(num1, num2);
            break;
    }
}

let displayValue;
let arr = [];
let result;


let numButtons = document.querySelectorAll(".num");
let screen = document.querySelector("#screen-content");
let clear = document.querySelector("#clear");
let equals = document.querySelector("#equals");

clear.addEventListener("click", () => {
    screen.textContent = "0";
    displayValue = 0;
});

numButtons.forEach(element => {
    element.addEventListener("click", () => {
        if (screen.textContent == "0" || ((element.textContent >= "0" && element.textContent <= "9") && screen.textContent == result)) screen.textContent = element.textContent;
        else {
            screen.textContent += element.textContent;
            displayValue = screen.textContent;
            arr = displayValue.split((/([\+\-\*\/])/));
        }
        
    })
});

equals.addEventListener("click", () => {
    while (arr.length >= 3) {
        result = arr.splice(0, 3);
        result = operate(parseInt(result[0]), result[1], parseInt(result[2]));
        arr.unshift(result);
    }

    if (result == Infinity) {
        alert("Don't divide by zero!");
        result = "";
    }
    if (isFloatOrInteger(result)) screen.textContent = result.toFixed(2);
    screen.textContent = result;
    
});

function isFloatOrInteger(number) {
    return Math.abs(number - Math.round(number)) > Number.EPSILON;
  }

