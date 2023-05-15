import React, { useState } from "react";

export default function Child2({setName}) {
  const [a, setA] = useState(10);
  return (
    <>
      <div>Child2</div>
      <div>my own data a is {a}</div>

      <button onClick={()=>{setName('Rahul')}}>Update Name</button>
    </>
  );
}
