import React from "react"
import Navigation from "./navigation"
import NavigationMobile from "./navigationMobile"
import Header from "./header"
import Footer from "./footer"
import styles from "../styles/layout.module.css"
import { StaticQuery, graphql } from "gatsby"

const Layout = props => {
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
          <Header></Header>
          <Navigation menuItems={data.site.siteMetadata.menuItems}></Navigation>
          <NavigationMobile
            menuItems={data.site.siteMetadata.menuItems}
          ></NavigationMobile>
          {props.children}
          <Footer></Footer>
        </div>
      )}
    ></StaticQuery>
  )
}

export default Layout
