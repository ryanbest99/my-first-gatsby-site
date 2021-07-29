import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";

const Images = () => {
  return (
    <Wrapper>
      <h3>Image</h3>
      <StaticImage src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large" />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  border: 3px solid red;
  width: 300px;
`;

export default Images;
