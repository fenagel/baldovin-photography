import React from "react"
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import '../styles/styles.scss'
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = (props) => (
  <Layout>
    <SEO title="About" />
    <h1 className="page-header">About Me</h1>
    <section className="about-grid">
      <div className="about-grid__img">
        <Img
            fluid={props.data.profile.childImageSharp.fluid}
            objectFit="cover"
            objectPosition="50% 50%"	          GatsbyImageSharpFluid
            alt=""
          />
      </div>

      <div className="about-grid__content">
        <p>My love for photography is tightly linked to my love for nature. Having lived in a household of mainly artists, it wasn't outrageous for me to follow the path of beautifully constructed images of either nature or people</p>
        <p>I studied cinema in Italy. I did a few shorts as assignments for different classes but nothing more. For some reason I was fed up with school, so I turned to languages. I taught English and Spanish for a couple of years until I decided to stop viewing photography as a hobby and the occasional gig, but as a profession.</p>
        <p>All of that brings us to now. I have photographed hundreds of places and faces and I couldn't be happier. Photography brings me joy not only because I get to use a camera, but also because I get to encounter people I've never met, see cultures completely different from mine, and see places I never knew existed. Photography is my door to the world.</p>
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
  profile: file(relativePath: { eq: "profile.jpg" }) {
    ...fluidImage
  }
}
`

export default AboutPage;
