import React from "react";
import Layout from "../components/layout";
import { demo } from "./about.module.css";
import styled from "styled-components";

const About = () => {
  return (
    <Layout pageTitle="About Page">
      <p className={demo}>This is ABOUT PAGE</p>
    </Layout>
  );
};

export default About;
