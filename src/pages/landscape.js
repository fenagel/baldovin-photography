import React from "react"
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import '../styles/styles.scss'
import Layout from "../components/layout"
import SEO from "../components/seo"


const LandscapePage = (props) => {
  const images = props.data.contentfulGallery.image

  return (
  <Layout>
    <SEO title="Landscape" />
    <h1 className="page-header">
      Landscape
    </h1>
    <section className="page-grid">
      <div className="page-grid__small">
        <Img
          fluid={images[0].photo.fluid}	
          objectFit="contain"
          objectPosition="50% 50%"	          GatsbyImageSharpFluid
          alt=""
        />
      </div>
      <div className="page-grid__small">
        <Img
          fluid={images[1].photo.fluid}	
          objectFit="cover"
          objectPosition="50% 50%"	          GatsbyImageSharpFluid
          alt=""
        />
      </div>
      <div className="page-grid__small">
        <Img
          fluid={images[2].photo.fluid}	
          objectFit="cover"
          objectPosition="50% 50%"	          GatsbyImageSharpFluid
          alt=""
        />
      </div>
      <div className="page-grid__small">
        <Img
          fluid={images[3].photo.fluid}	
          objectFit="cover"
          objectPosition="50% 50%"	          GatsbyImageSharpFluid
          alt=""
        />
      </div>
      <div className="page-grid__big">
        <Img
          fluid={images[4].photo.fluid}	
          objectFit="cover"
          objectPosition="50% 50%"	          GatsbyImageSharpFluid
          alt=""
        />
      </div>
      <div className="page-grid__small">
        <Img
          fluid={images[5].photo.fluid}	
          objectFit="cover"
          objectPosition="50% 50%"	          GatsbyImageSharpFluid
          alt=""
        />
      </div>
      <div className="page-grid__small">
        <Img
          fluid={images[6].photo.fluid}	
          objectFit="cover"
          objectPosition="50% 50%"	          GatsbyImageSharpFluid
          alt=""
        />
      </div>
      <div className="page-grid__small">
        <Img
          fluid={images[7].photo.fluid}	
          objectFit="cover"
          objectPosition="50% 50%"	          GatsbyImageSharpFluid
          alt=""	
        />
      </div>
      <div className="page-grid__small">
        <Img
          fluid={images[8].photo.fluid}	
          objectFit="cover"
          objectPosition="50% 50%"	          GatsbyImageSharpFluid
          alt=""	
        />
      </div>
      <div className="page-grid__big">
        <Img
          fluid={images[9].photo.fluid}	
          objectFit="cover"
          objectPosition="50% 50%"	          GatsbyImageSharpFluid
          alt=""
        />
      </div>
      <div className="page-grid__small">
        <Img
          fluid={images[10].photo.fluid}	
          objectFit="cover"
          objectPosition="50% 50%"	          GatsbyImageSharpFluid
          alt=""	
        />
      </div>
      <div className="page-grid__small">
        <Img
          fluid={images[11].photo.fluid}
          objectFit="cover"
          objectPosition="50% 50%"	          GatsbyImageSharpFluid
          alt=""	
        />
      </div>
    </section>
  </Layout>
  )
}


export const query = graphql`
query {
  contentfulGallery(title: {eq: "Landscape"}) {
    title
    id
    image {
      id
      title
      photo {
        title
        fluid(maxWidth: 1800, quality: 90) {
          ...GatsbyContentfulFluid_withWebp
          src
        }
      }
    }
  }
}
`

export default LandscapePage;
