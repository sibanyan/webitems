document.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll(".btn");

    let currentInput = "";
    let previousInput = "";
    let operator = null;
    
    function updateDisplay(value) {
        display.textContent = value;
    }

    function handleNumber(num) {
        if (currentInput === "0") {
            currentInput = num;
        } else {
            currentInput += num;
        }
        updateDisplay(currentInput);
    }

    function handleOperator(op) {
        if (currentInput === "" && previousInput === "") return;

        if (previousInput !== "") {
            calculate();
        }

        operator = op;
        previousInput = currentInput;
        currentInput = "";
    }

    function calculate() {
        if (previousInput === "" || currentInput === "") return;

        let result;
        const num1 = parseFloat(previousInput);
        const num2 = parseFloat(currentInput);

        switch (operator) {
            case "+": result = num1 + num2; break;
            case "-": result = num1 - num2; break;
            case "×": result = num1 * num2; break;
            case "÷":
                if (num2 === 0) {
                    updateDisplay("エラー");
                    return;
                }
                result = num1 / num2;
                break;
        }

        currentInput = result.toString();
        previousInput = "";
        operator = null;
        updateDisplay(currentInput);
    }

    function clearCalculator() {
        currentInput = "";
        previousInput = "";
        operator = null;
        updateDisplay("0");
    }

    function handleDecimal() {
        if (!currentInput.includes(".")) {
            currentInput += ".";
            updateDisplay(currentInput);
        }
    }

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const type = button.dataset.type;
            const value = button.textContent;

            switch (type) {
                case "number": handleNumber(value); break;
                case "operator": handleOperator(value); break;
                case "equal": calculate(); break;
                case "clear": clearCalculator(); break;
                case "decimal": handleDecimal(); break;
            }
        });
    });

    document.addEventListener("keydown", (event) => {
        const key = event.key;

        if (!isNaN(key)) {
            handleNumber(key);
        } else if (key === "+" || key === "-" || key === "*" || key === "/") {
            const op = key === "*" ? "×" : key === "/" ? "÷" : key;
            handleOperator(op);
        } else if (key === "Enter" || key === "=") {
            calculate();
        } else if (key === "Escape") {
            clearCalculator();
        } else if (key === ".") {
            handleDecimal();
        }
    });
});
