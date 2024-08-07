import React from "react"
import { Link, graphql } from "gatsby"
import SlideSync from "../components/slideSync"
import style from "../styles/apartments.module.css"
import { useTranslation } from "react-i18next"
import Price from "../components/apartmentPrice"
import Features from "../components/apartmentFeatures"
import layoutStyle from "../styles/layout.module.css"
import TitleBar from "../components/titleBar"
import SEO from "../components/seo"

const A1 = ["165.00 €", "195.00 €"]
const A2 = ["65.00 €", "85.00 €"]
const A3 = ["75.00 €", "95.00 €"]
const A4 = ["75.00 €", "95.00 €"]
const A5 = ["115.00 €", "135.00 €"]

export default function Template({ data }) {
  const { t, i18n } = useTranslation()
  let lang = i18n.language
  let currentPrice = A1
  if (lang === undefined) lang = "en"

  return data.Markdown.edges
    .filter(edge => edge.node.frontmatter.language === lang)
    .map(edge => {
      switch (edge.node.frontmatter.apartment) {
        case "A1":
          currentPrice = A1
          break
        case "A2":
          currentPrice = A2
          break
        case "A3":
          currentPrice = A3
          break
        case "A4":
          currentPrice = A4
          break
        case "A5":
          currentPrice = A5
          break
        default:
          currentPrice = A1
      }
      // console.log("Apartment before: " + edge.node.frontmatter.apartment[1])
      return (
        <>
          <SEO title={edge.node.frontmatter.title} />
          <div className={layoutStyle.mainContainer}>
            <div style={{ textAlign: "left", fontSize: "17px" }}>
              <Link to="/apartments/">&larr; {t("apartments.subtitle")}</Link>
            </div>
            <div style={{ margin: "20px 0" }}>
              <TitleBar>
                <h3 style={{ textTransform: "uppercase" }}>
                  {edge.node.frontmatter.title}
                </h3>
              </TitleBar>
            </div>
            <div className={style.slideshow}>
              <SlideSync apart={data.allFile.edges}></SlideSync>
            </div>
            <div
              className={style.description}
              dangerouslySetInnerHTML={{ __html: edge.node.html }}
            ></div>
            <Features features={edge.node.frontmatter.features} />
            <Price price={currentPrice} />
            <Link
              to="/reservation/"
              state={{ apart: edge.node.frontmatter.apartment[1] }}
            >
              <button className={style.contrastButton}>
                {t("apartments.bookButton")}
              </button>
            </Link>
          </div>
        </>
      )
    })
}

export const pageQuery = graphql`
  query($apartMD: String!, $apartment: String!) {
    allFile(
      filter: { relativeDirectory: { regex: $apartment } }
      sort: { fields: relativePath }
    ) {
      edges {
        node {
          relativePath
          relativeDirectory
          childImageSharp {
            fluid(maxWidth: 3150) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    Markdown: allMarkdownRemark(
      filter: { frontmatter: { apartment: { eq: $apartMD } } }
      sort: { order: ASC, fields: [frontmatter___title] }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            apartment
            language
            features
          }
          html
        }
      }
    }
  }
`
