import React from "react";
import styled from "styled-components";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Container>
      <div className="top">
        <div className="smIcons">
          <Link to="https://facebook.com" target="_blank" className="link">
            <BsFacebook className="icon" />
          </Link>
          <Link to="https://instagram.com" target="_blank" className="link">
            <BsInstagram className="icon" />
          </Link>
          <Link to="https://twitter.com" target="_blank" className="link">
            <BsTwitter className="icon" />
          </Link>
        </div>
        <div className="menus">
          <p>Kryefaqja</p>
          <p>4RealEstate</p>
          <p>Rreth nesh</p>
          <p>Kontakti</p>
        </div>
      </div>
      <div className="bottom">
        <h2>Peciing © 2023</h2>
        <div className="developers">
          <h3>Developed and Designed by:</h3>
          <span>
            <Link
              to="https://www.linkedin.com/in/elton-tahiri-38ab03227/?originalSubdomain=al"
              className="link"
              target="_blank"
            >
              <p>Elton Tahiri</p>
            </Link>
            <Link
              to="https://github.com/amiri-t"
              className="link"
              target="_blank"
            >
              <p>Amir Tahiri</p>
            </Link>
          </span>
        </div>
      </div>
    </Container>
  );
};
const Container = styled.div`
  background-color: #283739;
  color: white;
  padding: 4em 2em;
  .link {
    color: white;
  }
  .top {
    display: flex;
    justify-content: space-around;
    align-items: center;
    .smIcons {
      display: flex;
      gap: 1.4em;
      .icon {
        font-size: 30px;
      }
    }
    .menus {
      display: flex;
      gap: 2em;
      flex-wrap: wrap;
    }
  }
  .bottom {
    display: flex;
    justify-content: space-around;
    margin-top: 4em;
    text-align: right;
    h2 {
      font-weight: 400;
    }
    .developers {
      h3 {
        font-weight: 400;
        margin-bottom: 10px;
      }
      span {
        display: flex;
        gap: 2em;
      }
    }
  }
  @media (max-width: 840px) {
    .top {
      justify-content: space-between;
    }
    .bottom {
      justify-content: space-between;
    }
  }
  @media (max-width: 650px) {
    .top {
      flex-direction: column;
      gap: 2em;
    }
  }
  @media (max-width: 540px) {
    .top {
      .menus {
        gap: 1em;
        justify-content: center;
      }
    }
    .bottom {
      flex-direction: column-reverse;
      text-align: center;
      gap: 2em;
    }
  }
`;

export default Footer;
