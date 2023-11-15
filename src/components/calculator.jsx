import { useState } from "react";
import { divide, multiply, substract, sum } from "utils/math-functions";

const OPERATORS = ["+", "-", "x", "/"];

export function Calculator({ defaultA, defaultB, defaultOperator }) {
  const [inputValueA, setInputValueA] = useState(
    !defaultA || isNaN(defaultA) ? 0 : Number(defaultA)
  );
  const [inputValueB, setInputValueB] = useState(
    !defaultB || isNaN(defaultB) ? 0 : Number(defaultB)
  );
  const [operator, setOperator] = useState(
    OPERATORS.includes(defaultOperator) ? defaultOperator : "+"
  );

  function getResult() {
    switch (operator) {
      case "+":
        return sum(inputValueA, inputValueB);
      case "-":
        return substract(inputValueA, inputValueB);
      case "x":
        return multiply(inputValueA, inputValueB);
      case "/":
        return divide(inputValueA, inputValueB);
      default:
        return "No operator provided";
    }
  }

  const renderInput = (value, onChange) => {
    return (
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(Number.parseFloat(e.target.value))}
      />
    );
  };

  const renderSelectBox = () => {
    return (
      <div>
        <select
          className="form-select"
          value={operator}
          onChange={(e) => setOperator(e.target.value)}
        >
          {OPERATORS.map((op) => (
            <option key={op} value={op}>
              {op}
            </option>
          ))}
        </select>
      </div>
    );
  };
  console.log(inputValueA);
  return (
    <>
      <h1 style={{ marginBottom: 40 }}>Calculator</h1>
      {renderInput(inputValueA, setInputValueA)}
      {renderSelectBox()}
      {renderInput(inputValueB, setInputValueB)}
      <h2 style={{ marginTop: 20 }}>Result</h2>
      {getResult()}
    </>
  );
}
