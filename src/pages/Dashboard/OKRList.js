import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

// components
import ObjectiveCard from "../../components/ObjectiveCard";

//utils
import { getKeyResultsBasedOnObjective } from "../../utils/misc";

const OKRList = ({ objectives, keyResults }) => (
  <OKRContainer>
    {objectives.map(objective => (
      <ObjectiveCard
        key={objective.id}
        title={objective.title}
        onExpand={objective.id}
        keyResults={getKeyResultsBasedOnObjective({
          id: objective.id,
          keyResults
        })}
      />
    ))}
  </OKRContainer>
);

OKRList.propTypes = {
  objectives: PropTypes.array.isRequired,
  keyResults: PropTypes.array.isRequired
};

export default OKRList;

const OKRContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;
