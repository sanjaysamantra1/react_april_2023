import React, { useState } from "react";

const CounterHigherOrderComponent = (InputComponent) => {
  function CounterHOC() {
    const [count, setCount] = useState(0);
    const increment = () => {
      setCount(count + 1);
    };
    return <InputComponent count={count} increment={increment} />;
  }
  return CounterHOC;
};
export default CounterHigherOrderComponent;
