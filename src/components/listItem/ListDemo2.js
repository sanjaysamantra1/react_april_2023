import React from "react";

export default function ListDemo2() {
  let employees = [
    { eId: 101, name: "sanjay", sal: 5000 },
    { eId: 104, name: "deepak", sal: 8000 },
    { eId: 103, name: "sameer", sal: 7000 },
    { eId: 102, name: "manoj", sal: 9000 },
    { eId: 106, name: "rajeev", sal: 9000 },
  ];
  return (
    <>
      <h2 className="text-center">Employee List</h2>

      <table className="table table-bordered table-striped">
        <thead>
            <tr>
               {Object.keys(employees[0]).map((col,i)=><th key={i}>{col}</th>)}
            </tr>
        </thead>
        <tbody>
        {employees.map((emp, ind) => {
            return <tr>
              {Object.keys(emp).map((key) =>{
                return <td key={key}>{emp[key]}</td>
              })}
            </tr>
        })}
        </tbody>
      </table>
    </>
  );
}
