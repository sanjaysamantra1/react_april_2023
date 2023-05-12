import React, { useEffect, useState } from "react";

export default function StateDemo3() {
  let [count, setCount] = useState(0);

  let increment = () => {
    setCount(count + 1); // asynchronous
  };
  useEffect(() => {
    console.log(count);
  });
  return (
    <>
      <div>This is functional component</div>
      <div>Count is: {count}</div>
      <button onClick={increment}>Increment</button>
    </>
  );
}
