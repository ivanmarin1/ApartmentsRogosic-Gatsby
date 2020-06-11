import React from "react"
import style from "../styles/table.module.css"
import { useTranslation } from "react-i18next"
import "../i18n/i18n"

const Features = ({ features }) => {
  const { t } = useTranslation()
  return (
    <div className={style.featureList}>
      <h3 style={{ color: "#8b8ed0", textAlign: "left" }}>
        {t("apartments." + "equipment")}
      </h3>
      <ul id={style.featureStyle}>
        {features.map((element, index) => {
          return (
            <li
              key={index}
              style={{
                textAlign: "left",
              }}
            >
              <p
                style={{
                  fontSize: "15px",
                  margin: "0",
                  display: "inline-block",
                }}
              >
                {t("apartments.features." + element)}
              </p>
            </li>
          )
        })}
      </ul>
      <div
        style={{
          maxWidth: "700px",
          backgroundColor: "rgb(236, 243, 251)",
          padding: "15px",
          margin: "60px auto",
        }}
      >
        <p style={{ fontSize: "15px" }}>{t("apartments.equipment-text")}</p>
      </div>
    </div>
  )
}

export default Features
