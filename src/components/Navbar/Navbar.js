import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Navbar = ({ title }) => (
  <Container>
    <h2>{title}</h2>
  </Container>
);

Navbar.propTypes = {
  title: PropTypes.string.isRequired
};

export default Navbar;

const Container = styled.div`
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: ${({ theme }) => `${theme.primary.main}`};
  color: ${({ theme }) => `${theme.onPrimary.main}`};
  box-shadow: ${({ theme }) => `4px 5px 8px 0px ${theme.border.main}`};
  padding: 1px 40px;
  margin-bottom: 25px;
`;
