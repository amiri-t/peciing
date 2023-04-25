import React from "react";
import styled from "styled-components";
import bgImg from "../assets/contactUsBgImg.jpg";
import logo from "../assets/resized888.png";
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import { Ri24HoursFill } from "react-icons/ri";

const ContactUs = () => {
  return (
    <Container>
      <img className="bgImg" src={bgImg} alt="" />
      <div className="container">
        <div className="wrapper">
          <div>
            <span>
              <BsFillTelephoneFill className="icon" />
              CALL US
            </span>
            <h3>+383 123 123 1233</h3>
          </div>
          <div>
            <span>
              <HiLocationMarker className="icon" />
              LOKACIONI
            </span>
            <h3>Rruga Elton Tahiri, Prishtine</h3>
          </div>
          <div>
            <span>
              <Ri24HoursFill className="icon" />
              BUSINESS HOURS
            </span>
            <h3>E hene - e premte</h3>
          </div>
        </div>
        <form>
          <img src={logo} alt="" />
          <div>
            <label>Emri dhe Mbiemri</label>
            <input type="text" placeholder="Emri dhe Mbiemri" />
          </div>
          <div>
            <label>Email Adresa</label>
            <input type="email" placeholder="Email Adresa" />
          </div>
          <div>
            <label>Mesazhi juaj</label>
            <textarea
              cols="20"
              rows="6"
              placeholder="Shkruaje mesazhin tuaj ketu"
            ></textarea>
          </div>
          <button>SUBMIT</button>
        </form>
      </div>
    </Container>
  );
};
const Container = styled.div`
  padding-top: 100px;
  .bgImg {
    width: 100%;
    height: 100vh;
    object-fit: cover;
    filter: brightness(0.3);
    position: absolute;
    z-index: -10;
    top: 0;
  }
  .container {
    width: 100%;
    background-color: red;
    display: flex;
    margin-top: 6em;
    padding: 30px 7%;
    backdrop-filter: blur(20px);
    background: none;
    box-shadow: 0 0 4px 2px gray;
    .wrapper {
      backdrop-filter: blur(20px);
      color: white;
      display: flex;
      flex-direction: column;
      gap: 30px;
      div {
        font-weight: 500;
        span {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        h3 {
          font-weight: 400;
          color: #c2c2c2;
          font-size: 17px;
        }
      }
    }
    form {
      backdrop-filter: blur(20px);
      top: -60px;
      position: absolute;
      text-align: center;
      color: white;
      box-shadow: 0 0 7px 2px gray;
      background-color: #12151be8;
      width: 500px;
      right: 14%;
      display: flex;
      flex-direction: column;
      gap: 20px;
      padding: 14px 2em;
      border-radius: 10px;
      img {
        width: 70px;
        margin: auto;
      }
      div {
        display: flex;
        flex-direction: column;
        gap: 7px;
        label {
          text-align: left;
          display: none;
        }
        input {
          font-size: 15px;
          padding: 7px 10px;
          font-family: "Poppins", sans-serif;
          background: none;
          outline: none;
          border: none;
          border-bottom: 2px solid white;
          :focus {
            color: white;
          }
          ::placeholder {
            color: #9e9c9c;
          }
        }
        textarea {
          font-size: 15px;
          padding: 7px 10px;
          font-family: "Poppins", sans-serif;
          background: none;
          outline: none;
          border: none;
          border-bottom: 2px solid white;
          ::placeholder {
            color: #9b9898;
          }
          :focus {
            color: white;
          }
        }
      }
      button {
        background: none;
        margin: auto;
        color: white;
        backdrop-filter: blur(20px);
        padding: 8px 17px;
        border: 2px solid white;
      }
    }
  }
  @media (max-width: 950px) {
    .bgImg {
      height: 140%;
    }
    .wrapper {
      margin-top: 24em;
    }
    .container {
      form {
        width: 98%;
        right: 0px;
        margin-left: 7px;
        margin-right: 7px;
      }
    }
  }
  @media (max-width: 550px) {
  }
`;

export default ContactUs;
