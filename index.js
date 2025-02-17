let currentInput = 0;
let previousInput = 0;
let operator = "+";
let liste = "";

function number(zahl) {
  console.log(currentInput);
  if (operator === "=") {
    previousInput = 0;
    currentInput = 0;
    operator = "+";
    updatePreviousInput("");
    updateCurrentInput(currentInput);
  }

  currentInput = currentInput * 10 + zahl;

  updateCurrentInput(currentInput);
}


function add() {
  performOperator();
  operator = "+";

  updatePreviousInput(previousInput + operator);
}

function subtract() {
  performOperator();
  operator = "-";

  updatePreviousInput(previousInput + operator);
}

function multiply() {
  performOperator();
  operator = "*";
  updatePreviousInput(previousInput + operator);
}

function divide() {
  performOperator();
  operator = "/";
  updatePreviousInput(previousInput + operator);
}

function enter() {
  performOperator();
  operator = "=";
  updatePreviousInput(previousInput + operator);
  updateCurrentInput(previousInput);
}

function performOperator() {
  let currentResult = 0;
  if (operator === "+") {
    currentResult = previousInput + currentInput;
  } else if (operator === "-") {
    currentResult = previousInput - currentInput;
  } else if (operator === "*") {
    currentResult = previousInput * currentInput;
  } else if (operator === "/") {
    currentResult = previousInput / currentInput;
  }

  if (operator !== "=") {
    let listString =
      "<p class='verlauf-text'>" +
      previousInput +
      operator +
      currentInput +
      "=" +
      currentResult +
      "</p>";
    console.log(listString);
    liste = listString + liste;
    previousInput = currentResult;
    updateList(currentInput);
  }

  currentInput = 0;
  updateCurrentInput(currentInput);
}

function clearCalculator() {
  currentInput = 0;
  previousInput = 0;
  operator = "+";
  liste = "";
  updateCurrentInput("");
  updatePreviousInput("");
  updateList(liste);
}

function updateCurrentInput(text) {
  document.getElementById("eingabe").innerHTML = text;
}

function updatePreviousInput(text) {
  document.getElementById("zwichenstand").innerHTML = text;
  console.log(previousInput);
}

function updateList() {
  document.getElementById("liste").innerHTML = liste;
}
