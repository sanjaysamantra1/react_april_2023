import React from "react";
import { useRef } from "react";

export default function RefDemo2() {
  let myRef1 = useRef();
  let myRef2 = useRef();

  const addition = () => {
    let value_1 = parseInt(myRef1.current.value);
    let value_2 = parseInt(myRef2.current.value);
    alert(value_1 + value_2);
  };
  return (
    <>
      <h2>Addition using Ref</h2>
      <input ref={myRef1} /> <br />
      <input ref={myRef2} /> <br />
      <button onClick={addition}>Add</button>
    </>
  );
}
