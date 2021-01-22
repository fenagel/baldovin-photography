import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import '../styles/styles.scss'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Gallery from '../components/gallery'

const useGallery = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: { sourceInstanceName: { eq: "landscape" } }
      ) {
        nodes {
          id
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `);

  return data.allFile.nodes.map(node => ({
    ...node.childImageSharp, // Note that we're spreading the childImageSharp object here
    id: node.id,
  }));
};

const LandscapePage = () => (

    <Layout>
      <SEO title="Landscape" />
      <h1 className="page-header">
        Landscape
      </h1>
      <Gallery usegallery={useGallery()} />
    </Layout>
)

export default LandscapePage;
