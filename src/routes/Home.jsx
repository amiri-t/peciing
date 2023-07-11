import React from "react";
import styled from "styled-components";
import Hero from "../components/Hero";
import PreviousProjects from "../components/PreviousProjects";
import CurrentProject from "../components/CurrentProject";

const Home = () => {
  return (
    <Container>
      <Hero />
      <CurrentProject />
      <PreviousProjects />
    </Container>
  );
};
const Container = styled.div``;

export default Home;
