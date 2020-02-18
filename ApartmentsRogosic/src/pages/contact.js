import React from "react"
import SplitScreen from "../components/splitScreen"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TitleBar from "../components/titleBar"
import Image from "../components/image"
// import GoogleMaps from "../components/gMaps"
import styles from "../styles/layout.module.css"

const ContactPage = () => (
  <Layout>
    <div className={styles.mainContainer}>
      <SEO title="Contact" />
      <SplitScreen>
        <div>
          <TitleBar>
            <h3>KONTAKT</h3>
          </TitleBar>
          <p>Ime prezime: Mirna Jurjević-Škopinić</p>
          <p> Email: mirna12345@gmail.com</p>
          <p>Broj mobitela: 099/198-0646</p>
          <p> Adresa: Baška 5, 21320 Baška Voda</p>
        </div>
        <div>
          <Image filename="house-main" alt="Main house"></Image>
        </div>
      </SplitScreen>
      <div style={{ marginBottom: "20px" }}>
        <h2>Naša lokacija na karti:</h2>
        {/* <GoogleMaps latitude="43.356959" longitude="16.952332"></GoogleMaps> */}
      </div>
    </div>
  </Layout>
)

export default ContactPage
