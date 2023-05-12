import React, { useState } from "react";
import SearchBar from "react-js-search";

export default function SearchDemo() {
  const initialEmployees = [
    { number: 12, name: "Buffon", position: "ST", success: true },
    { number: 21, name: "Pirlo", position: "MC", success: false },
    { number: 10, name: "Ruiz", position: "MDI" },
    { number: 7, name: "Nesta", position: "RB", success: true },
    { number: 4, name: "Cannavaro", position: "CB" },
    { number: 2, name: "Puyol", position: "CB", success: false },
    { number: 15, name: "Abate", position: "LB" },
    { number: 16, name: "Locatelli", position: "MDI" },
    { number: 1, name: "Buffon", position: "GK" },
    { number: 21, name: "Pirlo", position: "MC" },
    { number: 10, name: "Ruiz", position: "MDI" },
    { number: 7, name: "Nesta", position: "RB" },
  ];
  const [filteredEmployees, setFilteredEmployees] = useState(initialEmployees);

  const onSearchClick = (searchText) => {
    setFilteredEmployees(
      initialEmployees.filter((emp) => JSON.stringify(emp).includes(searchText))
    );
  };
  const onSearchTextChange = (searchText, filteredData) => {
    setFilteredEmployees(filteredData);
  };

  return (
    <>
      <SearchBar
        onSearchTextChange={onSearchTextChange}
        onSearchButtonClick={onSearchClick}
        placeHolderText={"Search here..."}
        data={initialEmployees}
      />

      <hr />
      {
        <table className="table table-bordered">
          <tbody>
            {filteredEmployees.map((emp, ind) => (
              <tr key={ind}>
                <td>{emp.number}</td>
                <td>{emp.name}</td>
                <td>{emp.position}</td>
              </tr>
            ))}
          </tbody>
        </table>
      }
    </>
  );
}
