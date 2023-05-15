import React from "react";

function Counter({ count }) {
  return (
    <>
      {console.log("Counter component rendered....")}
      <h3>This is Counter Component</h3>
      <div>Count value is {count}</div>
    </>
  );
}
export default React.memo(Counter);
