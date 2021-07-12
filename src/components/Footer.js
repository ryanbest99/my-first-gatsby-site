import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <>
      <footer className="page-footer">
        <p>
          &copy; {new Date().getFullYear()}
          <span> Simple Recipes</span>. Built With{" "}
          <a href="https://www.gatsyjs.com/">Gatsby</a>
        </p>
      </footer>

      <FooterWrapper>
        <FooterPara>
          &copy; {new Date().getFullYear()}
          <span> Simple Recipes</span>. Built With{" "}
          <a href="https://www.gatsyjs.com/">Gatsby</a>
        </FooterPara>
      </FooterWrapper>
    </>
  );
};

const FooterWrapper = styled.footer`
  border: 3px solid red;
  background: black;
  height: 4rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--white);

  span,
  a {
    color: var(--primary-500);
  }
`;

const FooterPara = styled.p`
  border: 3px dashed blue;
  margin: 0;
`;

export default Footer;
