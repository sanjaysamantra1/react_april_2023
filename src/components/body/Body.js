import React from "react";
import ConditionalDemo1 from "../conditional/ConditionalDemo1";
import ConditionalDemo2 from "../conditional/ConditionalDemo2";
import Demo1 from "../demo/Demo1";
import Demo2 from "../demo/Demo2";
import Demo3 from "../demo/Demo3";
import Demo4 from "../demo/Demo4";
import "./Body.css";

export default function Body() {
  return (
    <div className="body">
      {/* <div>This is My Body Component</div> */}
      {/* <Demo1/> */}
      {/* <Demo2 /> */}
      {/* <Demo3 /> */}
      {/* <Demo4/> */}
      {/* <ConditionalDemo1 /> */}
      <ConditionalDemo2 />
    </div>
  );
}
