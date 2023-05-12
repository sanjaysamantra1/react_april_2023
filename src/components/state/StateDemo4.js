import React, { Component, useState } from "react";
import Swal from "sweetalert2";

/* export default class StateDemo4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: true,
    };
  }
  toggleFlag = () => {
    this.setState({ flag: !this.state.flag });
  };
  render() {
    return (
      <>
        {this.state.flag ? <h2>This is a Paragraph</h2> : null}
        <button onClick={this.toggleFlag}>
          {this.state.flag ? 'HIDE' : 'SHOW'}
        </button>
      </>
    );
  }
} */

export default function StateDemo4() {
  let [flag, setFlag] = useState(true);
  const openMyAlert = ()=>{
    Swal.fire(	
      'Good job!',	
      'You clicked the button!',	
      'success'	
    )
  }
  return (
    <>
      {flag?<h2>This is a paragraph</h2>:null}
      <button onClick={()=>{setFlag(!flag)}}>
        {flag?'HIDE':'SHOW'}
      </button>
      <br/><br/>
      <button onClick={openMyAlert}>alert</button>
    </>
  );
}
