import React from "react"
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import '../styles/styles.scss'
import Layout from "../components/layout"
import SEO from "../components/seo"

const NaturePage = (props) => (
  <Layout>
    <SEO title="Nature" />
    <h1 className="page-header">
      Nature
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
      <div className="page-grid__small">
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
      <div className="page-grid__small">
        <Img
          fluid={props.data.imageThirteen.childImageSharp.fluid}
          objectFit="cover"
          objectPosition="50% 50%"	          GatsbyImageSharpFluid
          alt=""
        />
      </div>
      <div className="page-grid__small">
        <Img
          fluid={props.data.imageFourteen.childImageSharp.fluid}
          objectFit="cover"
          objectPosition="50% 50%"	          GatsbyImageSharpFluid
          alt=""
        />
      </div>
      <div className="page-grid__small">
        <Img
          fluid={props.data.imageFifteen.childImageSharp.fluid}
          objectFit="cover"
          objectPosition="50% 50%"	          GatsbyImageSharpFluid
          alt=""
        />
      </div>
      <div className="page-grid__small">
        <Img
          fluid={props.data.imageSixteen.childImageSharp.fluid}
          objectFit="cover"
          objectPosition="50% 50%"	          GatsbyImageSharpFluid
          alt=""
        />
      </div>
      <div className="page-grid__small">
        <Img
          fluid={props.data.imageSeventeen.childImageSharp.fluid}
          objectFit="cover"
          objectPosition="50% 50%"	          GatsbyImageSharpFluid
          alt=""
        />
      </div>
      <div className="page-grid__small">
        <Img
          fluid={props.data.imageEighteen.childImageSharp.fluid}
          objectFit="cover"
          objectPosition="50% 50%"	          GatsbyImageSharpFluid
          alt=""
        />
      </div>
      <div className="page-grid__small">
        <Img
          fluid={props.data.imageNineteen.childImageSharp.fluid}
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
  imageOne: file(relativePath: { eq: "nature1.jpg" }) {
    ...fluidImage
  }
  imageTwo: file(relativePath: { eq: "nature3.jpg" }) {
    ...fluidImage
  }
  imageThree: file(relativePath: { eq: "nature2.jpg" }) {
    ...fluidImage
  }
  imageFour: file(relativePath: { eq: "nature6.jpg" }) {
    ...fluidImage
  }
  imageFive: file(relativePath: { eq: "nature16.jpg" }) {
    ...fluidImage
  }
  imageSix: file(relativePath: { eq: "nature7.jpg" }) {
    ...fluidImage
  }
  imageSeven: file(relativePath: { eq: "nature9.jpg" }) {
    ...fluidImage
  }
  imageEight: file(relativePath: { eq: "nature8.jpg" }) {
    ...fluidImage
  }
  imageNine: file(relativePath: { eq: "nature12.jpg" }) {
    ...fluidImage
  }
  imageTen: file(relativePath: { eq: "nature19.jpg" }) {
    ...fluidImage
  }
  imageEleven: file(relativePath: { eq: "nature21.jpg" }) {
    ...fluidImage
  }
  imageTwelve: file(relativePath: { eq: "nature17.jpg" }) {
    ...fluidImage
  }
  imageThirteen: file(relativePath: { eq: "nature15.jpg" }) {
    ...fluidImage
  }
  imageFourteen: file(relativePath: { eq: "nature4.jpg" }) {
    ...fluidImage
  }
  imageFifteen: file(relativePath: { eq: "nature18.jpg" }) {
    ...fluidImage
  }
  imageSixteen: file(relativePath: { eq: "nature13.jpg" }) {
    ...fluidImage
  }
  imageSeventeen: file(relativePath: { eq: "nature11.jpg" }) {
    ...fluidImage
  }
  imageEighteen: file(relativePath: { eq: "nature5.jpg" }) {
    ...fluidImage
  }
  imageNineteen: file(relativePath: { eq: "nature20.jpg" }) {
    ...fluidImage
  }
}
`

export default NaturePage;
