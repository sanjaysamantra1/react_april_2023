import React, { useState } from "react";
import Cars from "./Cars";
import Counter from "./Counter";

export default function MemoParent() {
  const [count, setCount] = useState(0);
  const [cars, setCars] = useState(["tata", "honda"]);

  return (
    <>
      {/* {console.log("memo parent rendered...")} */}
      <div>MemoParent</div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCars([...cars, "maruti"])}>Add New Car</button>
      ==========================================================
      <Counter count={count}  />
      =========================================================
      <Cars cars={cars} />
    </>
  );
}
