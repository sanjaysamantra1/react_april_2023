import React from "react";
import { useState } from "react";

export default function FormDemo3() {
  const [user, setUser] = useState({
    fname: "sachin",
    lname: "tendulkar",
    email: "sachin@gmail.com",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        First Name:
        <input
          name="fname"
          value={user.fname}
          onChange={(e) => setUser({ ...user, fname: e.target.value })}
        />
        Last Name:
        <input
          name="lname"
          value={user.lname}
          onChange={(e) => setUser({ ...user, lname: e.target.value })}
        />
        <br />
        <br />
        Email:
        <input
          name="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <br />
        <br />
        state data: {user.fname + "---" + user.lname + "---" + user.email}{" "}
        <br />
        <br />
        <button>submit</button>
      </form>
    </>
  );
}
