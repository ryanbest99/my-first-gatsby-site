import React, { useState } from "react";
import { Link } from "gatsby";
import { FiAlignJustify } from "react-icons/fi";
import logo from "../assets/images/logo.svg";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const toggleBtn = (e) => {
    e.preventDefault();
    console.log("clicked");
    setToggle(!toggle);
  };

  return (
    <>
      <nav>
        <div className="nav-center">
          <div className="nav-header">
            <Link>
              <img src={logo} alt="" srcset="" />
            </Link>
            <button className="nav-btn" onClick={toggleBtn}>
              <FiAlignJustify />
            </button>
          </div>
          <div className={toggle ? "nav-links show-links" : "nav-links"}>
            <Link
              to="/"
              className="nav-link"
              activeClassName="active-link"
              onClick={() => setToggle(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="nav-link"
              activeClassName="active-link"
              onClick={() => setToggle(false)}
            >
              About
            </Link>
            <Link
              to="/recipe"
              className="nav-link"
              activeClassName="active-link"
              onClick={() => setToggle(false)}
            >
              Recipe
            </Link>
            <Link
              to="/contact"
              className="nav-link"
              activeClassName="active-link"
              onClick={() => setToggle(false)}
            >
              Tags
            </Link>
            <div className="nav-link contact-link">
              <Link
                to="/contact"
                className="btn"
                activeClassName="active-link"
                onClick={() => setToggle(false)}
              >
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
