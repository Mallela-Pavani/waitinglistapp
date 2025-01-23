import React from "react";
import WaitinglistTable from "../components/WaitinglistTable";
import RealTimeSimulation from "../components/RealTimeSimulation";

function WaitlistPage() {
  return (
    <div className="container mt-4">
      <RealTimeSimulation />
      <WaitinglistTable />
    </div>
  );
}

export default WaitlistPage;
