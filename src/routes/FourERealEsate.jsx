import React from "react";
import styled from "styled-components";
import heroImg from "../assets/4realestateHeroImg.jpeg";
import logo from "../assets/888.png";

const FourERealEsate = () => {
  return (
    <Container>
      <div className="heroSection">
        <img className="heroBgImg" src={heroImg} alt="" />
        <span>
          <h2>Welcome to our Real Estate Agency</h2>
          <p>
            We specialize in buying and selling residetial and commercial
            properties.
          </p>
          <img className="logo" src={logo} alt="" />
        </span>
      </div>
    </Container>
  );
};
const Container = styled.div`
  color: black;
  .heroSection {
    .heroBgImg {
      width: 100%;
      height: 100vh;
      object-fit: cover;
      filter: brightness(0.4);
      position: relative;
      z-index: -1;
    }
    span {
      position: absolute;
      z-index: 2;
      right: 3%;
      display: flex;
      flex-direction: column;
      top: 30px;
      h2 {
        font-size: 2.2em;
        margin-top: 3.7em;
        color: white;
      }
      p {
        text-align: center;
        color: white;
        margin: 20px 0;
      }
      .logo {
        width: 200px;
        align-self: center;
      }
    }
  }
`;

export default FourERealEsate;
