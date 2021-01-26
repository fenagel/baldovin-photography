import React from "react"
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import '../styles/styles.scss'
import Layout from "../components/layout"
import SEO from "../components/seo"


const UrbanPage = (props) => (
  <Layout>
    <SEO title="Urban" />
    <h1 className="page-header">
      Urban
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
  imageOne: file(relativePath: { eq: "urban2.jpg" }) {
    ...fluidImage
  }
  imageTwo: file(relativePath: { eq: "urban14.jpg" }) {
    ...fluidImage
  }
  imageThree: file(relativePath: { eq: "urban3.jpg" }) {
    ...fluidImage
  }
  imageFour: file(relativePath: { eq: "urban4.jpg" }) {
    ...fluidImage
  }
  imageFive: file(relativePath: { eq: "urban5.jpg" }) {
    ...fluidImage
  }
  imageSix: file(relativePath: { eq: "urban8.jpg" }) {
    ...fluidImage
  }
  imageSeven: file(relativePath: { eq: "urban7.jpg" }) {
    ...fluidImage
  }
  imageEight: file(relativePath: { eq: "urban10.jpg" }) {
    ...fluidImage
  }
  imageNine: file(relativePath: { eq: "urban24.jpg" }) {
    ...fluidImage
  }
  imageTen: file(relativePath: { eq: "urban18.jpg" }) {
    ...fluidImage
  }
  imageEleven: file(relativePath: { eq: "urban19.jpg" }) {
    ...fluidImage
  }
  imageTwelve: file(relativePath: { eq: "urban17.jpg" }) {
    ...fluidImage
  }
  imageThirteen: file(relativePath: { eq: "urban16.jpg" }) {
    ...fluidImage
  }
  imageFourteen: file(relativePath: { eq: "urban22.jpg" }) {
    ...fluidImage
  }
  imageFifteen: file(relativePath: { eq: "urban21.jpg" }) {
    ...fluidImage
  }
}
`


export default UrbanPage;
