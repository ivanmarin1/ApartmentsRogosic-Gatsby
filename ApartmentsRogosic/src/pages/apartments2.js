import React from "react"
import { graphql } from "gatsby"
import TitleBar from "../components/titleBar"
import SEO from "../components/seo"
import styles from "../styles/layout.module.css"
import { useTranslation } from "react-i18next"
import PostLink from "../components/post-link"

const Apartments2Page = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const { t, i18n } = useTranslation()
  let lang = i18n.language
  if (lang === undefined) lang = "en"
  const apartmentInitialImage = [
    {
      link: "A1_a(1)",
    },
    {
      link: "A2_a_Terrace (1)",
    },
    {
      link: "A3_Balcony (1)",
    },
    {
      link: "A4_Balcony (1)",
    },
    {
      link: "A5_Balcony (3)",
    },
  ]
  const apartmentList = [
    {
      text: t("apartments.apartment1"),
      number: "first",
      shortName: "A1",
    },
    {
      text: t("apartments.apartment2"),
      number: "second",
      shortName: "A2",
    },
    {
      text: t("apartments.apartment3"),
      number: "third",
      shortName: "A3",
    },
    {
      text: t("apartments.apartment4"),
      number: "fourth",
      shortName: "A4",
    },
    {
      text: t("apartments.apartment5"),
      number: "fifth",
      shortName: "A5",
    },
  ]
  const Apartments = edges
    .filter(edge => edge.node.frontmatter.language === lang)
    .map((edge, index) => {
      return (
        <PostLink
          key={edge.node.id}
          apartment={edge.node}
          image={apartmentInitialImage[index].link}
        />
      )
    })
  return (
    <>
      <div className={styles.mainContainer}>
        <SEO title={t("apartments.subtitle")} />
        <TitleBar>
          <h3>{t("apartments.subtitle")}</h3>
        </TitleBar>
        <div>
          <p>{t("apartments.intro")}</p>
        </div>
        {Apartments}
      </div>
    </>
  )
}

export default Apartments2Page

export const query = graphql`
  {
    allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___title] }
      filter: { frontmatter: { category: { eq: "Apartments" } } }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 3000)
          frontmatter {
            title
            apartment
            language
            path
          }
          html
        }
      }
    }
  }
`
