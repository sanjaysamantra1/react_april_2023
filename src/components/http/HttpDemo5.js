import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import client from "./client";


export default function HttpDemo5() {
  const [users, setUsers] = useState([]);

  const getUsers = async function () {
    let response = await client.get('/users');
    setUsers(response.data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <h3 className="text-center">Http Demo 5</h3>

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
