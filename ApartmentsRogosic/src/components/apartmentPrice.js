import React from "react"
import style from "../styles/table.module.css"

const Price = ({ price }) => {
  return (
    <table id={style.tablePrice}>
      <tr>
        <th>Razdoblje</th>
        <th>Datum</th>
        <th>Cijena</th>
      </tr>
      <tr>
        <td>Van sezone</td>
        <td>01.01.2020 - 31.05.2020</td>
        <td>{price[0]}</td>
      </tr>
      <tr>
        <td>Niska sezona</td>
        <td>01.06.2020 - 30.06.2020</td>
        <td>{price[1]}</td>
      </tr>
      <tr>
        <td>Visoka sezona</td>
        <td>01.07.2020 - 31.08.2020</td>
        <td>{price[2]}</td>
      </tr>
      <tr>
        <td>Van sezone</td>
        <td>01.09.2020 - 30.09.2020</td>
        <td>{price[3]}</td>
      </tr>
      <tr>
        <td>Van sezone</td>
        <td>01.10.2020 - 31.12.2020</td>
        <td>{price[4]}</td>
      </tr>
    </table>
  )
}

export default Price
