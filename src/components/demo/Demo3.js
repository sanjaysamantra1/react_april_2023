import React from "react";
import "./Style1.css";
import styles from "./Style1.module.css";

export default function Demo3() {
  return (
    <>
      <div className="class1">This is a div</div>
      <br></br>
      <div className={styles.class1}>This is another div</div>
      <h1>This is an h1 in Demo-3</h1>
    </>
  );
}
