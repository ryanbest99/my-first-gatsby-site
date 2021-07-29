import * as React from "react";
import { Link } from "gatsby";
import Title from "../components/Title";
import Layout from "../components/layout";
import { title } from "../components/my-component.module.css";
import Images from "../components/Images";

// markup
const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle="Home Page" title="Home">
        <p>I'm making this by following the Gatsby Tutorial.</p>
        <p>DEMO APP</p>
        <Images />
      </Layout>
    </main>
  );
};

export default IndexPage;
