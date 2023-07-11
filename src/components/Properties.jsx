import React from "react";
import styled from "styled-components";
import property1 from "../assets/property1.jpg";

const Properties = () => {
  return (
    <Container>
      <div className="slider">
        <div className="leftArrow arrow">&lt;</div>
        <img src={property1} alt="" />
        <div className="details">
          <h2>Property Title</h2>
          <p>
            Property Description. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Consequuntur explicabo sed pariatur ipsam
            voluptatem, vitae quisquam quaerat voluptatum libero reprehenderit
            dolorum necessitatibus placeat aliquid voluptatibus, laudantium
            corrupti? Quisquam, sapiente explicabo!
          </p>
          <button>Zbulo me shume</button>
        </div>
        <div className="rightArrow arrow">&gt;</div>
      </div>
    </Container>
  );
};
const Container = styled.div`
  padding: 0 5%;
  .slider {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2em;
    box-shadow: 0 0 14px 2px #b4b2b2;
    margin: 7em 0;
    position: relative;

    .arrow {
      position: absolute;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: var(--primaryColor);
      font-size: 4em;
      color: white;
      transition: 0.3s;
      :hover {
        transform: scale(1.1);
        cursor: pointer;
      }
    }
    .leftArrow {
      left: -27px;
      padding-right: 4px;
    }
    .rightArrow {
      right: -27px;
    }
    img {
      width: 40%;
    }
    .details {
      display: flex;
      flex-direction: column;
      gap: 20px;
      align-items: flex-start;
      button {
        padding: 10px 17px;
        font-size: 17px;
        font-family: "Poppins", sans-serif;
        border: none;
        background-color: var(--primaryColor);
        color: white;
        transition: 0.3s;
        :hover {
          transform: scale(1.07);
          cursor: pointer;
        }
      }
    }
  }
`;

export default Properties;
