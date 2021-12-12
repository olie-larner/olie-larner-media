import React, { useState } from "react"
import { Sling as Hamburger } from "hamburger-react"

import Menu from "./Menu/menu"

const Header = title => {
  const [isOpen, setOpen] = useState(false)
  return (
    <div className="h-20 flex items-center">
      <h1 className="font-arastin_pro w-11/12 text-4xl mx-auto">
        {title.title}
      </h1>
      <div className="ml-auto mr-5">
        <Hamburger toggled={isOpen} toggle={setOpen} duration={1} />
      </div>
      <Menu isOpen={isOpen} />
    </div>
  )
}

export default Header
