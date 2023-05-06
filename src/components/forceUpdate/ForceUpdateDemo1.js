import React, { Component } from "react";

export default class ForceUpdateDemo1 extends Component {
  render() {
    let count = 0;
    function increment() {
      count = count + 1;
      alert(count);
    }
    return (
      <div>
        <p>The count is: {count}</p>
        <button onClick={() => increment()}>Add one</button>
      </div>
    );
  }
}
