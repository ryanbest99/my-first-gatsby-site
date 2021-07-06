import React from "react";
import { Link } from "gatsby";
import Title from "../components/Title";
import Layout from "../components/layout";

function AboutPage() {
  return (
    <main>
      {/* <title>About Me</title>
      <Title name={"About Me"} />
      <Link to="/">Back to Home</Link>

      <p>
        Hi there! I'm the proud creator of this site, which I built with Gatsby.
      </p> */}
      <Layout pageTitle="About Page">
        <p>I'm making this by following the Gatsby Tutorial.</p>
      </Layout>
    </main>
  );
}

export default AboutPage;
