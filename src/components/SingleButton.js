import { useContext } from "react";
import Operation from "../store/operation";

const input = [
  {
    key: "AC",
    class: "clear double",
    id: "clear",
  },
  {
    key: "/",
    class: "operator",
    id: "divide",
  },
  {
    key: "x",
    class: "operator",
    id: "multiply",
  },
  {
    key: "7",
    class: "number",
    id: "seven",
  },
  {
    key: "8",
    class: "number",
    id: "eight",
  },
  {
    key: "9",
    class: "number",
    id: "nine",
  },
  {
    key: "-",
    class: "operator",
    id: "subtract",
  },
  {
    key: "4",
    class: "number",
    id: "four",
  },
  {
    key: "5",
    class: "number",
    id: "five",
  },
  {
    key: "6",
    class: "number",
    id: "six",
  },
  {
    key: "+",
    class: "operator",
    id: "add",
  },
  {
    key: "1",
    class: "number",
    id: "one",
  },
  {
    key: "2",
    class: "number",
    id: "two",
  },
  {
    key: "3",
    class: "number",
    id: "three",
  },
  {
    key: "=",
    class: "calculate",
    id: "equals",
  },
  {
    key: "0",
    class: "number",
    id: "zero",
  },
  {
    key: ".",
    class: "number double",
    id: "decimal",
  },
];

function SingleButton() {
  const contextValue = useContext(Operation);
  function onClickHandler(event) {
    let insertedValue = "";
    if (event.target.innerText === "=") {
      let result = eval(contextValue.operation.replace("⋅", "*"));
      contextValue.setResult(result);
      contextValue.setOperation((prevState) => prevState + "=" + result);
    } else if (event.target.innerText === "AC") {
      contextValue.setOperation("");
      contextValue.setResult("0");
    } else if (["x", "/", "+", "-"].includes(event.target.innerText)) {
      contextValue.setResult(event.target.innerText);
      insertedValue = event.target.innerText;
      if (contextValue.result !== "0" && contextValue.operation.includes("=")) {
        contextValue.setOperation(contextValue.result);
      }
    } else {
      insertedValue = event.target.innerText;
      contextValue.setResult((prevState) =>
        parseInt(prevState + event.target.innerText)
      );
    }
    if (event.target.innerText === "x") {
      insertedValue = "⋅";
    }
    contextValue.setOperation((prevState) => prevState + insertedValue);
  }
  return (
    <>
      {input.map((each) => {
        let column = each.key === "AC" || each.key === "0" ? "col-6" : "col-3";
        return (
          <button
            onClick={onClickHandler}
            key={each.id}
            id={each.id}
            className={column + " singleButton " + each.class}
          >
            {each.key}
          </button>
        );
      })}
    </>
  );
}

export default SingleButton;
