import React from "react";
import PropTypes from "prop-types";

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

Counter.propTypes = {
  count: PropTypes.number,
};
