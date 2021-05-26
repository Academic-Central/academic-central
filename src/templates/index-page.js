import * as React from "react";
// import PropTypes from 'prop-types'
import { Link, graphql } from "gatsby";
import SeO from "../components/seo";
import Layout from "../components/Layout";
import BlogRoll from "../components/BlogRoll";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

const IndexPageTemplate = ({ data }) => (
  <Layout>
    <SeO title={data.markdownRemark.frontmatter.title} description={data.markdownRemark.frontmatter.description} />
    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url('img/topics10_top.jpg')`,
        // backgroundImage: {data.markdownRemark.image},
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`
      }}
    >
      <h1
        className="has-text-weight-bold is-size-1"
        style={{
          boxShadow: "0.5rem 0 0 #004400, -0.5rem 0 0 #004400",
          backgroundColor: "#004400",
          color: "white",
          padding: "1rem"
        }}
      >
        {data.markdownRemark.frontmatter.title}
      </h1>
      {/* <h3
          className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
          style={{
            boxShadow:
              'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
            backgroundColor: 'rgb(255, 68, 0)',
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          {data.markdownRemark.frontmatter.subtitle}
        </h3>         */}
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="content">
                  <div className="tile">{/* <p>{data.markdownRemark.frontmatter.aboutUs}</p> */}</div>
                  <section className="content" dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
                </div>

                <div className="columns">
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">{data.markdownRemark.frontmatter.heading}</h3>
                    <p>{data.markdownRemark.frontmatter.description}</p>
                  </div>
                </div>
                {/* <Features gridItems={data.markdownRemark.frontmatter.intro.journals} /> */}

                <div className="columns is-multiline">
                  <div className="column is-6">
                    <section className="section">
                      <div className="has-text-centered">
                        <div
                          style={{
                            width: "300px",
                            display: "inline-block"
                          }}
                        >
                          <a href="https://www.ieice.org/cs/jpn/EB/index.html" target="_blank" rel="noopener noreferrer">
                            <StaticImage src="../img/ac1.jpg" alt="アカデミック・セントラル推進企画室 - インストラクショナル・デザインチーム" placeholder="blurred" width={240} />
                          </a>
                        </div>
                        <h5>{data.markdownRemark.frontmatter.ac1.header}</h5>
                      </div>
                      <p>{data.markdownRemark.frontmatter.ac1.text}</p>
                      <div className="column is-12 has-text-centered">
                        <a className="btn" href="https://search.ieice.org/bin/index.php?category=B&amp;lang=E" target="_blank" rel="noopener noreferrer">
                          See latest papers
                        </a>
                      </div>
                    </section>
                  </div>
                  <div className="column is-6">
                    <section className="section">
                      <div className="has-text-centered">
                        <div
                          style={{
                            width: "240px",
                            display: "inline-block"
                          }}
                        >
                          <a href="https://www.ieice.org/publications/comex/" target="_blank" rel="noopener noreferrer">
                            <StaticImage src="../img/ac2.jpg" alt="高大接続連携部門" placeholder="blurred" layout="fixed" width={240} />
                            {/* <GatsbyImage image={comeximage} style={{ borderRadius: '5px' }} alt="IEICE ComEX" /> */}
                          </a>
                        </div>
                        <h5>{data.markdownRemark.frontmatter.ac2.header}</h5>
                      </div>
                      <p>{data.markdownRemark.frontmatter.ac2.text}</p>
                      <div className="column is-12 has-text-centered">
                        <a className="btn" href="https://www.ieice.org/publications/comex/" target="_blank" rel="noopener noreferrer">
                          See latest papers
                        </a>
                      </div>
                    </section>
                  </div>
                </div>

                <div className="columns is-multiline">
                  <div className="column is-6">
                    <section className="section">
                      <div className="has-text-centered">
                        <div
                          style={{
                            width: "240px",
                            display: "inline-block"
                          }}
                        >
                          <a href="https://www.ieice.org/cs/jpn/JB/index-new.html" target="_blank" rel="noopener noreferrer">
                            <StaticImage src="../img/ac3.jpg" alt="高度リベラル・アーツ教育共創部門" placeholder="blurred" layout="fixed" width={240} />
                            {/* <GatsbyImage image={jbimage} style={{ borderRadius: '5px' }} alt="IEICE JB" /> */}
                          </a>
                        </div>
                        <h5>{data.markdownRemark.frontmatter.ac3.header}</h5>
                      </div>
                      <p>{data.markdownRemark.frontmatter.ac3.text}</p>
                      <div className="column is-12 has-text-centered">
                        <a className="btn" href="https://search.ieice.org/bin/index.php?category=B&amp;lang=J" target="_blank" rel="noopener noreferrer">
                          See latest papers
                        </a>
                      </div>
                    </section>
                  </div>
                  <div className="column is-6">
                    <section className="section">
                      <div className="has-text-centered">
                        <div
                          style={{
                            width: "240px",
                            display: "inline-block"
                          }}
                        >
                          <a href="https://www.ieice.org/~cs-edit/magazine/" target="_blank" rel="noopener noreferrer">
                            <StaticImage src="../img/ac4.jpg" alt="シームレス数理・データ科学教育共創部門" placeholder="blurred" layout="fixed" width={240} />
                          </a>
                        </div>
                        <h5>{data.markdownRemark.frontmatter.ac4.header}</h5>
                      </div>
                      <p>{data.markdownRemark.frontmatter.ac4.text}</p>
                      <div className="column is-12 has-text-centered">
                        <a className="btn" href="https://www.ieice.org/~cs-edit/magazine/" target="_blank" rel="noopener noreferrer">
                          See latest articles
                        </a>
                      </div>
                    </section>
                  </div>
                </div>

                <div className="columns is-multiline">
                  <div className="column is-6">
                    <section className="section">
                      <div className="has-text-centered">
                        <div
                          style={{
                            width: "240px",
                            display: "inline-block"
                          }}
                        >
                          <a href="https://www.ieice.org/cs/jpn/JB/index-new.html" target="_blank" rel="noopener noreferrer">
                            <StaticImage src="../img/ac5.jpg" alt="高トランスディシプリナリー博士課程教育推進部門（高度基盤教育），QTA・GSI トレーニングセンター（次世代リーダー養成）" placeholder="blurred" layout="fixed" width={240} />
                            {/* <GatsbyImage image={jbimage} style={{ borderRadius: '5px' }} alt="IEICE JB" /> */}
                          </a>
                        </div>
                        <h5>{data.markdownRemark.frontmatter.ac5.header}</h5>
                      </div>
                      <p>{data.markdownRemark.frontmatter.ac5.text}</p>
                      <div className="column is-12 has-text-centered">
                        <a className="btn" href="https://search.ieice.org/bin/index.php?category=B&amp;lang=J" target="_blank" rel="noopener noreferrer">
                          See latest papers
                        </a>
                      </div>
                    </section>
                  </div>
                  <div className="column is-6">
                    <section className="section">
                      <div className="has-text-centered">
                        <div
                          style={{
                            width: "240px",
                            display: "inline-block"
                          }}
                        >
                          <a href="https://www.ieice.org/~cs-edit/magazine/" target="_blank" rel="noopener noreferrer">
                            <StaticImage src="../img/ac6.jpg" alt="人生構想力教育共創部門（学生支援、生涯教育）" placeholder="blurred" layout="fixed" width={240} />
                          </a>
                        </div>
                        <h5>{data.markdownRemark.frontmatter.ac6.header}</h5>
                      </div>
                      <p>{data.markdownRemark.frontmatter.ac6.text}</p>
                      <div className="column is-12 has-text-centered">
                        <a className="btn" href="https://www.ieice.org/~cs-edit/magazine/" target="_blank" rel="noopener noreferrer">
                          See latest articles
                        </a>
                      </div>
                    </section>
                  </div>
                </div>

                <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-2">News and Updates</h3>
                  <BlogRoll />
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/news">
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPageTemplate;

export const pageQuery = graphql`
  query IndexPageTemplate {
    site {
      siteMetadata {
        title
        description
      }
      pathPrefix
    }
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      id
      frontmatter {
        templateKey
        title
        subtitle
        heading
        description
        ac1 {
          header
          text
        }
        ac2 {
          header
          text
        }
        ac3 {
          header
          text
        }
        ac4 {
          header
          text
        }
        ac5 {
          header
          text
        }
        ac6 {
          header
          text
        }
      }
      html
    }
  }
`;
