import React from "react"
import SplitScreen from "../components/splitScreen"
import SEO from "../components/seo"
import TitleBar from "../components/titleBar"
import Image from "../components/image"
import GoogleMaps from "../components/gMaps"
import styles from "../styles/layout.module.css"
import { useTranslation } from "react-i18next"
import SocialButton from "../components/socialButton"

const socialMedia = [
  {
    color: "#01e675",
    text: "Whatsapp",
    icon: "whatsapp.png",
    link: "https://api.whatsapp.com/send?phone=385991980646",
  },
  {
    color: "#574e92",
    text: "Viber",
    icon: "viber.png",
    link: "viber://contact?number=%2B385991980646",
  },
  {
    color: "#574e92",
    text: "Viber 2",
    icon: "viber.png",
    link: "viber://contact?number=385991980646",
  },
  {
    color: "#365899",
    text: "Facebook",
    icon: "facebook.png",
    link: "",
  },
  {
    color: "#dd2a7b",
    text: "Instagram",
    icon: "instagram.png",
    link: "https://instagram.com/rogosicosibova?igshid=iyu99ky2d7nv",
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
            <p>{t("contact.name")} Ivan Rogošić</p>
            <p>{t("contact.email")} Ivan@apartments-rogosic.com</p>
            <p>
              {t("contact.phone")} +49 1771 40 28 60
              <br />
              +385 95/813-1807
            </p>
            <p>{t("contact.address")} Kalina 68, 21405 Milna, Brač</p>
            {socialMedia.map(media => (
              <SocialButton
                color={media.color}
                text={media.text}
                icon={media.icon}
                link={media.link}
              ></SocialButton>
            ))}
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
