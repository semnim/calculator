let display = document.querySelector(".display--main");
let memoryDisplay = document.querySelector(".display--upper")
let numButtons = document.querySelectorAll(".num--button");
let operatorButtons = document.querySelectorAll(".operator--button");
let equalsButton = document.querySelector(".equals--button");
let clearButton = document.querySelector(".clear");
let deleteButton = document.querySelector(".delete");
const operation = {
  sign: "",
  x: "",
  y: "",
  result: "",
};
const operators = ["+", "-", "×", "÷"];

clearButton.addEventListener("click", () => {
     memoryDisplay.textContent = "Cleared";
     display.textContent = "0";
});
deleteButton.addEventListener("click", () => {
    if (display.textContent.length == 1) {
        display.textContent = "0";
        return;
    }
    display.textContent = display.textContent.slice(0, -1);
});

document.addEventListener("keypress", (e) => {
  switch (e.key) {
    case "+":
      document.getElementById("add").click();
      break;
    case "-":
      document.getElementById("subtract").click();
      break;
    case "*":
      document.getElementById("multiply").click();
      break;
    case "/":
      document.getElementById("divide").click();
      break;
    case "=":
    case "Enter":
      document.getElementById("equal").click();
      break;
    default:
      if (e.key >= 0 && e.key <= 9) {
        document.getElementById(e.key).click();
      }
  }
});

equalsButton.addEventListener("click", () => {
  if (operation.sign === "") {
      return;
  }
  operation.y = display.textContent;
  if (operation.sign === "÷" && operation.y === "0") {
      memoryDisplay.textContent = "Stop screwing around.";
      return;
  }
  operation.result = operate(operation.sign, parseInt(operation.x), parseInt(operation.y));
  memoryDisplay.textContent += ` ${operation.y} =`;
  display.textContent = operation.result;
  operation.sign = "";
});

function updateDisplay(number) {
    if (display.textContent === "0" || display.textContent === "") {
        display.textContent = number;
    } else {
        display.textContent += number;
    }
}
numButtons.forEach((button) => {
  button.addEventListener("click", () => {
    updateDisplay(button.textContent);
  });
});

operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    operation.sign = button.textContent;
    updateMemory(operation.sign);
  });
});
function updateMemory(operator) {
    let lastChar = memoryDisplay.textContent.slice(-1);
    
    if (operators.includes(lastChar)) {
        memoryDisplay.textContent = memoryDisplay.textContent.replace(/.$/, operator);
    } else {
        operation.x = display.textContent;
        memoryDisplay.textContent = `${display.textContent} ${operator}`;
    }
    display.textContent = "";
}
function operate(operator, x, y) {
  switch (operator) {
    case "+":
      return x + y;
    case "-":
      return x - y;
    case "×":
      return x * y;
    case "÷":
      return x / y;
  }
}
