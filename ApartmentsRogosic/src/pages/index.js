import React from "react"
import Image from "../components/image"
import SEO from "../components/seo"
import TitleBar from "../components/titleBar"
import SplitScreen from "../components/splitScreen"
import Slideshow from "../components/carousel"
import styles from "../styles/layout.module.css"
import apartStyle from "../styles/apartments.module.css"
import { Link } from "gatsby"
import { useTranslation } from "react-i18next"

const IndexPage = props => {
  const { t } = useTranslation()
  return (
    <>
      <SEO title={t("home.subtitle")} />
      <Slideshow></Slideshow>
      <div className={styles.mainContainer}>
        <SplitScreen>
          <div>
            <TitleBar>
              <h3>{t("home.subtitle")}</h3>
            </TitleBar>
            <div>
              <p>{t("home.text")}</p>
              <Link to="/reservation/">
                <button
                  style={{ marginBottom: "37px" }}
                  className={apartStyle.contrastButton}
                >
                  {t("site.button")}
                </button>
              </Link>
            </div>
          </div>
          <div>
            <Image filename="balcon_view.jpg"></Image>
          </div>
        </SplitScreen>
        <p
          style={{
            textAlign: "center",
            color: "#7AAEEB",
            fontSize: "20px",
            paddingTop: "2%",
          }}
        >
          {t("home.blueText")}
        </p>
      </div>
    </>
  )
}

export default IndexPage
