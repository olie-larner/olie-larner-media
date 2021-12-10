import React from "react"

import "./Section.css"

const section = ({ flexDirection }) => {
  return (
    <div className="section" style={{ flexDirection: flexDirection }}>
      <div className="container">
        <h1 className="font-arastin_pro text-7xl text-center">
          Under Construction
        </h1>
      </div>
    </div>
  )
}

export default section
