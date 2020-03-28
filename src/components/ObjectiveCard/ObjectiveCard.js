import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Text from '../Text';
import Button from '../Button';
import KeyResultListItem from "../KeyResultListItem";

import rightArrow from "../../assets/icons/right.svg";
import downArrow from "../../assets/icons/down.svg";

const ObjectiveCard = ({ title, keyResults, onViewDetail }) => {
  const [isExpanded, setExpanded] = useState(true);
  return (
    <>
      <Container>
        <ExpandButton onClick={() => setExpanded(!isExpanded)}>
          <img src={isExpanded ? downArrow : rightArrow} alt="expand" />
        </ExpandButton>
        <Text>{title}</Text>
        <StyledButton> <Button onClick={onViewDetail}>View</Button> </StyledButton>
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
  keyResults: PropTypes.array.isRequired,
  onViewDetail: PropTypes.func.isRequired,
};

export default ObjectiveCard;

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 70px;
  box-shadow: ${({ theme }) => `4px 5px 8px 0px ${theme.border.main}`};
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

const StyledButton = styled.div`
  position: absolute;
  right: 20px;
`;