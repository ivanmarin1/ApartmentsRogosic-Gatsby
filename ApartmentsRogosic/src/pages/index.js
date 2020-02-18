import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import TitleBar from "../components/titleBar"
import SplitScreen from "../components/splitScreen"
import Slideshow from "../components/carousel"
import styles from "../styles/layout.module.css"
import apartStyle from "../styles/apartments.module.css"
import { Link } from "gatsby"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Slideshow></Slideshow>
    <div className={styles.mainContainer}>
      <SplitScreen>
        <div>
          <TitleBar>
            <h3>DOBRODOŠLI</h3>
          </TitleBar>
          <div>
            <p>
              U maloj zaštićenoj uvali Osibova, na jugozapadnoj strani otoka
              Brača, uz samo more, nalazi se naša kuća.
            </p>
            <p>
              Istražite naše apartmane i izaberite smještaj koji odgovara vašim
              potrebama.
            </p>
            <p>
              Ukoliko ste spremni rezervirati, slobodno ispunite našu formu te
              rezervirajte vaš odmor :)
            </p>
            <Link to="/reservation/">
              <button className={apartStyle.contrastButton}>REZERVIRAJ</button>
            </Link>
          </div>
        </div>
        <div>
          <Image filename="balcon_view.jpg"></Image>
        </div>
      </SplitScreen>
      <p
        style={{
          textAlign: "center",
          color: "#7AAEEB",
          fontSize: "20px",
          paddingTop: "2%",
        }}
      >
        Radujemo se vašem dolasku i želimo vam ugodan odmor kod nas :)
      </p>
    </div>
  </Layout>
)

export default IndexPage
