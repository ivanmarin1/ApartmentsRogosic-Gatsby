import React from "react"
import { Link } from "gatsby"
import style from "../styles/postlink.module.css"
import Image from "./image"

const PostLink = ({ element, apartment, image }) => {
  let listBackground = { backgroundColor: "white" }
  if (element % 2 !== 0)
    listBackground = { backgroundColor: "rgb(236, 243, 251)" }
  return (
    <Link to={apartment.frontmatter.path} className={style.link}>
      <div className={style.wrapper} style={listBackground}>
        <div className={style.auth}>
          <h3>{apartment.frontmatter.title}</h3>
        </div>
        <div className={style.grid}>
          <div className={style.image}>
            <Image filename={image}></Image>
          </div>
          <div className={style.description}>
            <p>{apartment.excerpt}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
export default PostLink
