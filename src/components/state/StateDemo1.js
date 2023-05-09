import React, { Component } from "react";

export default class StateDemo1 extends Component {
  count = 0;
  increment = () => {
    this.count = this.count + 1;
    console.log(this.count);
  };
  render() {
    return (
      <div>
        <p>The count is: {this.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}
