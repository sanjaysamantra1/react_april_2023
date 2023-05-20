import React, { Component } from "react";

export default class LifeCycleDemo3 extends Component {
  intervalID = 0;

  componentDidMount() {
    this.intervalID = setInterval(()=>{
        console.log(new Date().toLocaleTimeString())
        document.getElementById('myTime').innerText = new Date().toLocaleTimeString();
    },1000);
  }
  render() {
    console.log("render...");
    return <div>This is LifeCycleDemo3 Component 
        <h3>Current Time is: <span id='myTime'></span></h3>
    </div>;
  }
  componentWillUnmount() {
    console.log("Component will unmount...");
    clearInterval(this.intervalID);
  }
}
