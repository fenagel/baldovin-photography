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
    <section className="landscape-grid">
      <Img
        fluid={props.data.imageOne.childImageSharp.fluid}
        objectFit="cover"
        objectPosition="50% 50%"
        alt=""
        className="landscape-grid__picture-1"
      />
      <Img
        fluid={props.data.imageTwo.childImageSharp.fluid}
        objectFit="cover"
        objectPosition="50% 50%"
        alt=""
        className="landscape-grid__picture-2"
      />
      <Img
        fluid={props.data.imageThree.childImageSharp.fluid}
        objectFit="cover"
        objectPosition="50% 50%"
        alt=""
        className="landscape-grid__picture-3"
      />
      <Img
        fluid={props.data.imageFour.childImageSharp.fluid}
        objectFit="cover"
        objectPosition="50% 50%"
        alt=""
        className="landscape-grid__picture-4"
      />
      <Img
        fluid={props.data.imageFive.childImageSharp.fluid}
        objectFit="cover"
        objectPosition="50% 50%"
        alt=""
        className="landscape-grid__picture-5"
      />
      <Img
        fluid={props.data.imageSix.childImageSharp.fluid}
        objectFit="cover"
        objectPosition="50% 50%"
        alt=""
        className="landscape-grid__picture-6"
      />
      <Img
        fluid={props.data.imageSeven.childImageSharp.fluid}
        objectFit="cover"
        objectPosition="50% 50%"
        alt=""
        className="landscape-grid__picture-7"
      />
      <Img
        fluid={props.data.imageEight.childImageSharp.fluid}
        objectFit="cover"
        objectPosition="50% 50%"
        alt=""
        className="landscape-grid__picture-8"
      />   
      <Img
        fluid={props.data.imageNine.childImageSharp.fluid}
        objectFit="cover"
        objectPosition="50% 50%"
        alt=""
        className="landscape-grid__picture-9"
      />
      <Img
        fluid={props.data.imageTen.childImageSharp.fluid}
        objectFit="cover"
        objectPosition="50% 50%"
        alt=""
        className="landscape-grid__picture-10"
      />
      <Img
        fluid={props.data.imageEleven.childImageSharp.fluid}
        objectFit="cover"
        objectPosition="50% 50%"
        alt=""
        className="landscape-grid__picture-11"
      />
      <Img
        fluid={props.data.imageTwelve.childImageSharp.fluid}
        objectFit="cover"
        objectPosition="50% 50%"
        alt=""
        className="landscape-grid__picture-12"
      />
      <Img
        fluid={props.data.imageThirteen.childImageSharp.fluid}
        objectFit="cover"
        objectPosition="50% 50%"
        alt=""
        className="landscape-grid__picture-13"
      />
      <Img
        fluid={props.data.imageFourteen.childImageSharp.fluid}
        objectFit="cover"
        objectPosition="50% 50%"
        alt=""
        className="landscape-grid__picture-14"
      />
      <Img
        fluid={props.data.imageFifteen.childImageSharp.fluid}
        objectFit="cover"
        objectPosition="50% 50%"
        alt=""
        className="landscape-grid__picture-15"
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
    imageOne: file(relativePath: { eq: "DSC_0053.jpg" }) {
      ...fluidImage
    }
    imageTwo: file(relativePath: { eq: "DSC_0068.jpg" }) {
      ...fluidImage
    }
    imageThree: file(relativePath: { eq: "DSC_0071.jpg" }) {
      ...fluidImage
    }
    imageFour: file(relativePath: { eq: "DSC_0092.jpg" }) {
      ...fluidImage
    }
    imageFive: file(relativePath: { eq: "DSC_0460-1.jpg" }) {
      ...fluidImage
    }
    imageSix: file(relativePath: { eq: "DSC_0469.jpg" }) {
      ...fluidImage
    }
    imageSeven: file(relativePath: { eq: "DSC_0471-3.jpg" }) {
      ...fluidImage
    }
    imageEight: file(relativePath: { eq: "DSC_0477-Pano-2.jpg" }) {
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

export default LandscapePage;
