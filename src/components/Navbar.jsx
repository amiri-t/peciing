import React, { useState } from "react";
import styled from "styled-components";
import { FaTimes, FaBars } from "react-icons/fa";
import logo from "../assets/logo.png";
import real from "../assets/888.png";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleToggleMenu = () => setToggleMenu(!toggleMenu);
  const [activeTab, setActiveTab] = useState("home");
  return (
    <Container>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <ul className={toggleMenu ? "nav-menu active" : "nav-menu"}>
        <li>Kryefaqja</li>
        <li>
          <div className="nav-item">
            <span>4REALESTATE</span>
            <img src={real} alt="" />
          </div>
        </li>
        <li>Contact Us</li>
        <li>Testimonials</li>
      </ul>
      <div className="mobile-menu" onClick={handleToggleMenu}>
        {toggleMenu ? <FaTimes /> : <FaBars />}
      </div>
    </Container>
  );
};
const Container = styled.div`
  color: white;
  font-family: "Poppins", sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 3em;
  height: 70px;
  top: 0;
  position: fixed;
  overflow-x: hidden;
  width: 100%;
  background-color: #283739;
  overflow: visible;
  z-index: 10;
  backdrop-filter: blur(20px);
  box-shadow: 0 3px 10px -2px gray;
  transition: 0.3s;
  .logo {
    img {
      width: 140px;
    }
  }
  .nav-menu {
    display: flex;
    list-style: none;
    align-items: center;
    gap: 2em;
    margin: 5px;
    height: 100%;
    font-weight: 400;
    li {
      padding: 5px;
      transition: 0.3s;
      :hover {
        transform: scale(1.1);
        cursor: pointer;
      }
    }
    .active {
      background: var(--gradientBackground);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-weight: 500;
    }
    .nonActive {
      color: var(--fontPrimaryColor);
      font-weight: 300;
    }
  }
  .mobile-menu {
    position: absolute;
    right: 4%;
    top: 30%;
    font-size: 1.4em;
    cursor: pointer;
    user-select: none;
    display: none;
  }
  .nav-item {
    display: flex;
    align-items: center;
  }

  .nav-item span {
    margin-right: 10px;
    font-weight: 500;
  }

  .nav-item img {
    width: 20px;
    height: 20px;
  }

  @media (max-width: 750px) {
    .mobile-menu {
      color: white;
      display: block;
    }
    .nav-menu {
      background-color: #283739;
      width: 50%;
      height: 50vh;
      flex-direction: column;
      position: absolute;
      top: 1%;
      right: -100%;
      box-shadow: 0 0 7px 2px gray;
      justify-content: center;
      align-items: center;
      border-radius: 10px;
      user-select: none;
      transition: 0.4s ease;
      li {
        color: white;

        font-size: 17px;
      }
    }
  }
  .nav-menu.active {
    right: 1%;
  }
  @media (max-width: 500px) {
    padding: 1em;
    .nav-menu {
      width: 85%;
    }
  }
`;

export default Navbar;
