import React, { useState, useEffect } from "react"
import { Sling as Hamburger } from "hamburger-react"

import Menu from "./Menu/menu"

const Header = title => {
  const [isOpen, setOpen] = useState(false)
  const [buttonColor, setButtonColor] = useState("#1f2937")

  useEffect(() => {
    if (isOpen) {
      setButtonColor("#FFFFFF")
    } else {
      setButtonColor("#1f2937")
    }
  }, [isOpen])

  return (
    <div className="h-20 flex items-center">
      <h1 className="font-arastin_pro w-11/12 text-4xl mx-auto text-gray-800">
        {title.title}
      </h1>
      <div className="ml-auto mr-5 z-50">
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          duration={1}
          color={buttonColor}
        />
      </div>
      <Menu isOpen={isOpen} />
    </div>
  )
}

export default Header
