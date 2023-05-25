import React, { useEffect, useState } from "react";

export default function HttpDemo2() {
  const [users, setUsers] = useState([]);

  const getUsers = async function () {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await response.json();
    setUsers(data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <h3 className="text-center">Http Demo 2</h3>

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
