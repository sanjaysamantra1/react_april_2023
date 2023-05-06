import React, { Component } from "react";

export default class StateDemo1 extends Component {
  state = {
    count: 0,
  };  
  render() {
    const increment = () => {
      this.setState({ count: this.state.count + 1 });
    };
    return (
      <div>
        <p>The count is: {this.state.count}</p>
        <button onClick={() => increment()}>Increment</button>
      </div>
    );
  }
}
