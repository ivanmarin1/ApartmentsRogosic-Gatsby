import React from "react"
import SplitScreen from "../components/splitScreen"
import SEO from "../components/seo"
import TitleBar from "../components/titleBar"
import Image from "../components/image"
import styles from "../styles/layout.module.css"
import { useTranslation } from "react-i18next"
import SocialButton from "../components/socialButton"
import MapV2 from "../components/mapsV2"

const socialMedia = [
  {
    color: "#01e675",
    text: "Whatsapp",
    icon: "whatsapp.png",
    link: "https://api.whatsapp.com/send?phone=385991980646",
  },
  {
    color: "#365899",
    text: "Facebook",
    icon: "facebook.png",
    link: "https://www.facebook.com/apartmani.rogosic.osibova/",
  },
  {
    color: "#dd2a7b",
    text: "Instagram",
    icon: "instagram.png",
    link: "https://instagram.com/rogosicosibova?igshid=iyu99ky2d7nv",
  },
  {
    color: "#2196f3",
    text: "Email",
    icon: "email.png",
    link: "mailto:apartmani.rogosic@gmail.com",
  },
]

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
            <div className={styles.info}>
              <p>
                {t("contact.name")}
                Ivan Rogošić
              </p>
              <p>
                {t("contact.phone")} <br />
                +49 1771 40 28 60
                <br />
                +385 95/813-1807
              </p>
              <p>
                {t("contact.address")}
                Kalina 68, 21405 Milna, Brač
              </p>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gridColumnGap: "5px",
                margin: "50px 0",
              }}
            >
              {socialMedia.map(media => (
                <SocialButton
                  color={media.color}
                  text={media.text}
                  icon={media.icon}
                  link={media.link}
                ></SocialButton>
              ))}
            </div>
          </div>
          <div>
            <Image filename="house-with-sea.jpg" alt="Main house"></Image>
          </div>
        </SplitScreen>
        <div id={styles.map} style={{ marginBottom: "20px" }}>
          <h2>{t("contact.mapTitle")}</h2>
          <div>
            <MapV2 />
          </div>
        </div>
      </div>
    </>
  )
}
export default ContactPage
