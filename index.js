const numbersButton = document.querySelectorAll("[data-numero]");
const operatorsButton = document.querySelectorAll("[data-operador]");
const eraserAll = document.querySelector("[data-borrar]");
const eraser = document.querySelector("[data-borrar-1]");
const equal = document.querySelector("[data-igual]");
const textBeforeValue = document.querySelector("[data-valor-anterior]");
const textActualValue = document.querySelector("[data-valor-actual]");

class Calculator {
  constructor(textActualValue, textBeforeValue) {
    this.textActualValue = textActualValue;
    this.textBeforeValue = textBeforeValue;
    this.beforeValue = "";
    this.actualValue = "";
    this.operator = undefined;
    this.result = this.result;
  }

  addNumber(number) {
    if (number === "." && this.beforeValue.includes(".")) return;

    this.beforeValue = this.beforeValue + number;
  }

  printDisplay() {
    this.textBeforeValue.innerText = this.beforeValue;
    this.textActualValue.innerText = this.actualValue;
  }

  lastNumberEraser() {
    this.beforeValue = this.beforeValue.toString().slice(0, -1);

  }


  eraser() {
    this.beforeValue = "";
    this.actualValue = "";
    this.operator = undefined;
  }

  chooseOperator(operator) {
    if (this.beforeValue === "") return;
    if (this.actualValue !== "") {
      this.calcDone();
    }
    this.operator = operator;
    this.actualValue = this.beforeValue;
    this.beforeValue = "";
  }

  calcDone() {
    let converBeforeValue = parseFloat(this.beforeValue);
    let converActualValue = parseFloat(this.actualValue);

    if (isNaN(converBeforeValue) || isNaN(converActualValue)) return;

    switch (this.operator) {
      case "+":
        this.result = converActualValue + converBeforeValue;
        break;
      case "-":
        this.result = converActualValue - converBeforeValue;
        break;
      case "x":
        this.result = converBeforeValue * converActualValue;
        break;
      case "÷":
        this.result = converActualValue / converBeforeValue;
        break;
      default:
        return;
    }

    this.beforeValue = this.result;
    this.operator = undefined;
    this.actualValue = "";
  }
}

const calculator = new Calculator(textActualValue, textBeforeValue);

numbersButton.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.addNumber(button.innerText);
    calculator.printDisplay();
  });
});

eraser.addEventListener("click", () => {
  calculator.lastNumberEraser();
  calculator.printDisplay();
});

eraserAll.addEventListener("click", () => {
  calculator.eraser();
  calculator.printDisplay();
});

operatorsButton.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.chooseOperator(button.innerText);
    calculator.printDisplay();
  });
});

equal.addEventListener("click", () => {
  calculator.calcDone();
  calculator.printDisplay();
});