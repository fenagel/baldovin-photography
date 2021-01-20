import React from "react"
import { graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import Img from "gatsby-image"

import '../styles/styles.scss'
import Layout from "../components/layout"
import SEO from "../components/seo"

const UrbanPage = (props) => (
  <Layout>
    <SEO title="Urban" />
    <h1 className="page-header">
      Urban
    </h1>
    <section className="urban-grid">
      <BackgroundImage
        fluid={props.data.imageOne.childImageSharp.fluid}
        style={{
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
          bottom: "0",
          left: "0",
          position: "absolute",
          right: "0",
          top: "0", 
        }}
        className="urban-grid__picture-1"
      />
      <BackgroundImage
        fluid={props.data.imageTwo.childImageSharp.fluid}
        style={{
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
          bottom: "0",
          left: "0",
          position: "absolute",
          right: "0",
          top: "0",
        }}
        className="urban-grid__picture-2"
      />
      <BackgroundImage
        fluid={props.data.imageThree.childImageSharp.fluid}
        style={{
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
          bottom: "0",
          left: "0",
          position: "absolute",
          right: "0",
          top: "0",
        }}
        className="urban-grid__picture-3"
      />
            <BackgroundImage
        fluid={props.data.imageFour.childImageSharp.fluid}
        style={{
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
          bottom: "0",
          left: "0",
          position: "absolute",
          right: "0",
          top: "0",
        }}
        className="urban-grid__picture-4"
      />
            <BackgroundImage
        fluid={props.data.imageFive.childImageSharp.fluid}
        style={{
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
          bottom: "0",
          left: "0",
          position: "absolute",
          right: "0",
          top: "0",
        }}
        className="urban-grid__picture-5"
      />
    </section>
  </Layout>
)

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
    imageOne: file(relativePath: { eq: "DSC_0394-1-2.jpg" }) {
      ...fluidImage
    }
    imageTwo: file(relativePath: { eq: "DSC_0390-1.jpg" }) {
      ...fluidImage
    }
    imageThree: file(relativePath: { eq: "DSC_0029-2.jpg" }) {
      ...fluidImage
    }
    imageFour: file(relativePath: { eq: "DSC_0070-7.jpg" }) {
      ...fluidImage
    }
    imageFive: file(relativePath: { eq: "DSC_0143-9.jpg" }) {
      ...fluidImage
    }
    imageSix: file(relativePath: { eq: "DSC_0297-1.jpg"  }) {
      ...fluidImage
    }
    imageSeven: file(relativePath: { eq: "DSC_0072-3.jpg" }) {
      ...fluidImage
    }
    imageEight: file(relativePath: { eq: "DSC_0059-2.jpg" }) {
      ...fluidImage
    }
    imageNine: file(relativePath: { eq: "DSC_0494.jpg" }) {
      ...fluidImage
    }
    imageTen: file(relativePath: { eq: "DSC_0498-1.jpg" }) {
      ...fluidImage
    }
    imageEleven: file(relativePath: { eq: "DSC_0622-2.jpg" }) {
      ...fluidImage
    }
    imageTwelve: file(relativePath: { eq: "DSC_0639-Pano.jpg" }) {
      ...fluidImage
    }
    imageThirteen: file(relativePath: { eq: "DSC_0734.jpg" }) {
      ...fluidImage
    }
    imageFourteen: file(relativePath: { eq: "DSC_0771.jpg" }) {
      ...fluidImage
    }
    imageFifteen: file(relativePath: { eq: "DSC_0972.jpg" }) {
      ...fluidImage
    }
  }
  `

export default UrbanPage;
