import React from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

const Modal = ({ open, children, onClose }) => {
  if (!open) return null;

  if (open) {
    return createPortal(
      <Container>
        <Children>{children}</Children>
      </Container>,
      document.body
    );
  }
};

export default Modal;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 2;
  background-color: ${({ theme }) => `${theme.dimmer.main}`};
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
`;

const Children = styled.div`
  max-width: 70vw;
  max-height: 100vh;
  margin: auto;
  overflow: auto;
  background-color: ${({ theme }) => `${theme.background.light}`};
  border-radius: 7px;
`;
