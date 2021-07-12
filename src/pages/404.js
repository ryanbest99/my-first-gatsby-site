import React from "react";
import { Link } from "gatsby";
import Title from "../components/Title";
import Layout from "../components/layout";
import styled from "styled-components";

function Error() {
  return (
    <>
      {/* <Layout pageTitle="Error Page" title="Error">
        <main className="error-page">
          <section>
            <h1>404</h1>
            <h3>page not found</h3>
          </section>
        </main>
      </Layout> */}
      <Layout pageTitle="Error Page" title="Error">
        <ErrorWrapper>
          <section>
            <h1>404</h1>
            <h3>page not found</h3>
          </section>
        </ErrorWrapper>
      </Layout>
    </>
  );
}

const ErrorWrapper = styled.main`
  border: 3px solid red;
  min-height: calc(100vh - (6rem + 4rem));
  text-align: center;
  /* padding-top: 3rem; */

  section {
    border: 3px solid blue;
  }

  h1 {
    font-size: 9rem;
  }
`;

export default Error;
