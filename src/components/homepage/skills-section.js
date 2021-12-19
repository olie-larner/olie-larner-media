import React, { useState } from "react"
import classNames from "classnames"
import Fade from "react-reveal/Fade"

const SkillsSection = data => {
  return (
    <>
      {data.skillSet.map((skill, key) => {
        return (
          <div id="skills-section" className="w-full py-32 bg-white" key={key}>
            <div className="w-11/12 mx-auto">
              <div id="trigger" />

              <div className="w-full">
                <Fade bottom delay={300}>
                  <h3
                    className={classNames(
                      "text-7xl 2xl:text-9xl pb-10 cursor-pointer text-gray-800 font-playfair font-bold transition-transform duration-700 delay-200"
                    )}
                  >
                    {skill.skillSetTitle}
                  </h3>
                </Fade>
                <Fade bottom delay={1000} cascade>
                  <div className="flex flex-row flex-wrap w-full">
                    {skill.skillSetLogos &&
                      skill.skillSetLogos.map((icon, key) => {
                        return (
                          <div
                            key={key}
                            className="flex justify-center w-1/4 my-7"
                          >
                            <img
                              src={icon.skillLogo.sourceUrl}
                              alt={icon.skillLogo.altText}
                              key={key}
                              className="h-[150px] w-[150px] hover:scale-105 transition-all duration-200"
                            />
                          </div>
                        )
                      })}
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default SkillsSection
