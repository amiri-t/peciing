import React from "react";
import styled from "styled-components";
import heroImg from "../assets/hero-img.png";

const Hero = () => {
  return (
    <Container>
      <h1>
        Buy Worthy <br /> Real Estate
      </h1>
      <img src={heroImg} alt="" />
    </Container>
  );
};
const Container = styled.div`
  padding: 2em 10%;
  margin-top: 4em;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    background: var(--orangeGradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 4em;
  }
`;

export default Hero;
