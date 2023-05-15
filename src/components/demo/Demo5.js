import React, { Component, PureComponent } from "react";

export default class Demo5 extends PureComponent {
  state = {
    name: "Sachin",
  };
  updateName = () => {
    this.setState({ name: "Sachin" });
  };
  updateName2 = () => {
    this.setState({ name: "Rahul" });
  };
  render() {
    console.log("Render called...");
    return (
      <>
        <div>Demo 5 component</div>
        <div>Name is {this.state.name}</div>
        <button onClick={this.updateName}>Update Name</button>
        <button onClick={this.updateName2}>Update Name-2</button>
      </>
    );
  }
}
