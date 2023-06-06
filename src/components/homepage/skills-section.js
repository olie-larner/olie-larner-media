import React, { useState } from "react"
import classNames from "classnames"
import Fade from "react-reveal/Fade"

const SkillsSection = data => {
  const [logoName, setLogoName] = useState(undefined)

  const showTitle = logoNo => {
    setLogoName(logoNo)
  }

  return (
    <>
      {data.skillSet.map((skill, key) => {
        return (
          <div id="skills-section" className="w-full py-32 bg-white" key={key}>
            <div className="w-10/12 mx-auto">
              <div id="trigger" />

              <div className="w-full">
                <Fade bottom delay={300}>
                  <h3
                    className={classNames(
                      "text-7xl pb-10 cursor-pointer text-gray-800 font-playfair transition-transform duration-700 delay-200"
                    )}
                  >
                    {skill.skillSetTitle}
                  </h3>
                </Fade>
                <Fade bottom delay={1000} cascade>
                  <div className="flex flex-row flex-wrap w-full">
                    {skill.skillSetLogos &&
                      skill.skillSetLogos.map((icon, key) => {
                        const logoNo = key
                        return (
                          <div
                            key={key}
                            className="flex relative justify-center w-1/3 md:w-1/4 my-7"
                            onMouseEnter={() => showTitle(logoNo)}
                            onMouseLeave={() => setLogoName(undefined)}
                          >
                            <img
                              src={icon.skillLogo.sourceUrl}
                              alt={icon.skillLogo.altText}
                              key={key}
                              className={classNames(
                                "h-[90px] w-[90px] md:h-[150px] md:w-[150px] transition-all duration-200",
                                {
                                  "scale-100 opacity-100": logoName !== logoNo,
                                },
                                {
                                  "scale-105 opacity-30": logoName === logoNo,
                                }
                              )}
                            />
                            <div
                              className={classNames(
                                "absolute font-playfair text-3xl font-bold transition-all duration-800",
                                {
                                  "opacity-0 top-0": logoName !== logoNo,
                                },
                                {
                                  "opacity-100 top-[50px]": logoName === logoNo,
                                }
                              )}
                            >
                              {icon.skillName}
                            </div>
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
