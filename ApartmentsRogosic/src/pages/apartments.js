import React from "react"
import { graphql } from "gatsby"
import TitleBar from "../components/titleBar"
import SEO from "../components/seo"
import styles from "../styles/layout.module.css"
import ApartmentInfo from "../components/apartmentInfo"
import style from "../styles/apartments.module.css"
import { useTranslation } from "react-i18next"
import i18n from "../i18n/i18n"
import i18next from "i18next"

const ApartmentsPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const { t } = useTranslation()
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
        <Apartments apartment={edges} apartList={apartmentList}></Apartments>
      </div>
    </>
  )
}

export default ApartmentsPage

export class Apartments extends React.Component {
  constructor(props) {
    super(props)
    //case when user changes site with active lang different than en
    if (i18n.language !== undefined) {
      this.state = {
        ActiveApart: this.props.apartment[0],
        active: "first",
        lang: i18n.language,
      }
    }
    //case when user lands on site without changing language
    else {
      this.state = {
        ActiveApart: this.props.apartment[0],
        active: "first",
        lang: "en",
      }
    }
    //changing apartment if its language doesnt match to website lang
    this.props.apartment.map(edge => {
      if (
        edge.node.frontmatter.apartment ===
          this.state.ActiveApart.node.frontmatter.apartment &&
        edge.node.frontmatter.language === this.state.lang
      ) {
        this.state = {
          ActiveApart: edge,
          lang: this.state.lang,
          active: this.state.active,
        }
      }
    })
    this._onButtonClick = this._onButtonClick.bind(this)
    this.addActiveClass = this.addActiveClass.bind(this)
  }

  //function which is called when user changes language
  onChangeLanguageState() {
    //if language is changed and is not defined
    //set new language and set new apartment which corresponds to new language
    if (i18n.language !== undefined && i18n.language !== this.state.lang) {
      this.setState({ lang: i18n.language }, function() {
        this.props.apartment.map(edge => {
          if (
            edge.node.frontmatter.apartment ===
              this.state.ActiveApart.node.frontmatter.apartment &&
            edge.node.frontmatter.language === this.state.lang
          ) {
            this.setState({
              ActiveApart: edge,
            })
          }
        })
      })
    }
  }

  // function which is called from button click
  _onButtonClick(value) {
    //show apartment which corresponds to button value and active language
    this.props.apartment.map(edge => {
      if (
        edge.node.frontmatter.apartment === value &&
        edge.node.frontmatter.language === this.state.lang
      ) {
        this.setState({
          ActiveApart: edge,
        })
      }
    })
  }

  addActiveClass(e) {
    const clicked = e.target.id
    if (this.state.active === clicked) {
      this.setState({ active: "" })
    } else {
      this.setState({ active: clicked })
    }
  }

  render() {
    i18next.on("languageChanged", () => {
      this.onChangeLanguageState()
    })
    const apartmentButtons = this.props.apartList.map(
      ({ text, number, shortName }) => (
        <button
          className={`${style.button} ${
            this.state.active === number ? style.active : ""
          }`}
          id={number}
          onClick={e => {
            this.addActiveClass(e)
            this._onButtonClick(shortName)
          }}
        >
          {text}
        </button>
      )
    )
    return (
      <div className={style.apartments}>
        <div>
          <ul>{apartmentButtons}</ul>
        </div>
        <div className={style.singleApart}>
          <ApartmentInfo
            key={this.state.ActiveApart.node.id}
            apartment={this.state.ActiveApart.node}
          ></ApartmentInfo>
        </div>
      </div>
    )
  }
}

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
          }
          html
        }
      }
    }
  }
`
