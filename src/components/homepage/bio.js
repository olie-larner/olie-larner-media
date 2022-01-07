import React, { useState } from "react"
import Reveal from "react-reveal/Reveal"
import Fade from "react-reveal/Fade"

const Bio = data => {
  const [revealClass, setRevealClass] = useState("scale-y-0")
  const { bioData } = data
  console.log(bioData)
  return (
    <div className="w-full py-32">
      <div className="w-10/12 mx-auto flex">
        <div className="w-1/2 flex flex-col justify-center">
          <Reveal
            onReveal={() => {
              setTimeout(() => {
                setRevealClass("scale-y-100")
              }, 800)
            }}
          >
            <h2
              className={`font-playfair pb-11 text-7xl transition-all ${revealClass}`}
            >
              Hello.
            </h2>
          </Reveal>
          <Fade bottom>
            <div
              className=" w-3/5 font-playfair leading-10 italic text-xl"
              dangerouslySetInnerHTML={{ __html: bioData.about }}
            />
          </Fade>
        </div>

        <div className="w-1/2">
          {bioData.images.map((pic, key) => {
            return (
              <Fade delay={600} key={key}>
                <div
                  className="rounded-full w-full pt-[100%] bg-cover overflow-hidden"
                  style={{
                    backgroundImage: `url(${pic.bioImages.sourceUrl})`,
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
              </Fade>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Bio
