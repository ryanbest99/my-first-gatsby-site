import React from "react";
import { Link } from "gatsby";
import Title from "../components/Title";
import Layout from "../components/layout";

function AboutPage() {
  return (
    <main>
      <Layout pageTitle="About Page" title="About">
        <p>I'm making this by following the Gatsby Tutorial.</p>
      </Layout>
    </main>
  );
}

export default AboutPage;
