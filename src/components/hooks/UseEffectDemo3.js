import React, { useState } from "react";
import { useEffect } from "react";

export default function UseEffectDemo3() {
  const [color, setColor] = useState("red");

  useEffect(() => {
    console.log("use effect called while mounting/updating");

    return () => {
      console.log("use effect called while unmounting");
    };
    
  }, []);

  return (
    <div>
      <p id="para1">This is a paragraph</p>
      <button
        onClick={() => {
          setColor("red");
        }}
      >
        click me
      </button>
      <h2>color value is {color}</h2>
    </div>
  );
}
