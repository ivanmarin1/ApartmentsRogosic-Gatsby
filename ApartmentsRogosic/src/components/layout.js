import React from "react"
import Navigation from "./navigation"
import NavigationMobile from "./navigationMobile"
import Header from "./header"
import Footer from "./footer"
import styles from "../styles/layout.module.css"
import { StaticQuery, graphql } from "gatsby"
import { withTrans } from "../i18n/withTrans"

const Layout = ({ children, t, i18n }) => {
  const screenHeight =
    typeof window !== "undefined" && window.screen.availHeight
  const style = { minHeight: screenHeight, position: "relative" }
  return (
    <StaticQuery
      query={graphql`
        {
          site {
            siteMetadata {
              title
              menuItems {
                text
                link
                number
                iconName
              }
            }
          }
        }
      `}
      render={data => (
        <div style={style} className={styles.layout}>
          <Header />
          <Navigation menuItems={data.site.siteMetadata.menuItems} />
          <NavigationMobile menuItems={data.site.siteMetadata.menuItems} />
          {children}
          <Footer />
        </div>
      )}
    ></StaticQuery>
  )
}

export default withTrans(Layout)
