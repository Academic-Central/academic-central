import * as React from "react";
// import { graphql } from "gatsby"
import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image margin-top-0"
          style={{
            backgroundImage: `url('../../img/AC-banner_3840_640.png')`,
            backgroundPosition: `top center`,
            backgroundAttachment: `fixed`
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              boxShadow: "0.5rem 0 0 #002c76, -0.5rem 0 0 #002c76",
              backgroundColor: "#002c76",
              color: "white",
              padding: "1rem"
            }}
          >
            News and Updates
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
