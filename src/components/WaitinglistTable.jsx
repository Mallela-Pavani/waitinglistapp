import React from "react";
import { Table } from "react-bootstrap";
import { useWaitlist } from "../context/WaitlistContext";

function WaitlistingTable() {
  const { state } = useWaitlist();
  const allUsers = [...state.inviteList, ...state.generalList];

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Current Waitlist</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Invite Code</th>
            <th>Estimated Wait Time</th>
          </tr>
        </thead>
        <tbody>
          {allUsers.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.inviteCode || "N/A"}</td>
              <td>{index + 1} days</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default WaitlistingTable;
