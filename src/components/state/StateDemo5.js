import React, { useState } from "react";
import Modal from 'react-modal';

export default function StateDemo5() {
  let [employees, setEmployees] = useState([
    { eId: 101, name: "sanjay", sal: 5000 },
    { eId: 104, name: "deepak", sal: 8000 },
    { eId: 103, name: "sameer", sal: 7000 },
    { eId: 102, name: "manoj", sal: 9000 },
  ]);
  let [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  return <>
    <h2 className="text-center">Employee List</h2>

    <table className="table table-bordered table-striped">
        <thead>
            <tr>
                <th>eId</th>
                <th>Name</th>
                <th>Salary</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {employees.map((emp)=>{
                return <tr key={emp.eId}>
                    <td>{emp.eId}</td>
                    <td>{emp.name}</td>
                    <td>{emp.sal}</td>
                    <td>
                        <button className="btn btn-primary" onClick={openModal}>View</button>
                    </td>
                </tr>
            })}
        </tbody>
    </table>

    <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <h2>Hello Hiiiiiiiiiii</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
    </Modal>
  </>
}
