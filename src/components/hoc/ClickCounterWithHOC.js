import React from "react";
import CounterHigherOrderComponent from "./CounterHOC";

function ClickCounterWithHOC(props) {
  return (
    <>
      <button onClick={props.increment}>{props.count} Times Clicked</button>
    </>
  );
}
export default CounterHigherOrderComponent(ClickCounterWithHOC);
