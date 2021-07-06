import React from "react";
import { pageStyles, header } from "./about-style";

// const pageStyles = {
//   border: "3px solid red",
//   color: "#232129",
//   padding: 96,
//   fontFamily: "-apple-system, Roboto, sans-serif, serif",
// };

function aboutt() {
  return (
    <div style={pageStyles}>
      <title>About Page</title>
      <h1 style={header}>About</h1>
    </div>
  );
}

export default aboutt;
