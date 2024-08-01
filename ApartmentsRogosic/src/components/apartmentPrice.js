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
        <td>01.01. - 15.06.</td>
        <td>{price[0]}</td>
      </tr>
      <tr>
        <td>{t("apartments.lowSeason")}</td>
        <td>15.06. - 15.09.</td>
        <td>{price[1]}</td>
      </tr>
      <tr>
        <td>{t("apartments.lowSeason")}</td>
        <td>15.09. - 30.09.</td>
        <td>{price[0]}</td>
      </tr>
    </table>
  )
}

export default Price
