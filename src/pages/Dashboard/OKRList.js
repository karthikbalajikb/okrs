import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

// components
import ObjectiveCard from "../../components/ObjectiveCard";
import Modal from "../../components/Modal";

// page components
import OKRDetail from "./OKRDetail";

//utils
import { getKeyResultsBasedOnObjective } from "../../utils/misc";

const OKRList = ({ objectives, keyResults }) => {
  const [showModal, setShowModal] = useState(false);
  const [objectiveData, setOjbjectiveData] = useState({});

  return (
    <OKRContainer>
      {objectives.map(objective => (
        <ObjectiveCard
          key={objective.id}
          title={objective.title}
          keyResults={getKeyResultsBasedOnObjective({
            id: objective.id,
            keyResults
          })}
          onViewDetail={() => {
            setOjbjectiveData(objective);
            setShowModal(true);
          }}
        />
      ))}
      <Modal open={showModal} onClose={() => setShowModal(!showModal)}>
        <OKRDetail
          objective={objectiveData}
          onClose={() => setShowModal(!showModal)}
        />
      </Modal>
    </OKRContainer>
  );
};

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
