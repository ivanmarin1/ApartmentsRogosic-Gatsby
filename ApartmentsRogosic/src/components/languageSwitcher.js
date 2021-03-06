import React, { useState } from "react"
import Select from "@material-ui/core/Select"
import MenuItem from "@material-ui/core/MenuItem"
import { useTranslation } from "react-i18next"
import hrLogo from "../images/languageIcons/hr.png"
import enLogo from "../images/languageIcons/en.png"
import deLogo from "../images/languageIcons/de.png"
import itLogo from "../images/languageIcons/it.png"

const LanguageMenu = props => {
  const { i18n } = useTranslation()

  const [values, setValues] = useState({
    language: "en",
  })

  function handleChange(event) {
    i18n.changeLanguage(event.target.value)

    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }))
  }

  return (
    <Select
      value={values.language}
      onChange={e => handleChange(e)}
      disableUnderline
      inputProps={{
        name: "language",
      }}
    >
      <MenuItem value={"en"}>
        <img src={enLogo} alt="EN" />
      </MenuItem>
      <MenuItem value={"hr"}>
        <img src={hrLogo} alt="HR" />
      </MenuItem>
      <MenuItem value={"de"}>
        <img src={deLogo} alt="HR" />
      </MenuItem>
      <MenuItem value={"it"}>
        <img src={itLogo} alt="HR" />
      </MenuItem>
    </Select>
  )
}

export default LanguageMenu
