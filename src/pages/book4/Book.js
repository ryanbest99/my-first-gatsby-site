import React from "react";
import styled from "styled-components";

const Container = styled.div`
  border: 3px solid blue;
`;

const Book = ({ img, name, author }) => {
  return (
    <Container>
      <img src={img} alt="" />
      <h3>{name}</h3>
      <h3>{author}</h3>
    </Container>
  );
};
export default Book;
