import React from "react";
import styled from "styled-components";

const OurServices = () => {
  return (
    <Container>
      <h2>
        <span>Sherbimet</span> Tona
      </h2>
      <div className="items">
        <div className="item">
          <h3> Warranty</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas dolore
            perferendis fugiat accusamus labore ea officiis facere sit nisi
            commodi distinctio quo, cupiditate porro vitae soluta et harum
            dignissimos natus.
          </p>
        </div>
        <div className="item">
          <h3>Return Policy</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas dolore
            perferendis fugiat accusamus labore ea officiis facere sit nisi
            commodi distinctio quo, cupiditate porro vitae soluta et harum
            dignissimos natus.
          </p>
        </div>
        <div className="item">
          <h3>Quality Assurance</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas dolore
            perferendis fugiat accusamus labore ea officiis facere sit nisi
            commodi distinctio quo, cupiditate porro vitae soluta et harum
            dignissimos natus.
          </p>
        </div>
        <div className="item">
          <h3>Secure Payment</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas dolore
            perferendis fugiat accusamus labore ea officiis facere sit nisi
            commodi distinctio quo, cupiditate porro vitae soluta et harum
            dignissimos natus.
          </p>
        </div>
      </div>
    </Container>
  );
};
const Container = styled.div`
  padding: 4em 5%;
  margin-bottom: 10em;
  h2 {
    text-align: center;
    font-size: 3em;
    font-weight: 400;
    span {
      color: #0e630e;
    }
  }
  .items {
    margin-top: 2em;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1em;
    .item {
      box-shadow: -30px 20px 59px #969696, 30px -20px 59px #ffffff;
      background-color: var(--secondaryBackgroundColor);
      display: flex;
      flex-direction: column;
      gap: 10px;
      align-items: center;
      max-width: 270px;
      padding: 20px 10px;
      border-radius: 20px;
      :nth-child(1) {
        margin-top: 4em;
      }
      :nth-child(3) {
        margin-top: 4em;
      }
      h3 {
        color: var(--primaryColorDark);
        font-weight: 400;
      }
      .icon {
        font-size: 3em;
      }
      p {
        text-align: center;
      }
    }
  }
  @media (max-width: 610px) {
    .items {
      .item {
        max-width: 90%;
        :nth-child(1) {
          margin-top: 0;
        }
        :nth-child(3) {
          margin-top: 0;
        }
      }
    }
  }
`;

export default OurServices;
