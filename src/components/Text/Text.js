import React from "react";
import styled from "styled-components";

const Text = ({ children }) => (
  <StyledText>
    {children}
  </StyledText>
);

export default Text;

const StyledText = styled.div`
  color: ${({ theme }) => `${theme.primary.dark}`};
`;
