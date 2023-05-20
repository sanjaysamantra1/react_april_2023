import React, { Component } from "react";

export default class RefDemo1 extends Component {
  constructor(props) {
    super(props);

    this.myRef1 = React.createRef();
    this.myRef2 = React.createRef();
  }
  componentDidMount() {
    this.myRef1.current.value = 10;
    this.myRef2.current.value = 20;
  }
  addition = () => {
    console.log(this.myRef1);
    let value_1 = parseInt(this.myRef1.current.value);
    let value_2 = parseInt(this.myRef2.current.value);
    alert(value_1 + value_2);
  };
  render() {
    return (
      <>
        <h2>Addition using Ref</h2>
        <input ref={this.myRef1} /> <br />
        <input ref={this.myRef2} /> <br />
        <button onClick={this.addition}>Add</button>
      </>
    );
  }
}
