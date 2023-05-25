import React, { useEffect, useState } from "react";
import axios from "axios";

export default function HttpDemo3() {
  const [users, setUsers] = useState([]);

  const getUsers = async function () {
    let response = await axios.get("https://jsonplaceholder.typicode.com/users");
    setUsers(response.data);
    console.log(response.durationInMs);
    console.log(response.currentTime);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <h3 className="text-center">Http Demo 3</h3>

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
