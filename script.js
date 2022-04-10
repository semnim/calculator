let display = document.querySelector('.display');
let displayValue = document.querySelector(".display").textContent;
let numButtons = document.querySelectorAll(".num--button");
let operatorButtons = document.querySelectorAll(".operator--button");
let operation = null;
let equalsButton = document.querySelector(".equals--button");
let operandA = "";
let operandB = 0;

equalsButton.addEventListener("click", () => {
    display.textContent = operate(operation, parseInt(operandA), operandB);
    displayValue = display.textContent;
    checkClearScreen();
    operation = null;
});
numButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (operation !== null) {
            operandB = parseInt(button.textContent);
            display.textContent = operandB;
        } else if (displayValue === "0" || display.textContent == "÷" || display.textContent == "×" || display.textContent == "+" || display.textContent == "-") {
            display.textContent = button.textContent;
            operandA = display.textContent;
        } else {
            display.textContent += button.textContent;
            operandA += button.textContent;
            console.log(operandA);
        }
        displayValue = display.textContent;
        console.log("Disp: " + displayValue);
        checkClearScreen();
    });
});

operatorButtons.forEach(button => {
    button.addEventListener("click", () => {
        operation = button.textContent;
        display.textContent = operation;
        displayValue = display.textContent;
        console.log(displayValue);
        checkClearScreen();
    });
});
function checkClearScreen() {
    if (displayValue.length == 7) {
        display.textContent = "";
    }
}
function operate(operator, x, y) {
    console.log(operator, x, y);
    switch (operator) {
        case '+':
            return x + y;
        case '-':
            return x - y;
        case '×':
            return x * y;
        case '÷':
            return x / y;
    }
}
