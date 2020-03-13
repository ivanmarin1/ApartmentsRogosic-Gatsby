import React from "react"
import { Link } from "gatsby"

const PostLink = ({ apartment }) => (
  <div>
    <Link to={apartment.frontmatter.path}>{apartment.frontmatter.title}</Link>
  </div>
)

export default PostLink
