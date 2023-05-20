import React, { useEffect, useState } from "react";

export default function UseEffectDemo2() {
  let [userId, setUserId] = useState(1);
  let [user, setUser] = useState({
    name: "",
    email: "",
  });
  let [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Use effect");
    async function fetchData() {
      let response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      );
      let data = await response.json();
      setUser({ ...data });
    }
    fetchData();
  });

  return (
    <>
      <h2 className="text-center">This is use_effect example 2</h2>
      <div>Count is {count}</div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <hr />

      <button
        onClick={() => {
          setUserId(userId + 1);
        }}
      >
        Increment User Id
      </button>
      <div className="card col-sm-3">
        <img
          width="100"
          height="100"
          class="card-img-top"
          src="https://www.w3schools.com/bootstrap5/img_avatar3.png"
          alt="Card image"
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">{user.name}</p>
          <p className="card-text">{user.email}</p>
          <p className="card-text">{userId}</p>
        </div>
      </div>
    </>
  );
}
