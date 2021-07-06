import React from "react";
import { data } from "./data";
import Book from "./Book";
import { border2 } from "./book-style";

function BookList() {
  return (
    <div style={border2}>
      {data.map((book) => {
        return (
          <Book key={book.id} {...book}>
            <p>this is children</p>
          </Book>
        );
      })}
    </div>
  );
}

export default BookList;
