import React, { Component } from "react";

export default class EventDemo2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
    // this.f1 = this.f1.bind(this);
  }
  f1 = () => {
    console.log("I am f1...");
    console.log(this);
    console.log(this.state.counter);
  };
  render() {
    return (
      <>
        <div>EventDemo2</div>
        <button onClick={this.f1}>Btn-1</button>
      </>
    );
  }
}
