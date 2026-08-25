import { useState } from "react";
import "./App.css";

function App() {
  const [display, setDisplay] = useState("0");
  const [previous, setPrevious] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waiting, setWaiting] = useState(false);

  function inputNumber(number) {
    if (waiting) {
      setDisplay(number);
      setWaiting(false);
      return;
    }

    setDisplay(display === "0" ? number : display + number);
  }

  function inputDecimal() {
    if (waiting) {
      setDisplay("0.");
      setWaiting(false);
      return;
    }

    if (!display.includes(".")) {
      setDisplay(display + ".");
    }
  }

  function calculate(a, b, op) {
    if (op === "+") return a + b;
    if (op === "-") return a - b;
    if (op === "×") return a * b;
    if (op === "÷") return b === 0 ? "Error" : a / b;
    return b;
  }

  function chooseOperator(op) {
    const current = parseFloat(display);

    if (operator && previous !== null && !waiting) {
      const result = calculate(previous, current, operator);

      setDisplay(String(result));
      setPrevious(result);
    } else {
      setPrevious(current);
    }
    
    setOperator(op);
    setWaiting(true);
  }

  function handleEqual() {
    if (operator === null || previous === null) return;

    const current = parseFloat(display);
    const result = calculate(previous, current, operator);

    setDisplay(String(result));
    setPrevious(null);
    setOperator(null);
    setWaiting(true);
  }

  function clearCalculator() {
    setDisplay("0");
    setPrevious(null);
    setOperator(null);
    setWaiting(false);
  }

  function deleteNumber() {
    if (waiting) return;

    if (display.length === 1) {
      setDisplay("0");
    } else {
      setDisplay(display.slice(0, -1));
    }
  }

  function percentage() {
    const value = parseFloat(display);
    setDisplay(String(value / 100));
  }

  return (
    <div className="calculator">
      <div className="display">
        {display}
      </div>

      <div className="buttons">

        <button className="function" onClick={clearCalculator}>
          AC
        </button>

        <button className="function" onClick={deleteNumber}>
          DEL
        </button>

        <button className="function" onClick={percentage}>
          %
        </button>

        <button className="operator" onClick={() => chooseOperator("÷")}>
          ÷
        </button>

        <button onClick={() => inputNumber("7")}>7</button>
        <button onClick={() => inputNumber("8")}>8</button>
        <button onClick={() => inputNumber("9")}>9</button>

        <button className="operator" onClick={() => chooseOperator("×")}>
          ×
        </button>

        <button onClick={() => inputNumber("4")}>4</button>
        <button onClick={() => inputNumber("5")}>5</button>
        <button onClick={() => inputNumber("6")}>6</button>

        <button className="operator" onClick={() => chooseOperator("-")}>
          −
        </button>

        <button onClick={() => inputNumber("1")}>1</button>
        <button onClick={() => inputNumber("2")}>2</button>
        <button onClick={() => inputNumber("3")}>3</button>

        <button className="operator" onClick={() => chooseOperator("+")}>
          +
        </button>

        <button className="zero" onClick={() => inputNumber("0")}>
          0
        </button>

        <button onClick={inputDecimal}>
          .
        </button>

        <button className="equal" onClick={handleEqual}>
          =
        </button>

      </div>
    </div>
  );
}

export default App;