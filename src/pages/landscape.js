import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const LandscapePage = () => (
  <Layout>
    <SEO title="Landscape" />
    <h1>Landscape</h1>
    <p>Welcome to landscape images</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default LandscapePage;
