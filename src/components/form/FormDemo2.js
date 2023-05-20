import React from "react";
import { useState } from "react";
import { useRef } from "react";

export default function FormDemo2() {
  const [fname, setFname] = useState("sachin");
  const [lname, setLname] = useState("tendulkar");

  const ref1 = useRef();
  const ref2 = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(fname + " " + lname);
    console.log(ref1.current.value + " " + ref2.current.value);
  };

  const resetMyForm = () => {
    document.getElementById("myForm").reset();
  };

  return (
    <>
      <form onSubmit={submitHandler} id="myForm" onReset={resetMyForm}>
        First Name:
        <input name="fname" ref={ref1} />
        Last Name:
        <input name="lname" ref={ref2} />
        <br />
        <br />
        <input type='submit' />
        <input type="reset" />
      </form>
    </>
  );
}
