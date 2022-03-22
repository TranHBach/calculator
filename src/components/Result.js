import { useContext } from "react";
import Operation from "../store/operation";

function Result() {
  const contextValue = useContext(Operation);
  return (
    <div className="resultScreen">
      <label>{contextValue.operation}</label>
      <p id="display">{contextValue.result}</p>
    </div>
  );
}

export default Result;
