import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const NavLinks = ({ toggle }) => {
  return (
    <NavLinkss toggle={toggle}>
      <Link to="/" activeClassName="active-linkk" className="nav-linkk">
        Home
      </Link>
      <Link to="/about" className="nav-linkk" activeClassName="active-linkk">
        About
      </Link>
      <Link to="/contact" className="nav-linkk" activeClassName="active-linkk">
        Contact
      </Link>
      <Link to="/etc" activeClassName="active-linkk" className="nav-linkk">
        Etc
      </Link>
    </NavLinkss>
  );
};

const NavLinkss = styled.div`
  border: 3px solid yellow;
  /* height: 0; */
  /* max-height: ${({ toggle }) => (toggle ? "300px" : "0")}; */

  .active-linkk {
    color: red;
  }

  .nav-linkk {
    display: block;
    border: 2px dashed purple;
    text-align: center;
    padding: 1rem 0;
  }
  @media screen and (min-width: 992px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

    .nav-linkk {
      padding: 0.5rem 1rem;
    }
  }
`;

export default NavLinks;
