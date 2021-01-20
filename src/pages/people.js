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
    <section className="people-grid">
      <Img
        fluid={props.data.imageOne.childImageSharp.fluid}
        objectFit="cover"
        objectPosition="50% 50%"
        alt=""
        className="people-grid__picture-1"
      />
      <Img
        fluid={props.data.imageTwo.childImageSharp.fluid}
        objectFit="cover"
        objectPosition="50% 50%"
        alt=""
        className="people-grid__picture-2"
      />
      <Img
        fluid={props.data.imageThree.childImageSharp.fluid}
        objectFit="cover"
        objectPosition="50% 50%"
        alt=""
        className="people-grid__picture-3"
      />
      <Img
        fluid={props.data.imageFour.childImageSharp.fluid}
        objectFit="cover"
        objectPosition="50% 50%"
        alt=""
        className="people-grid__picture-4"
      />
      <Img
        fluid={props.data.imageFive.childImageSharp.fluid}
        objectFit="cover"
        objectPosition="50% 50%"
        alt=""
        className="people-grid__picture-5"
      />
      <Img
        fluid={props.data.imageSix.childImageSharp.fluid}
        objectFit="cover"
        objectPosition="50% 50%"
        alt=""
        className="people-grid__picture-6"
      />
      <Img
        fluid={props.data.imageSeven.childImageSharp.fluid}
        objectFit="cover"
        objectPosition="50% 50%"
        alt=""
        className="people-grid__picture-7"
      />
      <Img
        fluid={props.data.imageEight.childImageSharp.fluid}
        objectFit="cover"
        objectPosition="50% 50%"
        alt=""
        className="people-grid__picture-8"
      />   
      <Img
        fluid={props.data.imageNine.childImageSharp.fluid}
        objectFit="cover"
        objectPosition="50% 50%"
        alt=""
        className="people-grid__picture-9"
      />
      <Img
        fluid={props.data.imageTen.childImageSharp.fluid}
        objectFit="cover"
        objectPosition="50% 50%"
        alt=""
        className="people-grid__picture-10"
      />
      <Img
        fluid={props.data.imageEleven.childImageSharp.fluid}
        objectFit="cover"
        objectPosition="50% 50%"
        alt=""
        className="people-grid__picture-11"
      />
      <Img
        fluid={props.data.imageTwelve.childImageSharp.fluid}
        objectFit="cover"
        objectPosition="50% 50%"
        alt=""
        className="people-grid__picture-12"
      />
      <Img
        fluid={props.data.imageThirteen.childImageSharp.fluid}
        objectFit="cover"
        objectPosition="50% 50%"
        alt=""
        className="people-grid__picture-13"
      />
      <Img
        fluid={props.data.imageFourteen.childImageSharp.fluid}
        objectFit="cover"
        objectPosition="50% 50%"
        alt=""
        className="people-grid__picture-14"
      />
      <Img
        fluid={props.data.imageFifteen.childImageSharp.fluid}
        objectFit="cover"
        objectPosition="50% 50%"
        alt=""
        className="people-grid__picture-15"
      />
      <Img
        fluid={props.data.imageSixteen.childImageSharp.fluid}
        objectFit="cover"
        objectPosition="50% 50%"
        alt=""
        className="people-grid__picture-16"
      />
      <Img
        fluid={props.data.imageSeventeen.childImageSharp.fluid}
        objectFit="cover"
        objectPosition="50% 50%"
        alt=""
        className="people-grid__picture-17"
      />
      <Img
        fluid={props.data.imageEighteen.childImageSharp.fluid}
        objectFit="cover"
        objectPosition="50% 50%"
        alt=""
        className="people-grid__picture-18"
      />
      <Img
        fluid={props.data.imageNineteen.childImageSharp.fluid}
        objectFit="cover"
        objectPosition="50% 50%"
        alt=""
        className="people-grid__picture-19"
      />
      <Img
        fluid={props.data.imageTwenty.childImageSharp.fluid}
        objectFit="cover"
        objectPosition="50% 50%"
        alt=""
        className="people-grid__picture-20"
      />
      <Img
        fluid={props.data.imageTwentyone.childImageSharp.fluid}
        objectFit="cover"
        objectPosition="50% 50%"
        alt=""
        className="people-grid__picture-21"
      />
      <Img
        fluid={props.data.imageTwentytwo.childImageSharp.fluid}
        objectFit="cover"
        objectPosition="50% 50%"
        alt=""
        className="people-grid__picture-22"
      />
      <Img
        fluid={props.data.imageTwentythree.childImageSharp.fluid}
        objectFit="cover"
        objectPosition="50% 50%"
        alt=""
        className="people-grid__picture-23"
      />
      <Img
        fluid={props.data.imageTwentyfour.childImageSharp.fluid}
        objectFit="cover"
        objectPosition="50% 50%"
        alt=""
        className="people-grid__picture-24"
      />
      <Img
        fluid={props.data.imageTwentyfive.childImageSharp.fluid}
        objectFit="cover"
        objectPosition="50% 50%"
        alt=""
        className="people-grid__picture-25"
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
    imageOne: file(relativePath: { eq: "DSC_0258.jpg" }) {
      ...fluidImage
    }
    imageTwo: file(relativePath: { eq: "DSC_0260.jpg" }) {
      ...fluidImage
    }
    imageThree: file(relativePath: { eq: "DSC_0263-1.jpg" }) {
      ...fluidImage
    }
    imageFour: file(relativePath: { eq: "DSC_0382-2.jpg" }) {
      ...fluidImage
    }
    imageFive: file(relativePath: { eq: "DSC_0383.jpg" }) {
      ...fluidImage
    }
    imageSix: file(relativePath: { eq: "DSC_0449.jpg" }) {
      ...fluidImage
    }
    imageSeven: file(relativePath: { eq: "DSC_0504.jpg" }) {
      ...fluidImage
    }
    imageEight: file(relativePath: { eq: "DSC_0540.jpg" }) {
      ...fluidImage
    }
    imageNine: file(relativePath: { eq: "DSC_0546.jpg" }) {
      ...fluidImage
    }
    imageTen: file(relativePath: { eq: "DSC_0718.jpg" }) {
      ...fluidImage
    }
    imageEleven: file(relativePath: { eq: "DSC_0016-1.jpg" }) {
      ...fluidImage
    }
    imageTwelve: file(relativePath: { eq: "DSC_0025-4.jpg" }) {
      ...fluidImage
    }
    imageThirteen: file(relativePath: { eq: "DSC_0031-9.jpg" }) {
      ...fluidImage
    }
    imageFourteen: file(relativePath: { eq: "DSC_0035.jpg" }) {
      ...fluidImage
    }
    imageFifteen: file(relativePath: { eq: "DSC_0038.jpg" }) {
      ...fluidImage
    }
    imageSixteen: file(relativePath: { eq: "DSC_0043B&W-19.jpg" }) {
      ...fluidImage
    }
    imageSeventeen: file(relativePath: { eq: "DSC_0066-2.jpg" }) {
      ...fluidImage
    }
    imageEighteen: file(relativePath: { eq: "DSC_0070-7.jpg" }) {
      ...fluidImage
    }
    imageNineteen: file(relativePath: { eq: "DSC_0075-8.jpg" }) {
      ...fluidImage
    }
    imageTwenty: file(relativePath: { eq: "DSC_0084.jpg" }) {
      ...fluidImage
    }
    imageTwentyone: file(relativePath: { eq: "DSC_0089-5.jpg" }) {
      ...fluidImage
    }
    imageTwentytwo: file(relativePath: { eq: "DSC_0126.jpg" }) {
      ...fluidImage
    }
    imageTwentythree: file(relativePath: { eq: "DSC_0143-9.jpg" }) {
      ...fluidImage
    }
    imageTwentyfour: file(relativePath: { eq: "DSC_0216.jpg" }) {
      ...fluidImage
    }
    imageTwentyfive: file(relativePath: { eq: "DSC_0241-21.jpg" }) {
      ...fluidImage
    }
  }
  `

export default PeoplePage;
