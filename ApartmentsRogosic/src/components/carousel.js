import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import React from "react"
import Slider from "react-slick"
import Img from "gatsby-image"
import { graphql, StaticQuery } from "gatsby"
import styles from "../styles/layout.module.css"

const Carousel = () => (
  <StaticQuery
    query={graphql`
      {
        allFile(filter: { relativeDirectory: { regex: "/Slides/" } }) {
          edges {
            node {
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
    render={data => (
      <Slider
        dots={false}
        infinite={true}
        speed={1000}
        slidesToShow={1}
        slidesToScroll={1}
        autoplay={true}
        autoplaySpeed={5000}
        arrows={false}
        className={styles.carousel}
      >
        {data.allFile.edges.map(edge => (
          <div>
            <Img
              className={styles.slideImages}
              fluid={edge.node.childImageSharp.fluid}
            ></Img>
          </div>
        ))}
      </Slider>
    )}
  ></StaticQuery>
)
export default Carousel
