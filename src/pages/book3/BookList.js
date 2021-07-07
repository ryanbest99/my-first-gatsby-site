import React from "react";
import Book from "./Book";
import { books } from "./data";
import styled from "styled-components";

const Container = styled.div`
  border: 3px solid red;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: 100vh;
  align-items: center;
`;

const BookWrapper = styled.div`
  border: 3px dashed blue;
`;

const BookList = () => {
  return (
    <>
      <Container>
        {books.map((book) => {
          const { id, title, author, review } = book;
          return (
            <BookWrapper>
              <Book key={id} {...book} />
            </BookWrapper>
          );
        })}
      </Container>
    </>
  );
};

export default BookList;
