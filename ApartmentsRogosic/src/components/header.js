import PropTypes from "prop-types"
import React from "react"
import styles from "../styles/header.module.css"
import { useTranslation } from "react-i18next"
import "../i18n/i18n"
import LanguageMenu from "./languageSwitcher"

const Header = () => {
  const { t } = useTranslation()
  return (
    <header>
      <div className={styles.headerLayout}>
        <div>
          <h1 id={styles.mainHeader}>{t("site.heading")}</h1>
        </div>
        <div id={styles.sideHeader}>
          <div>
            <h3 id={styles.sideText}>Osibova, Brač</h3>
          </div>
          <div id={styles.languageChanger}>
            <LanguageMenu />
          </div>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
