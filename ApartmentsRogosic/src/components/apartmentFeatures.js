import React from "react"
import style from "../styles/table.module.css"
import { useTranslation } from "react-i18next"
import "../i18n/i18n"

const Features = ({ features }) => {
  const { t } = useTranslation()
  return (
    <div className={style.featureList}>
      <h3 style={{ color: "#8b8ed0", textAlign: "left" }}>Sadržaji i oprema</h3>
      <ul id={style.features}>
        {features.map((element, index) => {
          return (
            <li
              key={index}
              style={{
                textAlign: "left",
                marginLeft: "60px",
              }}
            >
              <p
                style={{
                  fontSize: "15px",
                  margin: "0",
                  display: "inline-block",
                }}
              >
                {element}
              </p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Features
