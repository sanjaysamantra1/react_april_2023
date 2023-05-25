import React, { useState } from "react";
export default function HoverCounter() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  return (
    <>
      <h2>In Hover Counter Component - count is {count}</h2>
      <button onMouseOver={increment}>Hover me</button>
    </>
  );
}
