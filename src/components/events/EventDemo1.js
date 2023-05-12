import React from "react";

export default function EventDemo1() {
  const f1 = function () {
    console.log("I am f1...");
  };
  const add = (a, b) => {
    alert(a + b);
  };

  return (
    <>
      <button onClick={f1} className='m-1'>Btn-1</button>
      <button onClick={()=>{add(2, 3)}} className='m-1'>Add</button>
      <button onClick={add.bind(this,2,3)}>Add-2</button>
    </>
  );
}
