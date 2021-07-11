import * as React from "react";
import { Link } from "gatsby";
import Title from "../components/Title";
import Layout from "../components/layout";
import { title } from "../components/my-component.module.css";

// markup
const IndexPage = () => {
  return (
    <main>
      {/* <title>Home Page</title>
      <Title name={"Home"} />
      <Link to="/about">About</Link>

      <p>
        Hi there! I'm the proud creator of this site, which I built with Gatsby.
      </p> */}
      <Layout pageTitle="Home Page">
        <p>I'm making this by following the Gatsby Tutorial.</p>
        <p>DEMO APP</p>
      </Layout>
    </main>
  );
};

export default IndexPage;
