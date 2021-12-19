import React, { useState } from "react"
import Reveal from "react-reveal/Reveal"
import classNames from "classnames"

const Bio = data => {
  const [revealClass, setRevealClass] = useState("scale-x-0")
  const { bioData } = data
  console.log(bioData)
  return (
    <div className="w-full py-32">
      <div className="w-11/12 mx-auto">
        <Reveal
          onReveal={() => {
            setTimeout(() => {
              setRevealClass("scale-x-100")
            }, 800)
          }}
        >
          <h2
            className={`font-playfair text-7xl transition-all ${revealClass}`}
          >
            About
          </h2>
        </Reveal>
        <div dangerouslySetInnerHTML={{ __html: bioData.about }} />
        <div>
          {bioData.images.map((pic, key) => {
            return (
              <div>
                <img
                  src={pic.bioImages.sourceUrl}
                  alt={pic.bioImages.altText}
                />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Bio
