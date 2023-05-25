import React, { useEffect, useState } from "react";

export default function HttpDemo1() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) =>console.log(error));
  },[]);

  return (
    <>
      <h3>Http Demo 1</h3>

      <table className="table table-striped table-bordered table-hover">
        <tbody>
            {users.map((user)=>{
                return <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.address.city}</td>
                    <td>{user.phone}</td>
                </tr>
            })}
        </tbody>
      </table>
    </>
  );
}
