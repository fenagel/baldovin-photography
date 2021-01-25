import React from "react"
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import '../styles/styles.scss'
import Layout from "../components/layout"
import SEO from "../components/seo"


const LandscapePage = (props) => (

    <Layout>
      <SEO title="Landscape" />
      <h1 className="page-header">
        Landscape
      </h1>
      <section className="page-grid">
        <div className="page-grid__small">
          <Img
            fluid={props.data.imageOne.childImageSharp.fluid}	
            objectFit="contain"
            objectPosition="50% 50%"	          GatsbyImageSharpFluid
            alt=""
          />
        </div>
        <div className="page-grid__small">
          <Img
            fluid={props.data.imageTwo.childImageSharp.fluid}	
            objectFit="cover"
            objectPosition="50% 50%"	          GatsbyImageSharpFluid
            alt=""
          />
        </div>
        <div className="page-grid__small">
          <Img
            fluid={props.data.imageThree.childImageSharp.fluid}	
            objectFit="cover"
            objectPosition="50% 50%"	          GatsbyImageSharpFluid
            alt=""
          />
        </div>
        <div className="page-grid__small">
          <Img
            fluid={props.data.imageFour.childImageSharp.fluid}	
            objectFit="cover"
            objectPosition="50% 50%"	          GatsbyImageSharpFluid
            alt=""
          />
        </div>
        <div className="page-grid__big">
          <Img
            fluid={props.data.imageFive.childImageSharp.fluid}	
            objectFit="cover"
            objectPosition="50% 50%"	          GatsbyImageSharpFluid
            alt=""
          />
        </div>
        <div className="page-grid__small">
          <Img
            fluid={props.data.imageSix.childImageSharp.fluid}	
            objectFit="cover"
            objectPosition="50% 50%"	          GatsbyImageSharpFluid
            alt=""
          />
        </div>
        <div className="page-grid__small">
          <Img
            fluid={props.data.imageSeven.childImageSharp.fluid}	
            objectFit="cover"
            objectPosition="50% 50%"	          GatsbyImageSharpFluid
            alt=""
          />
        </div>
        <div className="page-grid__small">
          <Img
            fluid={props.data.imageEight.childImageSharp.fluid}	
            objectFit="cover"
            objectPosition="50% 50%"	          GatsbyImageSharpFluid
            alt=""	
          />
        </div>
        <div className="page-grid__small">
          <Img
            fluid={props.data.imageNine.childImageSharp.fluid}	
            objectFit="cover"
            objectPosition="50% 50%"	          GatsbyImageSharpFluid
            alt=""	
          />
        </div>
        <div className="page-grid__big">
          <Img
            fluid={props.data.imageTen.childImageSharp.fluid}	
            objectFit="cover"
            objectPosition="50% 50%"	          GatsbyImageSharpFluid
            alt=""
          />
        </div>
        <div className="page-grid__small">
          <Img
            fluid={props.data.imageEleven.childImageSharp.fluid}	
            objectFit="cover"
            objectPosition="50% 50%"	          GatsbyImageSharpFluid
            alt=""	
          />
        </div>
        <div className="page-grid__small">
          <Img
            fluid={props.data.imageTwelve.childImageSharp.fluid}
            objectFit="cover"
            objectPosition="50% 50%"	          GatsbyImageSharpFluid
            alt=""	
          />
        </div>
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
  imageOne: file(relativePath: { eq: "landscape1.jpg" }) {
    ...fluidImage
  }
  imageTwo: file(relativePath: { eq: "home-landscape.jpg" }) {
    ...fluidImage
  }
  imageThree: file(relativePath: { eq: "landscape2.jpg" }) {
    ...fluidImage
  }
  imageFour: file(relativePath: { eq: "landscape3.jpg" }) {
    ...fluidImage
  }
  imageFive: file(relativePath: { eq: "landscape5.jpg" }) {
    ...fluidImage
  }
  imageSix: file(relativePath: { eq: "landscape7.jpg" }) {
    ...fluidImage
  }
  imageSeven: file(relativePath: { eq: "landscape6.jpg" }) {
    ...fluidImage
  }
  imageEight: file(relativePath: { eq: "landscape8.jpg" }) {
    ...fluidImage
  }
  imageNine: file(relativePath: { eq: "landscape13.jpg" }) {
    ...fluidImage
  }
  imageTen: file(relativePath: { eq: "landscape11.jpg" }) {
    ...fluidImage
  }
  imageEleven: file(relativePath: { eq: "landscape14.jpg" }) {
    ...fluidImage
  }
  imageTwelve: file(relativePath: { eq: "landscape15.jpg" }) {
    ...fluidImage
  }
}
`

export default LandscapePage;
