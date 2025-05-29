
import { useState } from "react";
import Display from "./Display";
import CalculatorButton from "./CalculatorButton";

const Calculator = () => {
  const [display, setDisplay] = useState("0");
  const [previousValue, setPreviousValue] = useState<number | null>(null);
  const [operation, setOperation] = useState<string | null>(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  const inputNumber = (num: string) => {
    if (waitingForOperand) {
      setDisplay(num);
      setWaitingForOperand(false);
    } else {
      setDisplay(display === "0" ? num : display + num);
    }
  };

  const inputOperation = (nextOperation: string) => {
    const inputValue = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(inputValue);
    } else if (operation) {
      const currentValue = previousValue || 0;
      const newValue = calculate(currentValue, inputValue, operation);

      setDisplay(String(newValue));
      setPreviousValue(newValue);
    }

    setWaitingForOperand(true);
    setOperation(nextOperation);
  };

  const calculate = (firstValue: number, secondValue: number, operation: string): number => {
    switch (operation) {
      case "+":
        return firstValue + secondValue;
      case "-":
        return firstValue - secondValue;
      case "×":
        return firstValue * secondValue;
      case "÷":
        return firstValue / secondValue;
      default:
        return secondValue;
    }
  };

  const performCalculation = () => {
    const inputValue = parseFloat(display);

    if (previousValue !== null && operation) {
      const newValue = calculate(previousValue, inputValue, operation);
      setDisplay(String(newValue));
      setPreviousValue(null);
      setOperation(null);
      setWaitingForOperand(true);
    }
  };

  const clear = () => {
    setDisplay("0");
    setPreviousValue(null);
    setOperation(null);
    setWaitingForOperand(false);
  };

  const inputDecimal = () => {
    if (waitingForOperand) {
      setDisplay("0.");
      setWaitingForOperand(false);
    } else if (display.indexOf(".") === -1) {
      setDisplay(display + ".");
    }
  };

  return (
    <div className="bg-white/20 backdrop-blur-lg rounded-3xl p-6 shadow-2xl border border-white/30">
      <Display value={display} />
      
      <div className="grid grid-cols-4 gap-3 mt-6">
        <CalculatorButton onClick={clear} className="bg-red-500 hover:bg-red-600 text-white col-span-2">
          Clear
        </CalculatorButton>
        <CalculatorButton onClick={() => inputOperation("÷")} className="bg-orange-500 hover:bg-orange-600 text-white">
          ÷
        </CalculatorButton>
        <CalculatorButton onClick={() => inputOperation("×")} className="bg-orange-500 hover:bg-orange-600 text-white">
          ×
        </CalculatorButton>

        <CalculatorButton onClick={() => inputNumber("7")} className="bg-gray-700 hover:bg-gray-600 text-white">
          7
        </CalculatorButton>
        <CalculatorButton onClick={() => inputNumber("8")} className="bg-gray-700 hover:bg-gray-600 text-white">
          8
        </CalculatorButton>
        <CalculatorButton onClick={() => inputNumber("9")} className="bg-gray-700 hover:bg-gray-600 text-white">
          9
        </CalculatorButton>
        <CalculatorButton onClick={() => inputOperation("-")} className="bg-orange-500 hover:bg-orange-600 text-white">
          -
        </CalculatorButton>

        <CalculatorButton onClick={() => inputNumber("4")} className="bg-gray-700 hover:bg-gray-600 text-white">
          4
        </CalculatorButton>
        <CalculatorButton onClick={() => inputNumber("5")} className="bg-gray-700 hover:bg-gray-600 text-white">
          5
        </CalculatorButton>
        <CalculatorButton onClick={() => inputNumber("6")} className="bg-gray-700 hover:bg-gray-600 text-white">
          6
        </CalculatorButton>
        <CalculatorButton onClick={() => inputOperation("+")} className="bg-orange-500 hover:bg-orange-600 text-white">
          +
        </CalculatorButton>

        <CalculatorButton onClick={() => inputNumber("1")} className="bg-gray-700 hover:bg-gray-600 text-white">
          1
        </CalculatorButton>
        <CalculatorButton onClick={() => inputNumber("2")} className="bg-gray-700 hover:bg-gray-600 text-white">
          2
        </CalculatorButton>
        <CalculatorButton onClick={() => inputNumber("3")} className="bg-gray-700 hover:bg-gray-600 text-white">
          3
        </CalculatorButton>
        <CalculatorButton onClick={performCalculation} className="bg-blue-500 hover:bg-blue-600 text-white row-span-2">
          =
        </CalculatorButton>

        <CalculatorButton onClick={() => inputNumber("0")} className="bg-gray-700 hover:bg-gray-600 text-white col-span-2">
          0
        </CalculatorButton>
        <CalculatorButton onClick={inputDecimal} className="bg-gray-700 hover:bg-gray-600 text-white">
          .
        </CalculatorButton>
      </div>
    </div>
  );
};

export default Calculator;
