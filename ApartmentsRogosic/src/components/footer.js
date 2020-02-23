import React from "react"
import styles from "../styles/footer.module.css"
import { useTranslation } from "react-i18next"

const Footer = () => {
  const { t } = useTranslation()
  return (
    <footer>
      <p className={styles.footerText}>{t("site.footer")}</p>
    </footer>
  )
}

export default Footer
