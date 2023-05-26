import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function ContactUs() {
  const navigate = useNavigate();

  const doSomethingAndNavigate = function () {
    console.log("I am Doing Something...");
    navigate("/careers");
  };
  return (
    <>
      <h2 className="text-center">This is Contact Us Page</h2>
      <a href="/careers">Go To Careers</a> <br />
      <Link to="/careers">Go To Careers without reload</Link>
      <br/>
      <button onClick={doSomethingAndNavigate}>
        Do Something & then Go to Careers Page
      </button>
      <br/>
      <button onClick={()=>navigate(-1)}>Go Back</button>
      <button onClick={()=>navigate(1)}>Go Next</button>
    </>
  );
}
