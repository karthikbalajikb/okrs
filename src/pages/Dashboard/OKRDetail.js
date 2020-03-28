import React from "react";
import styled from "styled-components";

import Button from '../../components/Button'; 
import Text from '../../components/Text';

const OKRDetail = ({ objective, onClose }) => {
  const { title } = objective;

  return (
    <Container>
      <Header>
        <Text>{title}</Text>
        <Button onClick={onClose}> &times; </Button>
      </Header>
      <Body>
        <StyledImage
          fluid
          src={require("../../assets/images/empty.svg")}
          alt="404"
        />
      </Body>
      <Footer>
        <Button onClick={onClose}> Cancel </Button>
      </Footer>
    </Container>
  );
};

export default OKRDetail;

const Container = styled.div`
  padding: 25px;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
`;

const Body = styled.div`
  padding: 30px;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  opacity: 0.4;
`;

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
