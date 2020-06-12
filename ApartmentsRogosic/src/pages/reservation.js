import React from "react"
import TitleBar from "../components/titleBar"
import SEO from "../components/seo"
import Form from "../components/form"
import styles from "../styles/layout.module.css"
import { useTranslation } from "react-i18next"

const ReservationPage = ({ location }) => {
  const { t } = useTranslation()
  let activeApartment = 0
  console.log("state: " + location.state)
  if (location.state) {
    activeApartment = location.state.apart
  }
  console.log("apartment: " + activeApartment)

  return (
    <>
      <div className={styles.mainContainer}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <SEO title={t("reservation.subtitle")} />
          <TitleBar>
            <h3>{t("reservation.subtitle")}</h3>
          </TitleBar>
          <div>
            <p>{t("reservation.text")}</p>
          </div>
          <Form id="root" apartment={activeApartment}></Form>
        </div>
      </div>
    </>
  )
}
export default ReservationPage
