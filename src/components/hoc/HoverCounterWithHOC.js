import React from "react";
import CounterHigherOrderComponent from "./CounterHOC";

function HoverCounterWithHOC(props) {
  return <>
    <button onMouseOver={props.increment}>  {props.count} Times</button>
  </>
}
export default CounterHigherOrderComponent(HoverCounterWithHOC);
