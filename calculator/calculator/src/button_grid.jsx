
import Button from "./button.jsx";

export default function ButtonGrid({ onButtonClick }) {
  const buttons = [
    "(",")","C","/",
    "7","8","9","*",
    "4","5","6","-",
    "1","2","3","+",
    "0",".","=","Del"
  ];

  return (
    <div className="grid">
      {buttons.map((b) => (
        <Button key={b} label={b} onClick={() => onButtonClick(b)}>{b}</Button>
      ))}
    </div>
  );
}
