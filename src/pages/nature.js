import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NaturePage = () => (
  <Layout>
    <SEO title="Nature" />
    <h1>Nature</h1>
    <p>Welcome to nature images</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default NaturePage;
