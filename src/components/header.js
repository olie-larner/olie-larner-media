import React, { useState, useEffect } from "react"
import { Sling as Hamburger } from "hamburger-react"

import Menu from "./Menu/menu"

const Header = title => {
  const [isOpen, setOpen] = useState(false)
  const [buttonColor, setButtonColor] = useState("#1f2937")

  useEffect(() => {
    if (isOpen) {
      setButtonColor("#FFFFFF")
    } else if (window.scrollY < 300) {
      setButtonColor("#FFFFFF")
    } else {
      setButtonColor("#1f2937")
    }
  }, [isOpen])

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setButtonColor("#1f2937")
      } else {
        setButtonColor("#FFFFFF")
      }
    })
  }, [])

  return (
    <div className="absolute flex items-center w-full h-20">
      <h1
        className="w-11/12 mx-auto text-2xl z-10 font-arastin_std transition-all"
        style={{ color: buttonColor }}
      >
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
