import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/Layout"

import homeStyles from "../styles/home.module.css"

export default function Home({ data }) {
  const { tagline, description } = data.site.siteMetadata

  return (
    <Layout>
      <section className={homeStyles.hero}>
        <div className={homeStyles.heroText}> 
          <h1>{tagline}</h1>
          <p>{description}</p>
        </div>
        <div>
          <Img fluid={data.homeImages.nodes[0].childImageSharp.fluid} />
        </div>
      </section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        tagline
        description
      }
    }
    homeImages: allFile(filter: {relativeDirectory: {eq: "home"}}) {
      nodes{
        childImageSharp {
          fluid(maxWidth: 300, maxHeight: 600) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  }
`