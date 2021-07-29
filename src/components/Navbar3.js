import React, { useState } from "react";
import { Link } from "gatsby";
import { FiAlignJustify } from "react-icons/fi";
import logo from "../assets/images/logo.svg";
import styled from "styled-components";
import NavLinks2 from "./NavLinks2";

const Navbar3 = () => {
  const [toggle, setToggle] = useState(false);

  const toggleBtn = (e) => {
    e.preventDefault();
    console.log("clicked");
    setToggle(!toggle);
  };

  return (
    <Nav>
      <NavCenter>
        <NavHeader>
          <Link to="/">
            <img src={logo} alt="" srcset="" />
          </Link>
          <NavBtn onClick={toggleBtn}>
            <FiAlignJustify />
          </NavBtn>
        </NavHeader>
        {/* {toggle ? <NavLinks /> : ""} */}
        <NavLinks2 toggle={toggle}></NavLinks2>
      </NavCenter>
    </Nav>
  );
};

const Nav = styled.nav`
  border: 3px solid red;
`;

const NavCenter = styled.div`
  border: 3px dashed blue;
  @media screen and (min-width: 992px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
`;

const NavHeader = styled.div`
  border: 3px solid green;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavBtn = styled.button`
  border: 3px solid violet;

  @media screen and (min-width: 992px) {
    display: none;
  }
`;

export default Navbar3;
