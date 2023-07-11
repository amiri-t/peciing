import React from "react";
import styled from "styled-components";
import Hero from "../components/Hero";
import PreviousProjects from "../components/PreviousProjects";
import CurrentProject from "../components/CurrentProject";
import OurServices from "../components/OurServices";

const Home = () => {
  return (
    <Container>
      <Hero />
      <CurrentProject />
      <PreviousProjects />
      <OurServices />
    </Container>
  );
};
const Container = styled.div``;

export default Home;
