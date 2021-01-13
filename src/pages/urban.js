import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const UrbanPage = () => (
  <Layout>
    <SEO title="Urban" />
    <h1>Urban</h1>
    <p>Welcome to urban images</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default UrbanPage;
