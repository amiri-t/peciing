import React from "react";
import styled from "styled-components";
import Hero from "../components/Hero";
import PreviousProjects from "../components/PreviousProjects";

const Home = () => {
  return (
    <Container>
      <Hero />
      <PreviousProjects />
    </Container>
  );
};
const Container = styled.div``;

export default Home;
