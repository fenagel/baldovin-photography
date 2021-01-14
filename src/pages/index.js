import React from "react"
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

import '../styles/styles.scss'
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = (props) => (
  <Layout>
    <SEO title="Home" />
    <section className="home-grid">
      <div className="home-grid__item">
        <Link to="/people" className="home-grid__link">
          <Img
            fluid={props.data.imagePeople.childImageSharp.fluid}
            objectFit="cover"
            objectPosition="50% 50%"
            alt=""
          />
          </Link>
          <h2 className="home-grid__item--text">People</h2>
      </div>

      <div className="home-grid__item">
        <Link to="/urban" className="home-grid__link">
          <Img
            fluid={props.data.imageUrban.childImageSharp.fluid}
            objectFit="cover"
            objectPosition="50% 50%"
            alt=""
          />
          </Link>
          <h2 className="home-grid__item--text">Urban</h2>
      </div>

      <div className="home-grid__item">
        <Link to="/landscape" className="home-grid__link">
          <Img
            fluid={props.data.imageLandscape.childImageSharp.fluid}
            objectFit="cover"
            objectPosition="50% 50%"
            alt=""
          />
          </Link>
          <h2 className="home-grid__item--text">Landscape</h2>
      </div>

      <div className="home-grid__item">
        <Link to="/nature" className="home-grid__link">
          <Img
            fluid={props.data.imageNature.childImageSharp.fluid}
            objectFit="cover"
            objectPosition="50% 50%"
            alt=""
          />
          </Link>
          <h2 className="home-grid__item--text">Nature</h2>
      </div>

    </section>
  </Layout>
)

export default IndexPage


export const fluidImage = graphql`
fragment fluidImage on File {
  childImageSharp {
    fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid
    }
  }
}
`

export const pageQuery = graphql`
  query {
    imagePeople: file(relativePath: { eq: "Dana-sister.jpg" }) {
      ...fluidImage
    }
    imageNature: file(relativePath: { eq: "DSC_0142.jpg" }) {
      ...fluidImage
    }
    imageLandscape: file(relativePath: { eq: "DSC_0438-1.jpg" }) {
      ...fluidImage
    }
    imageUrban: file(relativePath: { eq: "DSC_0037.jpg" }) {
      ...fluidImage
    }
  }
  `