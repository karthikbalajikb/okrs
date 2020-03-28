import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

class ErrorBoundary extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  };

  state = { hasError: false };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return (
        <Container>
          <ImageContainer>
            <img fluid src={require("../../assets/images/404.svg")} />
          </ImageContainer>
          <Title>
           <p>
              Oops. Something bad happened at our end.
              </p>
          </Title>
          <SubTitle>
            <p letterSpacing={0.28} color="onBackground.light">
              Try reloading this page. Please contact us if this issue still
              exists
            </p>
          </SubTitle>
          <button
            type="text"
            width={130}
            onClick={() => window.location.reload()}
          >
            <p letterSpacing={0.28} fontWeight={500} color="primary.main">
              Reload this page
            </p>
          </button>
        </Container>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ImageContainer = styled.div`
  height: 244px;
  width: 452px;
`;

const Title = styled.div`
  margin-top: 40px;
`;

const SubTitle = styled.div`
  margin-top: 33px;
  margin-bottom: 16px;
  max-width: 470px;
`;
