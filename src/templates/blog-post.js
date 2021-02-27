import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import postStyles from "../styles/post.module.css"

export default function BlogPost({ data }) {
  const post = data.markdownRemark

  return (
    <Layout>
      <section className={postStyles.header}>
        <h1>{post.frontmatter.title}</h1>
        <p>By {post.frontmatter.author}</p>
        <small>{post.frontmatter.date}</small>
      </section>
      <section className={postStyles.content}>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </section>
    </Layout>
  )
}
export const query = graphql`
  query BlogQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        author
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`