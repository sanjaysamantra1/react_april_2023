import React, { useState } from "react";

export default function Addition2() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  /* const changeHandler1 = (event) => {
    setNum1(event.target.value);
  };
  const changeHandler2 = (event) => {
    setNum2(event.target.value);
  }; */

  const changeHandler = (event) => {
    console.log(event)
    if (event.target.name === "num1") {
      setNum1(event.target.value);
    } else {
      setNum2(event.target.value);
    }
  };

  return (
    <>
      <h3>Addition</h3>
      <input onChange={changeHandler} />

      <input type="number" onChange={event=>{setNum1(event.target.value)}} />
      <input type="number" onChange={event=>{setNum2(event.target.value)}} />
      <p>
        Addition of {num1} and {num2} is{+num1 + +num2}
      </p>
    </>
  );
}
