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
        filter: { sourceInstanceName: { eq: "people" } }
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

const PeoplePage = () => (

    <Layout>
      <SEO title="People" />
      <h1 className="page-header">
        People
      </h1>
      <Gallery usegallery={useGallery()} />
    </Layout>
)

export default PeoplePage;
