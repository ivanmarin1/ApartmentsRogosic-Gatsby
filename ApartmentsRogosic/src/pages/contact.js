import React from "react"
import SplitScreen from "../components/splitScreen"
import SEO from "../components/seo"
import TitleBar from "../components/titleBar"
import Image from "../components/image"
import GoogleMaps from "../components/gMaps"
import styles from "../styles/layout.module.css"
import { useTranslation } from "react-i18next"

const ContactPage = () => {
  const { t } = useTranslation()
  return (
    <>
      <div className={styles.mainContainer}>
        <SEO title={t("contact.subtitle")} />
        <SplitScreen>
          <div>
            <TitleBar>
              <h3>{t("contact.subtitle")}</h3>
            </TitleBar>
            <p>{t("contact.name")} Ivan Rogošić</p>
            <p>{t("contact.email")} Ivan@apartments-rogosic.com</p>
            <p>
              {t("contact.phone")} +49 1771 40 28 60
              <br />
              +385 95/813-1807
            </p>
            <p>{t("contact.address")} Kalina 68, 21405 Milna, Brač</p>
            <a href="https://api.whatsapp.com/send?phone=385991980646">
              Whatsapp
            </a>
            <a href="viber://chat?number=385991980646">Viber</a>
            <a href="viber://contact?number=%2B385991980646">Viber 2</a>
          </div>
          <div>
            <Image filename="house-with-sea.jpg" alt="Main house"></Image>
          </div>
        </SplitScreen>
        <div style={{ marginBottom: "20px" }}>
          <h2>{t("contact.mapTitle")}</h2>
          <GoogleMaps />
        </div>
      </div>
    </>
  )
}
export default ContactPage
