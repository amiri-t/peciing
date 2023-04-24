import React from "react";
import styled from "styled-components";
import heroImg from "../assets/banesa.jpeg";

const Hero = () => {
  return (
    <Container>
      <img src={heroImg} alt="" />
      <h1>
        Buy Worthy <br /> Real Estate
      </h1>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    position: relative;
    height: 100vh;
    width: 100%;
    background-size: cover;
    object-fit: cover;
    filter: blur(20px);
    filter: brightness(0.3);
  }
  h1 {
    font-size: 4em;
    position: absolute;
    color: white;
    margin-left: 10%;
  }

  /* &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(${heroImg});
    filter: brightness(0.4);
    background-size: cover;
    filter: blur(3px);
-fill-color: transparent;
    font-size: 4em;
  } */
  @media (max-width: 500px) {
    h1 {
      font-size: 3em;
    }
  }
`;

export default Hero;
