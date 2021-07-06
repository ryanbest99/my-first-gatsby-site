import React from "react";
import { border } from "./book-style";

const Book = ({ name, author, children }) => {
  console.log(name, author);
  console.log({ name, author });
  return (
    <div style={border}>
      <h3>{name}</h3>
      <h3>{author}</h3>
      {children}
    </div>
  );
};

export default Book;
