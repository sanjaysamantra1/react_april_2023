import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import useFetch from "./fetchHook";

export default function FetchUser() {
  /* const [users, setUsers] = useState([]);

  const getUsers = async function () {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await response.json();
    setUsers(data);
  };

  useEffect(() => {
    getUsers();
  }, []); */
  let users = useFetch("https://jsonplaceholder.typicode.com/users");

  return (
    <>
      <h3 className="text-center">Fetch User</h3>

      <table className="table table-striped table-bordered table-hover">
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.address.city}</td>
                <td>{user.phone}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
