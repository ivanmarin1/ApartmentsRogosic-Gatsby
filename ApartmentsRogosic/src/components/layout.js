import React from "react"
import Navigation from "./navigation"
import NavigationMobile from "./navigationMobile"
import Header from "./header"
import Footer from "./footer"
import styles from "../styles/layout.module.css"
import { withTrans } from "../i18n/withTrans"
import { useTranslation } from "react-i18next"

const Layout = ({ children }) => {
  const screenHeight =
    typeof window !== "undefined" && window.screen.availHeight
  const style = { minHeight: screenHeight, position: "relative" }
  const { t } = useTranslation()
  const menuItems = [
    {
      text: t("menuItems.first"),
      link: "/",
      number: "one",
      iconName: "home.png",
    },
    {
      text: t("menuItems.second"),
      link: "/about/",
      number: "two",
      iconName: "aboutus.png",
    },
    {
      text: t("menuItems.third"),
      link: "/apartments2/",
      number: "three",
      iconName: "apartments.png",
    },
    {
      text: t("menuItems.fourth"),
      link: "/reservation/",
      number: "four",
      iconName: "reservation.png",
    },
    {
      text: t("menuItems.fifth"),
      link: "/contact/",
      number: "five",
      iconName: "contact.png",
    },
  ]
  return (
    <div style={style} className={styles.layout}>
      <Header />
      <Navigation menuItems={menuItems} />
      <NavigationMobile menuItems={menuItems} />
      {children}
      <Footer />
    </div>
  )
}

export default withTrans(Layout)
