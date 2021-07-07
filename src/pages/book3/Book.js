import React from "react";
import styled from "styled-components";

const Title = styled.h3`
  color: red;
  font-size: 2rem;
  border: 3px solid red;
  margin: 0;
`;

const Author = styled.h3`
  color: blue;
  font-size: 2rem;
  border: 3px solid red;
  margin: 0;
`;

const Review = styled.h3`
  color: green;
  font-size: 2rem;
  border: 3px solid red;
  margin: 0;
`;

const Book = ({ title, author, review }) => {
  return (
    <>
      <Title>{title}</Title>
      <Author>{author}</Author>
      <Review>{review}</Review>
    </>
  );
};

export default Book;

// const BookWrapper = styled.div`
//   border: 3px dashed blue;
// `;
