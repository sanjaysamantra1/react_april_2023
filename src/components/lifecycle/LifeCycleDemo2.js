import React, { Component } from "react";
import LifeCycleDemo3 from "./LifeCycleDemo3";

export default class LifeCycleDemo2 extends Component {
  state = { flag: true };
  render() {
    return (
      <div>
        <h3>This is LifeCycleDemo-2 Component</h3>
        <button
          onClick={() => {
            this.setState({ flag: !this.state.flag });
          }}
        >
          Toggle Flag
        </button>
        {this.state.flag ? <LifeCycleDemo3 /> : null}
      </div>
    );
  }
}
