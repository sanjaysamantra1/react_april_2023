import React, { Component } from "react";

export default class RefDemo3 extends Component {
  addition = () => {
    let value_1 = parseInt(this.myRef1.value);
    let value_2 = parseInt(this.myRef2.value);
    alert(value_1 + value_2);
  };
  render() {
    return (
      <>
        <h2>Addition using Ref</h2>
        <input ref={(input1) => (this.myRef1 = input1)} /> <br />
        <input ref={(input2) => (this.myRef2 = input2)} /> <br />
        <button onClick={this.addition}>Add</button>
      </>
    );
  }
}
