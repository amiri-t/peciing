import React, { useState } from "react";
import styled from "styled-components";
import { FaTimes, FaBars, FaFacebook, FaInstagram } from "react-icons/fa";
import logo from "../assets/logo.png";
import real from "../assets/888.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleToggleMenu = () => setToggleMenu(!toggleMenu);
  const [activeTab, setActiveTab] = useState("home");
  return (
    <Container>
      <Link to="/">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
      </Link>
      <ul className={toggleMenu ? "nav-menu active" : "nav-menu"}>
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          <li>Kryefaqja</li>
        </Link>
        <Link to="/4realestate" className="link-class">
          <li>
            <div className="nav-item">
              <span>4ERealEstate</span>
              <img src={real} alt="" />
            </div>
          </li>
        </Link>

        <Link
          to="/rrethnesh"
          style={{ textDecoration: "none", color: "white" }}
        >
          <li>Rreth nesh</li>
        </Link>
        <Link to={"/kontakti"} className="link-class">
          <li>Kontakti</li>
        </Link>
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
  padding: 1em 3%;
  height: 70px;
  top: 0;
  position: fixed;
  overflow-x: hidden;
  width: 100%;
  overflow: visible;
  z-index: 10;
  backdrop-filter: blur(70px);
  background-color: #283739;
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
      .nav-item {
        display: flex;
        align-items: center;
        span {
          margin-right: 10px;
        }
        img {
          width: 20px;
          height: 20px;
        }
      }
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
  @media (max-width: 750px) {
    .mobile-menu {
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
      backdrop-filter: blur(20px);
      li {
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
