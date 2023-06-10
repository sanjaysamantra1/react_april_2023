import React from "react";
import UseReducerDemo1 from "../hooks/UseReducerDemo1";
import FetchComment from "../http/FetchComment";
import FetchUser from "../http/FetchUser";

export default function Home() {
  console.log(process.env.NODE_ENV);
  console.log(process.env.REACT_APP_DB_URL);
  console.log(process.env.REACT_APP_DB_PWD);
  return (
    <>
      This is Home Page
      {/* <UseReducerDemo1 /> */}
      <FetchUser />
      ============================================================
      <FetchComment />
    </>
  );
}
