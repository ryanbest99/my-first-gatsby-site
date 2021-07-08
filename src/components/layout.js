import React from "react";
import Navbar from "./Navbar";
import styled from "styled-components";
import Title from "./Title";

const Layout = ({ pageTitle, children }) => {
  return (
    <Container>
      <Navbar />
      <title>{pageTitle}</title>
      <Title pageTitle={pageTitle} />
      {children}
    </Container>
  );
};

const Container = styled.section`
  border: 3px solid blue;
`;

export default Layout;
