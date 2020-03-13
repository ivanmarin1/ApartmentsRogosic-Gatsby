import React from "react"
import { Link, graphql } from "gatsby"
import SlideSync from "../components/slideSync"
import style from "../styles/apartments.module.css"
import { useTranslation } from "react-i18next"
import Price from "../components/apartmentPrice"

const A1 = ["125.00 €", "155.00 €", "185.00 €", "155.00 €", "125.00 €"]
const A2 = ["45.00 €", "55.00 €", "75.00 €", "55.00 €", "35.00 €"]
const A3 = ["45.00 €", "65.00 €", "85.00 €", "65.00 €", "45.00 €"]
const A4 = ["45.00 €", "65.00 €", "85.00 €", "65.00 €", "45.00 €"]
const A5 = ["85.00 €", "105.00 €", "125.00 €", "105.00 €", "85.00 €"]

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
        <div>
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
          <Price price={currentPrice} />
          <Link to="/reservation/">
            <button className={style.button}>
              {t("apartments.bookButton")}
            </button>
          </Link>
        </div>
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
