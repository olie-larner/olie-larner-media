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
      setButtonColor("#FFFFFF")
    }
  }, [isOpen])

  return (
    <div className="absolute flex items-center w-full h-20">
      <h1 className="w-11/12 mx-auto text-2xl text-white  font-arastin_std">
        {title.title}
      </h1>
      <div className="z-50 ml-auto mr-5">
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
