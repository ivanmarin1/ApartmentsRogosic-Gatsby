import React from "react"
import SplitScreen from "../components/splitScreen"
import SEO from "../components/seo"
import TitleBar from "../components/titleBar"
import Image from "../components/image"
import styles from "../styles/layout.module.css"
import { useTranslation } from "react-i18next"
import SocialButton from "../components/socialButton"

const socialMedia = [
  {
    color: "#01e675",
    text: "Whatsapp",
    icon: "whatsapp.png",
    link: "https://api.whatsapp.com/send?phone=491771402860",
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
                {/* {t("contact.name")} */}
                Ivan Rogošić
              </p>
              <p>
                {/* {t("contact.phone")} <br /> */}
                <a href="tel:+49 1771 40 28 60">+49 1771 40 28 60</a>
                <br />
                <a href="tel:+385 95/813-1807">+385 95/813-1807</a>
              </p>
              <p>
                {/* {t("contact.address")} */}
                <a href="https://g.page/apartmentsrogosic?share">
                  Kalina 68, 21405 Milna, Brač
                </a>
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
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11612.45060631235!2d16.423022536359188!3d43.31190116614966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13357b8508a1fd47%3A0xc7b79af7f306a2d6!2sApartmani%20Rogosic%20Osibova!5e0!3m2!1shr!2shr!4v1591619452771!5m2!1shr!2shr"
              width="100%"
              height="300"
              frameborder="0"
              style={{ border: "0" }}
              allowfullscreen="true"
              aria-hidden="false"
              title="Google Maps"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  )
}
export default ContactPage
