import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Careers() {
  return (
    <>
      <h2 className="text-center">This is Careers Page</h2>
      <h3 className="text-center">
        This is the Common area for both the job types
      </h3>
      <hr />
      <div className="text-center">
        <Link to="permanent" className="m-2">
          Permanent Jobs
        </Link>
        <Link to="contract">Contract Jobs</Link>
      </div>
      <Outlet></Outlet>
    </>
  );
}
