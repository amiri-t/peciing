import React from "react";
import styled from "styled-components";
import Hero from "../components/Hero";
import PreviousProjects from "../components/PreviousProjects";
import CurrentProject from "../components/CurrentProject";
import OurServices from "../components/OurServices";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <Container>
      <Hero />
      <CurrentProject />
      <PreviousProjects />
      <OurServices />
      <Footer />
    </Container>
  );
};
const Container = styled.div``;

export default Home;
