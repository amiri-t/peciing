import React from "react";
import styled from "styled-components";
import realestate from "../assets/888.png";
import logo from "../assets/logo.png";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

const AboutUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  margin-top: 10em;

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
    <AboutUsContainer>
      <SectionContainer>
        <ImageContainer>
          <img src={realestate} alt="Real estate" />
        </ImageContainer>
        <TextContainer>
        <IconContainer>
            <Link to='https://facebook.com' target="_blank">
            <FacebookIcon/>
            </Link>
            <Link to='https://www.instagram.com/4e_realestate/?igshid=YmMyMTA2M2Y%3D' target="_blank">
            <InstagramIcon />
            </Link>
          </IconContainer>
          <h2>John Doe</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
            enim maximus, molestie nunc id, tincidunt lorem. Donec bibendum,
            libero in venenatis vehicula, nisi leo luctus nisi, sit amet aliquam
            est nulla eget risus.
          </p>
        </TextContainer>
      </SectionContainer>

      <SectionContainer>
        <ImageContainer>
          <img src={logo} alt="Profile Pic 2" />
        </ImageContainer>

        <TextContainer>
        <IconContainer>
            <Link to='https://facebook.com' target="_blank">
            <FacebookIcon/>
            </Link>
            <Link to='https://www.instagram.com/peci_ing/?igshid=YmMyMTA2M2Y%3D' target="_blank">
            <InstagramIcon />
            </Link>
          </IconContainer>
          <h2>Jane Doe</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
            enim maximus, molestie nunc id, tincidunt lorem. Donec bibendum,
            libero in venenatis vehicula, nisi leo luctus nisi, sit amet aliquam
            est nulla eget risus. sdsd
          </p>
        </TextContainer>
      </SectionContainer>
    </AboutUsContainer>
  );
};

export default AboutUs;
