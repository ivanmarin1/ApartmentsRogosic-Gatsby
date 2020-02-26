import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"
import SlideSync from "./slideSync"
import style from "../styles/apartments.module.css"

const ApartmentInfo = ({ apartment }) => (
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

      if (apartment.frontmatter.title === "Apartment 1") aImg = a1Img
      if (apartment.frontmatter.title === "Apartment 2") aImg = a2Img
      if (apartment.frontmatter.title === "Apartment 3") aImg = a3Img
      if (apartment.frontmatter.title === "Apartment 4") aImg = a4Img
      if (apartment.frontmatter.title === "Apartment 5") aImg = a5Img

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
          <Link to="/reservation/">
            <button className={style.button}>REZERVIRAJ</button>
          </Link>
        </div>
      )
    }}
  />
)
export default ApartmentInfo
