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

  function divideSafely(a, b) {
    try {
      return divide(a, b);
    } catch (err) {
      return err.message;
    }
  }

  function getResult() {
    const valueA = inputValueA || 0;
    const valueB = inputValueB || 0;

    switch (operator) {
      case "+":
        return sum(valueA, valueB);
      case "-":
        return substract(valueA, valueB);
      case "x":
        return multiply(valueA, valueB);
      case "/":
        return divideSafely(valueA, valueB);
      default:
        return "No operator provided";
    }
  }

  const renderInput = (value, onChange, testId) => {
    return (
      <input
        data-testid={testId}
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value ? Number.parseFloat(e.target.value) : "")}
      />
    );
  };

  const renderSelectBox = () => {
    return (
      <div>
        <select
          data-testid="operator"
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

  return (
    <>
      <h1 style={{ marginBottom: 40 }}>Calculator</h1>
      {renderInput(inputValueA, setInputValueA, "inputA")}
      {renderSelectBox()}
      {renderInput(inputValueB, setInputValueB, "inputB")}
      <h2 style={{ marginTop: 20 }}>Result</h2>
      <span data-testid="result">{getResult()}</span>
    </>
  );
}
