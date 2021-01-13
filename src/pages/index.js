import React from "react"
import { Link } from "gatsby"

import '../styles/styles.scss'
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="home-grid">
      <div className="home-grid__item">
        <Link to="/people" className="home-grid__link">
          People
        </Link>
      </div>

      <div className="home-grid__item">
        <Link to="/urban" className="home-grid__link">
          Urban
        </Link>
      </div>

      <div className="home-grid__item">
        <Link to="/landscape" className="home-grid__link">
          Landscape
        </Link>
      </div>

      <div className="home-grid__item">
        <Link to="/nature" className="home-grid__link">
          Nature
        </Link>
      </div>
    </section>
  </Layout>
)

export default IndexPage
