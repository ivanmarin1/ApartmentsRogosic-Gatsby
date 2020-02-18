import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TitleBar from "../components/titleBar"
import Image from "../components/image"
import SplitScreen from "../components/splitScreen"
import styles from "../styles/layout.module.css"

const SecondPage = () => (
  <Layout>
    <div className={styles.mainContainer}>
      <SEO title="About us" />
      <SplitScreen>
        <div>
          <TitleBar>
            <h3>O NAMA</h3>
          </TitleBar>
          <div>
            <p>
              Zaboravite svakodnevne brige i probleme, opustite se na balkonu
              ili terasi i uživajte u prekrasnom pogledu na more i susjedni otok
              Hvar.
            </p>
            <p>
              Kristalno čisto, azurno plavo more brzo će vas izmamiti iz
              ležaljke i za samo par koraka naći ćete se u beskrajnom
              prostranstvu plavetnila. Uz koncert cvrčaka, ispratite vaš sunčani
              dan ili prošetajte do malog, ali veoma živog, mjesta Milna.
            </p>
            <p>
              U Milni vas čekaju različiti restorani, kafići, pekare, dućani,
              pošta te lučica za brodove ukoliko posjedujete jedan. Predivna
              slika vrijedna posjete je večernji povratak brodova u luku. Tko
              voli aktivniji odmor može puno toga naći u okolici mjesta,
              domaćini će vas rado savjetovati.
            </p>
          </div>
        </div>
        <div style={{ marginBottom: "20px" }}>
          <Image filename="baska-voda-plaza.jpg" alt="baska_plaza"></Image>
        </div>
      </SplitScreen>
    </div>
  </Layout>
)

export default SecondPage
