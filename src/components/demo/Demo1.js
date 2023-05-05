/* export default function Demo1() {
  return <h1>This is Demo1 Component</h1>;
} */

import React, { Component } from "react";
import { FaEdit, FaTrash } from 'react-icons/fa';

export default class Demo1 extends Component {
  render() {
    return (
      <>
        <h1>This is Demo1 Component</h1>
        <span className="bi-alarm"></span>
        <i className="bi-apple"></i>
        <i
          className="bi-airplane"
          style={{ fontSize: "2rem", color: "cornflowerblue" }}
        ></i>

        <div>This is edit icon <FaEdit /> </div>
        <div>This is Delete icon <FaTrash /> </div>
      </>
    );
  }
}
