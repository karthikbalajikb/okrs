import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

// components
import ObjectiveCard from "../../components/ObjectiveCard";
import KeyResultListItem from "../../components/KeyResultListItem";

const OKRList = ({ objectives, keyResults }) => {
  const getKeyResult = id =>
    keyResults.filter(keyResult => keyResult.parent_objective_id === id);

  return (
    <OKRContainer>
      {objectives.map(objective => (
        <ObjectiveCard
          title={objective.title}
          onExpand={objective.id}
          keyResults={getKeyResult(objective.id)}
        />
      ))}
    </OKRContainer>
  );
};

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
