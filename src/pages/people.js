import React from "react"
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import '../styles/styles.scss'
import Layout from "../components/layout"
import SEO from "../components/seo"


const PeoplePage = (props) => (
    <Layout>
      <SEO title="People" />
      <h1 className="page-header">
        People
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
  imageOne: file(relativePath: { eq: "people2.jpg" }) {
    ...fluidImage
  }
  imageTwo: file(relativePath: { eq: "home-people.jpg" }) {
    ...fluidImage
  }
  imageThree: file(relativePath: { eq: "people3.jpg" }) {
    ...fluidImage
  }
  imageFour: file(relativePath: { eq: "people4.jpg" }) {
    ...fluidImage
  }
  imageFive: file(relativePath: { eq: "people5.jpg" }) {
    ...fluidImage
  }
  imageSix: file(relativePath: { eq: "people6.jpg" }) {
    ...fluidImage
  }
  imageSeven: file(relativePath: { eq: "people7.jpg" }) {
    ...fluidImage
  }
  imageEight: file(relativePath: { eq: "people11.jpg" }) {
    ...fluidImage
  }
  imageNine: file(relativePath: { eq: "people10.jpg" }) {
    ...fluidImage
  }
  imageTen: file(relativePath: { eq: "people12.jpg" }) {
    ...fluidImage
  }
  imageEleven: file(relativePath: { eq: "people13.jpg" }) {
    ...fluidImage
  }
  imageTwelve: file(relativePath: { eq: "people14.jpg" }) {
    ...fluidImage
  }
  imageThirteen: file(relativePath: { eq: "people15.jpg" }) {
    ...fluidImage
  }
}
`

export default PeoplePage;
