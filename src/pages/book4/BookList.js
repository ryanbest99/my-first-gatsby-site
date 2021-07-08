import React from "react";
import styled from "styled-components";
import { books } from "./data";
import Book from "./Book";

const Container = styled.section`
  border: 5px solid red;
`;

const BookList = () => {
  return (
    <>
      <Container>
        {books.map((book) => (
          <Book key={book.id} {...book} />
        ))}
      </Container>
    </>
  );
};

export default BookList;
