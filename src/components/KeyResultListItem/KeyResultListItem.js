import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const KeyResultListItem = ({ title }) => <Container>- {title}</Container>;

KeyResultListItem.propTypes = {
  title: PropTypes.string.isRequired
};

export default KeyResultListItem;

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  color: ${({ theme }) => `${theme.onBackground.light}`};
  margin-left: 50px;
`;
