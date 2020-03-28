import React, { useState, useContext } from "react";

// page components
import OKRList from "./OKRList";

// containers
import { DashboardContext } from "../../containers/Dashboard";

const Dashboard = () => {
  const { isFetchingOkr, category, objectives, keyResults } = useContext(
    DashboardContext
  );

  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  }

  if (isFetchingOkr) {
    return <div>Loading !!!</div>;
  }

  if (!isFetchingOkr) {
    return (
      <>
        <h2> OKR's List </h2>
        <select value={selectedCategory} onChange={handleCategoryChange}>
          <option>-- select category --</option>
          {category.map(item => (
            <option value={item.category}>{item.category}</option>
          ))}
        </select>
        <OKRList objectives={!selectedCategory ? objectives : objectives.filter(objective => objective.category === selectedCategory)} keyResults={keyResults} />
      </>
    );
  }
};

export default Dashboard;
