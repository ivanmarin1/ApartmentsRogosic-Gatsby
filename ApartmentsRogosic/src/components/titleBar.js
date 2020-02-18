import React from "react"

const titleBar = props => {
  return (
    <div style={{ backgroundColor: "#7aaeeb", padding: "10px", margin: 0 }}>
      {props.children}
    </div>
  )
}

export default titleBar
