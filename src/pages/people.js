import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const PeoplePage = () => (
  <Layout>
    <SEO title="People" />
    <h1>People</h1>
    <p>Welcome to people images</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default PeoplePage;
