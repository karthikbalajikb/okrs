import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import KeyResultListItem from "../KeyResultListItem";

import rightArrow from "../../assets/icons/right.svg";
import downArrow from "../../assets/icons/down.svg";

const ObjectiveCard = ({ title, keyResults }) => {
  const [isExpanded, setExpanded] = useState(true);
  return (
    <>
      <Container>
        <ExpandButton onClick={() => setExpanded(!isExpanded)}>
          <img src={isExpanded ? downArrow : rightArrow} alt="expand" />
        </ExpandButton>
        <p>{title}</p>
      </Container>
      {isExpanded && (
        <KeyResultSection>
          {keyResults.map(keyResult => (
            <KeyResultListItem key={keyResult.title} title={keyResult.title} />
          ))}
        </KeyResultSection>
      )}
    </>
  );
};

ObjectiveCard.propTypes = {
  title: PropTypes.string.isRequired,
  keyResults: PropTypes.array.isRequired
};

export default ObjectiveCard;

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 70px;
  border: ${({ theme }) => `1px solid ${theme.border.main}`};
  padding-left: 20px;
`;

const ExpandButton = styled.div`
  padding-right: 10px;
  cursor: pointer;
`;

const KeyResultSection = styled.div`
  border-left: ${({ theme }) => `1px solid ${theme.border.dark}`};
  margin-left: 32px;
`;
