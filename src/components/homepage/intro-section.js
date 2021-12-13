import React, { useState, useEffect } from "react"
import classnames from "classnames"

const IntroSection = loading => {
  const [pageLoading, setLoading] = useState(true)
  useEffect(() => {
    if (!loading.loading) {
      setTimeout(() => {
        setLoading(false)
      }, 500)
    }
  }, [pageLoading])
  const i = 0
  return (
    <div className="w-full flex h-screen">
      <div className="w-11/12 mx-auto flex items-center">
        <div className="relative w-full">
          <h1 className="text-9xl text-gray-800 font-playfair text-right">
            Digital Creative
            <br /> Output
          </h1>
          <div
            className={classnames(
              "absolute transition-all duration-700 right-0 top-0 align-middle bg-gray-800  overflow-hidden h-44 whitespace-nowrap",
              { "w-0": pageLoading },
              { "w-6/12": !pageLoading }
            )}
          >
            <p className="text-9xl right-0 absolute text-white font-playfair text-right">
              Digital Creative
              <br /> Output
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IntroSection
