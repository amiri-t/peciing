import React from "react";
import styled from "styled-components";
import realestate from "../assets/888.png";
import logo from "../assets/logo.png";
import building from "../assets/building.jpg";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

const Background = styled.div`
  min-height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${building});
`;

const AboutUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 4rem;
  }
`;

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  margin-top: 10em;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.8);
  border-radius: 7px;
  padding: 1em;
  color: white;
  backdrop-filter: blur(10px);
  transition: all 0.2s ease-in-out;
  transform: scale(1);

  &:hover {
    transform: scale(1.02);
    backdrop-filter: blur(5px);
  }
  @media (min-width: 768px) {
    flex-basis: 45%;
    margin-bottom: 0;
  }
`;

const ImageContainer = styled.div`
  width: 200px;
  height: 200px;
  margin-bottom: 1rem;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: white;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  @media (min-width: 768px) {
    width: 300px;
    height: 300px;
    margin-bottom: 2rem;
  }
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  font-size: 2em;
  a {
    color: lightblue;
  }
  a:hover {
    color: #228896;
  }
`;

const FacebookIcon = styled(FaFacebook)`
  margin-right: 1rem;
`;

const InstagramIcon = styled(FaInstagram)`
  margin-right: 1rem;
`;
const TextContainer = styled.div`
  text-align: center;

  p {
    font-size: 1.2rem;
    line-height: 1.5;
    margin-bottom: 1rem;
  }

  @media (min-width: 768px) {
    text-align: left;
  }
`;

const AboutUs = () => {
  return (
    <Background>
      <AboutUsContainer>
        <SectionContainer>
          <ImageContainer>
            <img src={realestate} alt="Real estate" />
          </ImageContainer>
          <TextContainer>
            <IconContainer>
              <Link to="https://facebook.com" target="_blank">
                <FacebookIcon />
              </Link>
              <Link
                to="https://www.instagram.com/4e_realestate/?igshid=YmMyMTA2M2Y%3D"
                target="_blank"
              >
                <InstagramIcon />
              </Link>
            </IconContainer>
            <h2>4E Real Estate</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
              enim maximus, molestie nunc id, tincidunt lorem. Donec bibendum,
              libero in venenatis vehicula, nisi leo luctus nisi, sit amet
              aliquam est nulla eget risus.
            </p>
          </TextContainer>
        </SectionContainer>

        <SectionContainer>
          <ImageContainer>
            <img src={logo} alt="Real estate" />
          </ImageContainer>
          <TextContainer>
            <IconContainer>
              <Link to="https://facebook.com" target="_blank">
                <FacebookIcon />
              </Link>
              <Link
                to="https://www.instagram.com/peci_ing/?igshid=YmMyMTA2M2Y%3D"
                target="_blank"
              >
                <InstagramIcon />
              </Link>
            </IconContainer>
            <h2>Peci-ing</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
              enim maximus, molestie nunc id, tincidunt lorem. Donec bibendum,
              libero in venenatis vehicula, nisi leo luctus nisi, sit amet
              aliquam est nulla eget risus.
            </p>
          </TextContainer>
        </SectionContainer>
      </AboutUsContainer>
    </Background>
  );
};

export default AboutUs;
