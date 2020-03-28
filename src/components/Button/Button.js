import React from "react";
import styled from "styled-components";

const Button = ({ children, onClick }) => <StyledButton onClick={onClick}>{children}</StyledButton>;

export default Button;

const StyledButton = styled.button`
  height: 30px;
  padding: 0 12px;
  border-radius: 5px;
  background-color: ${({ theme }) => `${theme.primary.main}`};
  border: none;
  cursor: pointer;
  color: ${({ theme }) => `${theme.onPrimary.main}`};

  &:hover {
    background-color: ${({ theme }) => `${theme.primary.dark}`};
  }
`;
