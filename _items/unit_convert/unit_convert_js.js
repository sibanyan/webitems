document.addEventListener("DOMContentLoaded", () => {
    const unitType = document.getElementById("unit-type");
    const inputValue = document.getElementById("input-value");
    const fromUnit = document.getElementById("from-unit");
    const toUnit = document.getElementById("to-unit");
    const resultDisplay = document.getElementById("result");
    const saveButton = document.getElementById("save-conversion");
    const savedList = document.getElementById("saved-list");

    const unitOptions = {
        length: { "m": 1, "km": 0.001, "cm": 100, "mm": 1000 },
        weight: { "kg": 1, "g": 1000, "lb": 2.20462, "oz": 35.274 },
        temperature: { "C": "C", "F": "F", "K": "K" }
    };

    function updateUnitOptions() {
        fromUnit.innerHTML = "";
        toUnit.innerHTML = "";
        let units = Object.keys(unitOptions[unitType.value]);

        units.forEach(unit => {
            let option1 = new Option(unit, unit);
            let option2 = new Option(unit, unit);
            fromUnit.add(option1);
            toUnit.add(option2);
        });
    }

    function convert() {
        let value = parseFloat(inputValue.value);
        if (isNaN(value)) {
            resultDisplay.innerText = "--";
            return;
        }

        let from = fromUnit.value;
        let to = toUnit.value;

        let result;
        switch (unitType.value) {
            case "length":
            case "weight":
                result = value * (unitOptions[unitType.value][to] / unitOptions[unitType.value][from]);
                break;
            case "temperature":
                result = convertTemperature(value, from, to);
                break;
        }

        resultDisplay.innerText = result.toFixed(2);
    }

    function convertTemperature(value, from, to) {
        if (from === to) return value;
        if (from === "C" && to === "F") return value * 9/5 + 32;
        if (from === "C" && to === "K") return value + 273.15;
        if (from === "F" && to === "C") return (value - 32) * 5/9;
        if (from === "F" && to === "K") return (value - 32) * 5/9 + 273.15;
        if (from === "K" && to === "C") return value - 273.15;
        if (from === "K" && to === "F") return (value - 273.15) * 9/5 + 32;
        return value;
    }

    function saveConversion() {
        let savedData = `${inputValue.value} ${fromUnit.value} → ${resultDisplay.innerText} ${toUnit.value}`;
        let li = document.createElement("li");
        li.innerText = savedData;
        savedList.appendChild(li);

        let savedConversions = JSON.parse(localStorage.getItem("savedConversions")) || [];
        savedConversions.push(savedData);
        localStorage.setItem("savedConversions", JSON.stringify(savedConversions));
    }

    function loadSavedConversions() {
        let savedConversions = JSON.parse(localStorage.getItem("savedConversions")) || [];
        savedConversions.forEach(data => {
            let li = document.createElement("li");
            li.innerText = data;
            savedList.appendChild(li);
        });
    }

    unitType.addEventListener("change", updateUnitOptions);
    inputValue.addEventListener("input", convert);
    fromUnit.addEventListener("change", convert);
    toUnit.addEventListener("change", convert);
    saveButton.addEventListener("click", saveConversion);

    updateUnitOptions();
    loadSavedConversions();
});
