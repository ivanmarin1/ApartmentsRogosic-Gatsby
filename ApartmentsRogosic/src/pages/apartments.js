import React from "react"
import { graphql } from "gatsby"
import TitleBar from "../components/titleBar"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "../styles/layout.module.css"
import ApartmentInfo from "../components/apartmentInfo"
import style from "../styles/apartments.module.css"
// import Search from "../components/searchContainer"

const ApartmentsPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  return (
    <Layout>
      <div className={styles.mainContainer}>
        <SEO title="Apartments" />
        <TitleBar>
          <h3>APARTMANI</h3>
        </TitleBar>
        <div>
          <p>
            Istražite naše apartmane i pronađite smještaj koji odgovara vašim
            potrebama. <br />
            Ukoliko nađete željeni apartman, slobodno rezervirajte, a mi ćemo
            vam odgovoriti u što kraćem roku :)
          </p>
        </div>
        {/* <Search apartment={edges}></Search> */}
        {/* <Apartments apartment={edges}></Apartments> */}
      </div>
    </Layout>
  )
}

export default ApartmentsPage

export class Apartments extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ActiveApart: this.props.apartment[0],
      active: "first",
    }
    this._onButtonClick = this._onButtonClick.bind(this)
    this.addActiveClass = this.addActiveClass.bind(this)
  }

  _onButtonClick(value) {
    this.setState({
      ActiveApart: this.props.apartment[value],
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
    return (
      <div className={style.apartments}>
        <div>
          <ul>
            <button
              className={`${style.button} ${
                this.state.active === "first" ? style.active : ""
              }`}
              id="first"
              onClick={e => {
                this.addActiveClass(e)
                this._onButtonClick("0")
              }}
            >
              Apartman 1
            </button>
            <button
              className={`${style.button} ${
                this.state.active === "second" ? style.active : ""
              }`}
              id="second"
              onClick={e => {
                this.addActiveClass(e)
                this._onButtonClick("1")
              }}
            >
              Apartman 2
            </button>
            <button
              className={`${style.button} ${
                this.state.active === "third" ? style.active : ""
              }`}
              id="third"
              onClick={e => {
                this.addActiveClass(e)
                this._onButtonClick("2")
              }}
            >
              Apartman 3
            </button>
            <button
              className={`${style.button} ${
                this.state.active === "fourth" ? style.active : ""
              }`}
              id="fourth"
              onClick={e => {
                this.addActiveClass(e)
                this._onButtonClick("3")
              }}
            >
              Apartman 4
            </button>
            <button
              className={`${style.button} ${
                this.state.active === "fiveth" ? style.active : ""
              }`}
              id="fiveth"
              onClick={e => {
                this.addActiveClass(e)
                this._onButtonClick("4")
              }}
            >
              Apartman 5
            </button>
          </ul>
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
      sort: { order: ASC, fields: [frontmatter___path] }
      filter: { frontmatter: { category: { eq: "Apartments" } } }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 3000)
          frontmatter {
            path
            title
            imagePath
          }
          html
        }
      }
    }
  }
`
