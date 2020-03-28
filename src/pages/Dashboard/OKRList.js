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
  width: 90vw;
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 50px;
`;
