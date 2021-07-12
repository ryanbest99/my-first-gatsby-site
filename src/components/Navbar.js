import React from "react";
import { Link } from "gatsby";
import { FiAlignJustify } from "react-icons/fi";
import logo from "../assets/images/logo.svg";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="nav-center">
          <div className="nav-header">
            <Link>
              <img src={logo} alt="" srcset="" />
            </Link>
            <button className="nav-btn">
              <FiAlignJustify />
            </button>
          </div>
          <div className="nav-links show-links">
            <Link to="/" className="nav-link" activeClassName="active-link">
              Home
            </Link>
            <Link
              to="/about"
              className="nav-link"
              activeClassName="active-link"
            >
              About
            </Link>
            <Link
              to="/recipe"
              className="nav-link"
              activeClassName="active-link"
            >
              Recipe
            </Link>
            <Link
              to="/contact"
              className="nav-link"
              activeClassName="active-link"
            >
              Tags
            </Link>
            <div className="nav-link contact-link">
              <Link to="/contact" className="btn" activeClassName="active-link">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
