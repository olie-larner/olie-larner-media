import React, { useState, useEffect } from "react"
import classnames from "classnames"

const IntroSection = loading => {
  const [pageLoading, setLoading] = useState(true)
  useEffect(() => {
    if (!loading.loading) {
      setTimeout(() => {
        setLoading(false)
      }, 4000)
    }
  }, [pageLoading])
  const i = 0
  return (
    <div className="flex w-full h-screen bg-center bg-cover bg-invertfaith">
      <div className="flex items-center w-11/12 mx-auto">
        <div className="relative mt-[250px] lg:mt-0 w-[350px] md:w-[505px] ml-auto">
          <h1 className="absolute right-0 text-right text-gray-800 top-12 text-5xl md:text-7xl font-playfair">
            Digital Creative
            <br /> Output
          </h1>
          <div
            className={classnames(
              "absolute transition-all duration-700 top-12 right-0 align-middle bg-gray-800  overflow-hidden h-20 md:h-28 whitespace-nowrap",
              { "w-0": pageLoading },
              { "w-[187px] md:w-[280px]": !pageLoading }
            )}
          >
            <p className="absolute right-0 text-right text-white text-5xl md:text-7xl font-playfair">
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
