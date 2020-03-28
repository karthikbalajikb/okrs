import React, { useContext } from "react";

// page components
import OKRList from "./OKRList";

// containers
import { DashboardContext } from "../../containers/Dashboard";

const Dashboard = () => {
  const { isFetchingOkr, objectives, keyResults } = useContext(
    DashboardContext
  );

  if (isFetchingOkr) {
    return <div>Loading !!!</div>;
  }

  if (!isFetchingOkr) {
    return (
      <>
        <h2> OKR's List </h2>
        <OKRList objectives={objectives} keyResults={keyResults} />
      </>
    );
  }
};

export default Dashboard;
