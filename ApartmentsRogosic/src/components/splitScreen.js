import React from "react"

const splitScreen = props => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gridColumnGap: "2em",
      }}
    >
      {props.children}
    </div>
  )
}

export default splitScreen
