import React from "react"
import SEO from "../components/seo"
import TitleBar from "../components/titleBar"
import Image from "../components/image"
import SplitScreen from "../components/splitScreen"
import styles from "../styles/layout.module.css"
import { useTranslation } from "react-i18next"
import TextSplitter from "../components/textSplitter"

const About = () => {
  const { t } = useTranslation()
  return (
    <>
      <div className={styles.mainContainer}>
        <SEO title={t("about.subtitle")} />
        <SplitScreen>
          <div>
            <TitleBar>
              <h3>{t("about.subtitle")}</h3>
            </TitleBar>
            <div>
              <p>
                <TextSplitter text={t("about.text")} />
              </p>
            </div>
          </div>
          <div style={{ marginBottom: "20px" }}>
            <Image filename="house-main.jpg" alt="baska_plaza"></Image>
          </div>
        </SplitScreen>
      </div>
    </>
  )
}

export default About
