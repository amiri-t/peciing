import React from "react";
import styled from "styled-components";
import house1 from "../assets/house1.jpg";
import house2 from "../assets/house2.webp";
import house3 from "../assets/house3.jpg";
import house4 from "../assets/house4.jpg";
import { Link } from "react-router-dom";

const PreviousProjects = () => {
  return (
    <Container>
      <h2 className="title">PROJEKTET E MERPARSHME</h2>

      <div className="items">
        <div className="item">
          <img src={house1} alt="" />
          <h2>House 1</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            reprehenderit quia facere nostrum eos corporis eum amet accusamus
            possimus modi!
          </p>
          <Link to="https://facebook.com" target="_blank">
            <button>Shiko me shume</button>
          </Link>
        </div>
        <div className="item">
          <img src={house2} alt="" />
          <h2>Apartment 1</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            reprehenderit quia facere nostrum eos corporis eum amet accusamus
            possimus modi!
          </p>
          <Link to="https://facebook.com" target="_blank">
            <button>Shiko me shume</button>
          </Link>
        </div>
        <div className="item">
          <img src={house3} alt="" />
          <h2>House 2</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            reprehenderit quia facere nostrum eos corporis eum amet accusamus
            possimus modi!
          </p>
          <Link to="https://facebook.com" target="_blank">
            <button>Shiko me shume</button>
          </Link>
        </div>
        <div className="item">
          <img src={house4} alt="" />
          <h2>Apartment 2</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            reprehenderit quia facere nostrum eos corporis eum amet accusamus
            possimus modi!
          </p>
          <Link to="https://facebook.com" target="_blank">
            <button>Shiko me shume</button>
          </Link>
        </div>
      </div>
    </Container>
  );
};
const Container = styled.div`
  padding: 10px;
  margin-bottom: 10em;
  .title {
    text-align: center;
    margin: 2em 0;
  }
  .items {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 2em 2%;
    .item {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      max-width: 270px;
      img {
        width: 240px;
        height: 120px;
        object-fit: cover;
        border-radius: 10px;
        box-shadow: 0 0 10px 1px gray;
      }
      h2 {
        font-size: 20px;
        font-weight: 400;
        color: #494949;
      }
      p {
        text-align: center;
        color: gray;
      }
      button {
        font-size: 17px;
        padding: 10px 14px;
        background-color: #283739;
        color: white;
        border: none;
      }
    }
  }
  @media (max-width: 590px) {
    .items {
      .item {
        max-width: 100%;
        img {
          width: 90%;
          height: auto;
        }
      }
    }
  }
`;

export default PreviousProjects;
