import React from "react";

export default function StateDemo0() {
  let count = 0;
  const increment = () => {
    count = count + 1;
    console.log("count: " + count);
  };

  return (
    <>
      <div>Count is {count}</div>
      <button onClick={increment}>Increment</button>
    </>
  );
}
