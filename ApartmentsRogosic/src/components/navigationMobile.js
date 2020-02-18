import React from "react"
import { Link } from "gatsby"
import styles from "../styles/navMobile.module.css"
import "../styles/navLine.css"
import Image from "./image"

const Navigation = ({ menuItems }) => {
  const data = Array.from(menuItems)
  const menus = data.map(({ text, link, number, iconName }) => (
    <Link
      key={number}
      activeClassName="active"
      className={`${number} ${styles.navButton}`}
      to={link}
    >
      <div className={styles.navIcon}>
        <Image filename={iconName}></Image>
      </div>
      {text}
    </Link>
  ))
  return (
    <div className={styles.navBar}>
      <ul>
        {menus}
        <hr />
      </ul>
    </div>
  )
}

export default Navigation
