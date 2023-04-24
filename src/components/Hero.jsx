import React from "react";
import styled from "styled-components";
import heroImg from "../assets/banesa.jpeg";

const Hero = () => {
  return (
    <Container>
      <h1>
        Buy Worthy <br /> Real Estate
      </h1>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-size: cover;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2em 10%;
  margin-top: 4em;
  
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(${heroImg});
    background-size: cover;
    filter: blur(3px);
  }

  h1 {
    position: relative;
    z-index: 1;
    margin-top: -150px; /* add negative margin-top to move the h1 higher */
    background: white;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 4em;
  }
`;

export default Hero;

