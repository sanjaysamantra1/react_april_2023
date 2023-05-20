import React, { Component } from "react";

export default class LifeCycleDemo1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Sachin",
      users: [],
    };
    console.log("Constructor...");
  }
 /*  static getDerivedStateFromProps(props, state) {
    console.log("GetDerivedStateFromProps...", props, state);
  } */
  
 /*  shouldComponentUpdate() {
    console.log("ShouldComponentUpdate...");
    return true;
  } */
  fetchUsers = async () => {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let userData = await response.json();
    this.setState({ users: userData });
  };
  componentDidMount() {
    console.log("ComponentDidMount...");
    this.fetchUsers();
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    document.getElementById("div1").innerHTML =
      "Before the update, the name was " + prevState.name;
  }
  // componentDidUpdate() {
  //   document.getElementById("div2").innerHTML =
  //     "The updated name is " + this.state.name;
  // }
  render() {
    console.log("Render...");
    return (
      <div className="border card">
        LifeCycleDemo1
        <div id="div1"></div>
        <div id="div2"></div>
        <button
          onClick={() => {
            this.setState({ name: "Deepak" });
          }}
          className="btn btn-primary btn-sm"
        >
          Update-Name
        </button>
        <hr />
        <h2>Users</h2>
        <ul>
          {this.state.users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}
