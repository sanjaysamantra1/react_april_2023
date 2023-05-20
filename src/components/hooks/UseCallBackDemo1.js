import React, { useCallback } from "react";
import { useState } from "react";
import Cars from "../memo/Cars";
import Counter from "../memo/Counter";

export default function UseCallBackDemo1() {
  const [count, setCount] = useState(0);
  const [cars, setCars] = useState(["tata", "honda"]);

  const increment = useCallback(()=>{
        setCount(count + 1);
  },[count])
  const addNewcar = useCallback(() => {
    setCars([...cars, "New Car"]);
  },[cars])

  return (
    <>
      <div>Use callback demo1</div>
      <button onClick={increment}>Increment</button>
      <button onClick={addNewcar}>Add New car</button>
      ==========================================================
      <Counter count={count} increment={increment} />
      =========================================================
      <Cars cars={cars} addNewcar={addNewcar} />
    </>
  );
}
