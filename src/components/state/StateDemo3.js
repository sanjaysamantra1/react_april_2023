import React, { useState } from "react";

export default function StateDemo3() {
  let [count, setCount] = useState(0);
  let [name, updateName] = useState('Jagabandhu');

  let increment = () => {
    setCount(count + 1);
    updateName('Jagabandhu Jena');
  };

  return (
    <>
      <div>This is functional component</div>
      <div>Count is: {count}</div>
      <div>Your Name is: {name}</div>
      <button onClick={increment}>Increment</button>
    </>
  );
}
