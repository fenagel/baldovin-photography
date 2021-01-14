import React from "react"
import { Link } from "gatsby"
import '../styles/styles.scss'
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <div className="about-border"></div>
    <h1 className="about-title">About Me</h1>
    <hr/>
    <section className="about-grid">
      <div className="about-grid__img">
      </div>

      <div className="about-grid__content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </section>
  </Layout>
)

export default AboutPage;
