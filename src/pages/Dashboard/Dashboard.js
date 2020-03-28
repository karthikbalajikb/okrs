import React, { useState, useContext } from "react";
import styled from "styled-components";

// page components
import OKRList from "./OKRList";

// containers
import { DashboardContext } from "../../containers/Dashboard";

const Dashboard = () => {
  const { isFetchingOkr, category, objectives, keyResults } = useContext(
    DashboardContext
  );

  const [selectedCategory, setSelectedCategory] = useState(undefined);

  const handleCategoryChange = e => {
    setSelectedCategory(e.target.value);
  };

  if (isFetchingOkr) {
    return <div>Loading !!!</div>;
  }

  if (!isFetchingOkr) {
    return (
      <Container>
        <h2> OKR's List </h2>
        <OKRSection>
          <Filter>
            <label>Category </label>
            <select value={selectedCategory} onChange={handleCategoryChange}>
              <option>-- select category --</option>
              {category.map(item => (
                <option key={item.category} value={item.category}>
                  {item.category}
                </option>
              ))}
            </select>
          </Filter>
          <OKRList
            objectives={
              !selectedCategory
                ? objectives
                : objectives.filter(
                    objective => objective.category === selectedCategory
                  )
            }
            keyResults={keyResults}
          />
        </OKRSection>
      </Container>
    );
  }
};

export default Dashboard;

const Container = styled.div``;

const OKRSection = styled.section`
  width: 90vw;
  margin: auto;
`;

const Filter = styled.div`
`;
