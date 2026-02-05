export default function calculatorNextValue(displayValue, label) {
    
    if (label === "C") {
        return "0";
    }
    if (label === "Del") {
        return displayValue.length <= 1 ? "0" : displayValue.slice(0, -1);
    }
    if (label === "=") {
        try {
            return String(eval(displayValue));
        } catch (error) {
            return "Error";
        }
    }
    if (displayValue === "0") {
        return label;
    }
    const operators = new Set(["+", "-", "*", "/", "%"]);
    const lastChar = displayValue[displayValue.slice(-1)];
    if (operators.has(label) && operators.has(lastChar)) {
        return displayValue.slice(0, -1) + label;
    }
    return displayValue === "0" ? label : displayValue + label;
}

