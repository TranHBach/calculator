import React, { useState } from "react";

const Operation = React.createContext();

export const OperationProvider = (props) => {
  const [operation, setOperation] = useState('');
  const [result, setResult] = useState('0');

  const contextValue = {
    operation: operation,
    result: result,
    setOperation: setOperation,
    setResult: setResult,
  };

  return (
    <Operation.Provider value={contextValue}>
      {props.children}
    </Operation.Provider>
  );
};

export default Operation;
