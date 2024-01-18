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

function operate(op, num1, num2) {
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

let numButtons = document.querySelectorAll(".num");
let screen = document.querySelector("#screen-content");

numButtons.forEach(element => {
    element.addEventListener("click", () => {
        //console.log(element.textContent);
        screen.textContent += element.textContent;
    })
});