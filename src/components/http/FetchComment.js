import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import useFetch from "./fetchHook";

export default function FetchComment() {
  /* const [comments, setComments] = useState([]);

  const getComments = async function () {
    let response = await fetch("https://jsonplaceholder.typicode.com/comments");
    let data = await response.json();
    setComments(data);
  };

  useEffect(() => {
    getComments();
  }, []); */
  let myComments = useFetch("https://jsonplaceholder.typicode.com/comments");

  return (
    <>
      <h3 className="text-center">Fetch comment</h3>

      <table className="table table-striped table-bordered table-hover">
        <tbody>
          {myComments.map((comment) => {
            return (
              <tr key={comment.id}>
                <td>{comment.id}</td>
                <td>{comment.name}</td>
                <td>{comment.email}</td>
                <td>{comment.body}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
