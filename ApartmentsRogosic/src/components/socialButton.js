import React from "react"
import Image from "../components/image"

const Button = ({ color, text, icon, link }) => {
  return (
    <div
      style={{
        width: "200px",
        display: "grid",
        gridTemplateColumns: "1fr 3fr",
        border: "1px solid",
        borderColor: color, //props
        margin: "20px 0",
        borderRadius: "2px",
      }}
    >
      <div
        style={{
          width: "40px",
          padding: "5px",
          display: "block",
          margin: "0 auto",
        }}
      >
        {/* props */}
        <Image filename={icon} />
      </div>
      <div
        style={{
          backgroundColor: color, //props
          textAlign: "center",
          verticalAlign: "middle",
          lineHeight: "37px",
        }}
      >
        <a
          style={{
            textDecoration: "none",
            color: "white",
            fontSize: "16px",
            fontWeight: "bold",
          }}
          // props
          href={link}
        >
          {/* props */}
          {text}
        </a>
      </div>
    </div>
  )
}

export default Button
