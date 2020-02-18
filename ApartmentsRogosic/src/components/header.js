import PropTypes from "prop-types"
import React from "react"
import styles from "../styles/header.module.css"

const Header = () => (
  <header>
    <div className={styles.headerLayout}>
      <div>
        <h1 id={styles.mainHeader}>APARTMANI MIRNA</h1>
      </div>
      <div>
        <h3 id={styles.sideHeader}>Baška Voda</h3>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
