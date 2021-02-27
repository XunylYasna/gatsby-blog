import React from "react"
import { Link } from "gatsby"

import cardStyle from "../styles/card.module.css"

const BlogCard = ({ blogNode }) => {
  
  return (
    <Link to={"/blog/" + blogNode.frontmatter.slug} className={cardStyle.blogPost}>
        <h3>{blogNode.frontmatter.title}</h3>
        <p class="date">{blogNode.frontmatter.date}</p>
        <p class="cat">By {blogNode.frontmatter.author}</p>
        <span>read</span>
    </Link>
  )
}

export default BlogCard