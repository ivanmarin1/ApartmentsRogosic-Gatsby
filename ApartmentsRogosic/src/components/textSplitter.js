import React from "react"

const Splitter = ({ text }) => {
  return text.split("\n").map((item, key) => {
    return (
      <span key={key}>
        {item}
        <br />
      </span>
    )
  })
}

export default Splitter
