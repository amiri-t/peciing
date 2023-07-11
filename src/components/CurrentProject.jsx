import React from "react";
import styled from "styled-components";
import building from "../assets/building2.jpeg";

const CurrentProject = () => {
  return (
    <Container>
      <img src={building} alt="" />
      <div>
        <h1>Current Project</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem omnis
          expedita magnam exercitationem culpa accusantium vel quidem, harum,
          iusto similique modi nam est et, corrupti magni? Culpa animi aut eum a
          libero velit, ex nobis et dolorum reprehenderit, illum impedit.
        </p>
      </div>
    </Container>
  );
};
const Container = styled.div`
  padding: 7em 4%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2em;
  img {
    width: 500px;
    box-shadow: 0 0 10px 2px gray;
    border-radius: 10px;
  }
  div {
    max-width: 400px;
  }
  @media (max-width: 840px) {
    img {
      width: 370px;
    }
  }
  @media (max-width: 740px) {
    flex-direction: column;
    img {
      width: 100%;
    }
  }
`;

export default CurrentProject;
