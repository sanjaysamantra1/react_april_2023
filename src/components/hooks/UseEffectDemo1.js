import React, { useState, useEffect } from "react";

export default function UseEffectDemo1() {
  const [a, setA] = useState(10);
  const [b, setB] = useState(20);
  const [c, setC] = useState(30);

  let arr = [a, b];

  useEffect(() => {
    console.log("UseEffect called...");
  }, arr);

  console.log("Render...");
  return (
    <>
      <div>This is Use Effect Example</div>
      <div>a value is {a}</div>
      <div>b value is {b}</div>
      <div>c value is {c}</div>

      <button onClick={() => setA(a + 1)}>Update-A</button>
      <button onClick={() => setB(b + 1)}>Update-B</button>
      <button onClick={() => setC(c + 1)}>Update-C</button>
    </>
  );
}
