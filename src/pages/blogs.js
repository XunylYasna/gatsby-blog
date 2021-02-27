import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import BlogCard from "../components/BlogCards"

import blogStyles from "../styles/blog.module.css"

export default function Home({ data }) {
  const blogs = data.allMarkdownRemark.edges
  
  return (
    <Layout>
      <section className={blogStyles.blogHero}>
          <h1>Daily dose of sabaw</h1>
          <p>All here, All near, at All home</p>
      </section>  
      <section className={blogStyles.blogcontainer}>
        {blogs.map((blog,index) => {
            return(
                <BlogCard key={index} blogNode={blog.node}/>
            )
            })
        }
      </section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
        edges {
            node {
                frontmatter {
                    author
                    date(formatString: "MMMM DD, YYYY")
                    title
                    slug
                }
            }
        }
    }
  }
`