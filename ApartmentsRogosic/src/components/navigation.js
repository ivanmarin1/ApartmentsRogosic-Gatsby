import React from "react"
import { Link } from "gatsby"
import styles from "../styles/nav.module.css"
import "../styles/navLine.css"

const Navigation = ({ menuItems }) => {
  const data = Array.from(menuItems)
  const menus = data.map(({ text, link, number }) => (
    <Link
      key={number}
      activeClassName="active"
      className={`${number} ${styles.navButton}`}
      to={link}
    >
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
