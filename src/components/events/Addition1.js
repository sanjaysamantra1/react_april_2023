import React, { Component } from "react";

export default class Addition1 extends Component {
  state = {
    num1: 0,
    num2: 0,
  };
  /* changeHandler1 = (event) => {
    this.setState({ num1: event.target.value });
  };
  changeHandler2 = (event) => {
    this.setState({ num2: event.target.value });
  }; */
  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <>
        <h3>Addition</h3>

        <input type="number" name="num1" onChange={this.changeHandler} />
        <input type="number" name="num2" onChange={this.changeHandler} />
        <p>
          Addition of {this.state.num1} and {this.state.num2} is
          {+this.state.num1 + +this.state.num2}
        </p>
      </>
    );
  }
}
