import React from "react"
import { Link, graphql } from "gatsby"
import SlideSync from "../components/slideSync"
import style from "../styles/apartments.module.css"
import { useTranslation } from "react-i18next"
import Price from "../components/apartmentPrice"
import Features from "../components/apartmentFeatures"
import layoutStyle from "../styles/layout.module.css"
import SEO from "../components/seo"

const A1 = ["125.00 €", "155.00 €", "185.00 €", "155.00 €", "125.00 €"]
const A2 = ["45.00 €", "55.00 €", "75.00 €", "55.00 €", "35.00 €"]
const A3 = ["45.00 €", "65.00 €", "85.00 €", "65.00 €", "45.00 €"]
const A4 = ["45.00 €", "65.00 €", "85.00 €", "65.00 €", "45.00 €"]
const A5 = ["85.00 €", "105.00 €", "125.00 €", "105.00 €", "85.00 €"]

const features = [
  "Terasa",
  "Grijanje",
  "Pogled na more",
  "Hladnjak",
  "Internet dostupan",
  "Mikrovalna pećnica",
  "Korištenje roštilja",
  "Kuhinjska pećnica",
  "Parking",
  "Aparat za kavu",
  "Satelitska televizija",
  "Posuđe i pribor za jelo",
  "Klimatizirano",
  "Sušilo za kosu",
  "Vez za čamac",
]

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
      return (
        <>
          <SEO title={edge.node.frontmatter.title} />
          <div className={layoutStyle.mainContainer}>
            <div style={{ textAlign: "left", fontSize: "17px" }}>
              <Link to="/apartments/">&larr; {t("apartments.subtitle")}</Link>
            </div>
            <h2
              style={{
                color: "#7AAEEB",
                textAlign: "center",
              }}
            >
              {edge.node.frontmatter.title}
            </h2>
            <div className={style.slideshow}>
              <SlideSync apart={data.allFile.edges}></SlideSync>
            </div>
            <div
              className={style.description}
              dangerouslySetInnerHTML={{ __html: edge.node.html }}
            ></div>
            <Features features={features} />
            <div
              style={{
                maxWidth: "700px",
                backgroundColor: "rgb(236, 243, 251)",
                padding: "15px",
                margin: "60px auto",
              }}
            >
              <h3 style={{ color: "#8b8ed0", textAlign: "left" }}>
                {t("apartments.equipment")}
              </h3>
              <p style={{ fontSize: "15px" }}>
                {t("apartments.equipment-text")}
              </p>
            </div>
            <Price price={currentPrice} />
            <Link to="/reservation/">
              <button className={style.button}>
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
          }
          html
        }
      }
    }
  }
`
