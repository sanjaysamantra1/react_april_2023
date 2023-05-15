import React, { useState } from "react";

export default function Demo6() {
  const [name, setName] = useState("Sachin");

  return (
    <>
      {console.log("Render .....")}
      <div>Demo6</div>
      <div>Name is {name}</div>
      <button onClick={() => setName("Sachin")}>Btn-1</button>
      <button onClick={() => setName("Rahul")}>Btn-2</button>
    </>
  );
}
