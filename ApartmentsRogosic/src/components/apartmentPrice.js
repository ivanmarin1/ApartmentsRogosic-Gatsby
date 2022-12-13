import React from "react"
import style from "../styles/table.module.css"
import { useTranslation } from "react-i18next"
import "../i18n/i18n"

const Price = ({ price }) => {
  const { t } = useTranslation()
  return (
    <table id={style.tablePrice}>
      <tr>
        <th>{t("apartments.period")}</th>
        <th>{t("apartments.date")}</th>
        <th>{t("apartments.price")}</th>
      </tr>
      <tr>
        <td>{t("apartments.noSeason")}</td>
        <td>01.01. - 31.05.</td>
        <td>{price[0]}</td>
      </tr>
      <tr>
        <td>{t("apartments.lowSeason")}</td>
        <td>01.06. - 30.06.</td>
        <td>{price[1]}</td>
      </tr>
      <tr>
        <td>{t("apartments.highSeason")}</td>
        <td>01.07. - 31.08.</td>
        <td>{price[2]}</td>
      </tr>
      <tr>
        <td>{t("apartments.lowSeason")}</td>
        <td>01.09. - 30.09.</td>
        <td>{price[3]}</td>
      </tr>
      <tr>
        <td>{t("apartments.noSeason")}</td>
        <td>01.10. - 31.12.</td>
        <td>{price[4]}</td>
      </tr>
    </table>
  )
}

export default Price
