import React, { useState, useEffect } from "react"
import classnames from "classnames"

const Menu = menuOpen => {
  const [isOpen, setIsOpen] = useState(menuOpen)

  useEffect(() => {
    setIsOpen(menuOpen)
    console.log(isOpen)
  }, [menuOpen])

  return (
    <div
      className={classnames(
        "overflow-hidden bg-gray-800 font-white fixed text-white flex items-center justify-center transition-all duration-700",
        {
          "w-full h-screen rounded-none top-0 right-0": isOpen.isOpen,
          "w-0 h-0 rounded-full top-5 right-5": !isOpen.isOpen,
        }
      )}
    >
      <ul
        className={classnames("transition-all duration-400 font-playfair", {
          "opacity-100 delay-700": isOpen.isOpen,
          "opacity-0 delay-0": !isOpen.isOpen,
        })}
      >
        <li>Link 1</li>
        <li>Link 2</li>
        <li>Link 3</li>
        <li>Link 4</li>
        <li>Link 5</li>
      </ul>
    </div>
  )
}

export default Menu
