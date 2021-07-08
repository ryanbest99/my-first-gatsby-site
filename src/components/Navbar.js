import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Container>
      <ListBox>
        <List>
          <Link to="/" style={{ textDecoration: "none" }}>
            Home
          </Link>
        </List>
        <List>
          <Link to="/about" style={{ textDecoration: "none" }}>
            About
          </Link>
        </List>
      </ListBox>
    </Container>
  );
};

const Container = styled.nav`
  border: 3px solid red;
`;

const ListBox = styled.ul`
  border: 3px solid green;
  display: flex;
`;

const List = styled.li`
  border: 3px dashed purple;
  list-style: none;
  padding: 1rem 2rem;
`;

export default Navbar;
