import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"
import SlideSync from "./slideSync"
import style from "../styles/apartments.module.css"
import { useTranslation } from "react-i18next"
import Price from "./apartmentPrice"

const A1Price = ["125.00 €", "155.00 €", "185.00 €", "155.00 €", "125.00 €"]
const A2Price = ["45.00 €", "55.00 €", "75.00 €", "55.00 €", "35.00 €"]
const A3Price = ["45.00 €", "65.00 €", "85.00 €", "65.00 €", "45.00 €"]
const A4Price = ["45.00 €", "65.00 €", "85.00 €", "65.00 €", "45.00 €"]
const A5Price = ["85.00 €", "105.00 €", "125.00 €", "105.00 €", "85.00 €"]

const ApartmentInfo = ({ apartment }) => {
  const { t } = useTranslation()
  return (
    <StaticQuery
      query={graphql`
        {
          site {
            siteMetadata {
              title
            }
          }
          collectionOneImages: allFile(
            filter: { relativeDirectory: { regex: "/Apartments/A1/" } }
          ) {
            edges {
              node {
                relativePath
                name
                dir
                relativeDirectory
                childImageSharp {
                  fluid(maxWidth: 3150) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
          collectionTwoImages: allFile(
            filter: { relativeDirectory: { regex: "/Apartments/A2/" } }
          ) {
            edges {
              node {
                relativePath
                name
                dir
                relativeDirectory
                childImageSharp {
                  fluid(maxWidth: 3150) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
          collectionThreeImages: allFile(
            filter: { relativeDirectory: { regex: "/Apartments/A3/" } }
          ) {
            edges {
              node {
                relativePath
                name
                dir
                relativeDirectory
                childImageSharp {
                  fluid(maxWidth: 3150) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
          collectionFourImages: allFile(
            filter: { relativeDirectory: { regex: "/Apartments/A4/" } }
          ) {
            edges {
              node {
                relativePath
                name
                dir
                relativeDirectory
                childImageSharp {
                  fluid(maxWidth: 3150) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
          collectionFiveImages: allFile(
            filter: { relativeDirectory: { regex: "/Apartments/A5/" } }
          ) {
            edges {
              node {
                relativePath
                name
                dir
                relativeDirectory
                childImageSharp {
                  fluid(maxWidth: 3150) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      `}
      render={data => {
        //displaying correct apartment images because apartment 1 !== apartment[0]

        const a1Img = data.collectionOneImages.edges
        const a2Img = data.collectionTwoImages.edges
        const a3Img = data.collectionThreeImages.edges
        const a4Img = data.collectionFourImages.edges
        const a5Img = data.collectionFiveImages.edges
        var aImg = a1Img
        let currentPrice = A1Price

        if (apartment.frontmatter.title === "Apartment 1") {
          aImg = a1Img
          currentPrice = A1Price
        }
        if (apartment.frontmatter.title === "Apartment 2") {
          aImg = a2Img
          currentPrice = A2Price
        }
        if (apartment.frontmatter.title === "Apartment 3") {
          aImg = a3Img
          currentPrice = A3Price
        }
        if (apartment.frontmatter.title === "Apartment 4") {
          aImg = a4Img
          currentPrice = A4Price
        }
        if (apartment.frontmatter.title === "Apartment 5") {
          aImg = a5Img
          currentPrice = A5Price
        }

        return (
          <div>
            <h2
              style={{
                color: "#7AAEEB",
                textAlign: "center",
              }}
            >
              {apartment.frontmatter.title}
            </h2>
            <div className={style.slideshow}>
              <SlideSync apart={aImg}></SlideSync>
            </div>
            <div
              className={style.description}
              dangerouslySetInnerHTML={{ __html: apartment.html }}
            ></div>
            <Price price={currentPrice} />
            <Link to="/reservation/">
              <button className={style.button}>
                {t("apartments.bookButton")}
              </button>
            </Link>
          </div>
        )
      }}
    />
  )
}
export default ApartmentInfo
