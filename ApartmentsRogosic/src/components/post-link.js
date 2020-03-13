import React from "react"
import { Link } from "gatsby"
import style from "../styles/postlink.module.css"
import Image from "./image"

const PostLink = ({ apartment, image }) => (
  <Link to={apartment.frontmatter.path} className={style.link}>
    <div className={style.wrapper}>
      <div className={style.auth}>
        <h3>{apartment.frontmatter.title}</h3>
      </div>
      <div className={style.image}>
        <Image filename={image}></Image>
      </div>
      <div>
        <p>{apartment.excerpt}</p>
      </div>
    </div>
  </Link>
)

export default PostLink
