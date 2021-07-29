import * as React from "react";
import Navbar from "./Navbar";
import "../assets/css/main.css";
import "@csstools/normalize.css";
import Footer from "./Footer";
import Navbar2 from "./Navbar2";
import Navbar3 from "./Navbar3";

const Layout = (props) => {
  const pageTitle = props.pageTitle;
  const children = props.children;
  const title = props.title;
  return (
    <>
      <title>{pageTitle}</title>
      <Navbar />
      {/* <Navbar2 /> */}
      <Navbar3 />

      <h1>{title}</h1>
      {children}
      <Footer />
    </>
    // <main className={container}>
    //   <title>{pageTitle}</title>
    //   <nav>
    //     <ul className={navLinks}>
    //       <li className={navLinkItem}>
    //         <Link to="/" className={navLinkText}>
    //           Home
    //         </Link>
    //       </li>
    //       <li className={navLinkItem}>
    //         <Link to="/about" className={navLinkText}>
    //           About
    //         </Link>
    //       </li>
    //     </ul>
    //   </nav>
    //   <h1 className={heading}>{pageTitle}</h1>
    //   {children}
    // </main>
  );
};
export default Layout;
