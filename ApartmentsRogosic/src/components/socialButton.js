import React from "react"
import Image from "../components/image"
import style from "../styles/socialButton.module.css"

const Button = ({ color, text, icon, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div
        className={style.button}
        style={{
          borderColor: color, //props
        }}
      >
        <div className={style.icon}>
          <Image filename={icon} />
        </div>
        <div
          className={style.textWrapper}
          style={{
            backgroundColor: color, //props
          }}
        >
          <p className={style.text}>{text}</p>
        </div>
      </div>
    </a>
  )
}

export default Button
