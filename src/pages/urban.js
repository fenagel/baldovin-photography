import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import '../styles/styles.scss'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Gallery from '../components/Gallery'

const useGallery = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: { sourceInstanceName: { eq: "urban" } }
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

const UrbanPage = () => (
  <Layout>
    <SEO title="Urban" />
    <h1 className="page-header">
      Urban
    </h1>
    <Gallery usegallery={useGallery()} />
  </Layout>
)


export default UrbanPage;
