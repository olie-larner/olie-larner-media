import React from "react"

const Header = title => {
  return (
    <div className="h-20 flex items-center">
      <h1 className="font-arastin_pro w-11/12 text-4xl mx-auto">
        {title.title}
      </h1>
    </div>
  )
}

export default Header
