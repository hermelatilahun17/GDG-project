/*import { useState } from "react";
import Display from "./display.jsx";
import ButtonGrid from "./button_grid.jsx";

export default function App() {
  const [displayValue, setDisplayValue] = useState("0");

  function handleButtonClick(label) {
    setDisplayValue(label);
   // console.log("Pressed:", label);
  }

  return (
    <div className="calculator">
      <Display value={displayValue} />
      <ButtonGrid onButtonClick={handleButtonClick} />
    </div>
  );
}*/
import { useState } from "react";
import Display from "./display.jsx";
import ButtonGrid from "./button_grid.jsx";
import calculatorNextValue from "./calculatorLogic.js";

export default function App() {
  const [displayValue, setDisplayValue] = useState("0");

  function handleButtonClick(label) {
    setDisplayValue(prev => calculatorNextValue(prev, label));
  }

  return (
    <div className="calculator">
      <Display value={displayValue} />
      <ButtonGrid onButtonClick={handleButtonClick} />
    </div>
  );
}

