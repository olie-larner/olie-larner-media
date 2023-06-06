import React, { useState } from "react"
import { useInView } from "react-hook-inview"
import classNames from "classnames"
import Fade from "react-reveal/Fade"

const PreviousProjects = previousProjects => {
  const [projName, setProjName] = useState(undefined)
  const [isProjVisible, setIsProjVisible] = useState(false)

  const [proj, inView] = useInView({
    onEnter: () => setIsProjVisible(true),
    onLeave: () => setIsProjVisible(false),
    threshold: 0.5,
  })

  const showProj = projNo => {
    setProjName(projNo)
  }

  return (
    <div
      ref={proj}
      className={classNames(
        "w-full pt-20 pb-36 transition-all duration-1000",
        {
          "bg-white": !isProjVisible,
        },
        {
          "bg-gray-800": isProjVisible,
        }
      )}
    >
      <div className="w-10/12 mx-auto flex">
        <Fade bottom delay={300}>
          <h3
            className={classNames(
              "text-7xl pb-16 font-playfair transition-transform duration-700 delay-200",
              {
                "text-gray-800": !isProjVisible,
              },
              {
                "text-white": isProjVisible,
              }
            )}
          >
            Previous Projects
          </h3>
        </Fade>
      </div>
      {previousProjects.previousProjects.map((proj, key) => {
        const projNo = key
        return (
          <a key={key} href={proj.websiteLink} target="_blank">
            <div
              className={classNames(
                "w-10/12 mx-auto overflow-hidden relative transition-all duration-1000 cursor-pointer flex border-b-2",
                {
                  " border-gray-800": !isProjVisible,
                },
                {
                  "border-white": isProjVisible,
                }
              )}
              onMouseEnter={() => showProj(key)}
              onMouseLeave={() => setProjName(undefined)}
            >
              <div
                className={classNames(
                  "absolute top-0 bg-center h-full w-full opacity-0 bg-no-repeat bg-gray-800 bg-cover transition-all duration-500",
                  {
                    "scale-125 opacity-0": projName !== projNo,
                  },
                  {
                    "scale-100 opacity-30": projName === projNo,
                  }
                )}
                style={{
                  backgroundImage: `url(${proj.backgroundImage.sourceUrl})`,
                }}
              />
              <div className="w-full relative py-16 px-0 md:px-7 border-t-[1] border-b-[1]">
                <div className="flex relative font-playfair justify-between italic">
                  <div className="flex w-1/2 lg:w-1/5 justify-between items-center">
                    <p
                      className={classNames(
                        "font-playfair italic text-2xl md:text-3xl",
                        {
                          "text-gray-800": !isProjVisible,
                        },
                        {
                          "text-white": isProjVisible,
                        }
                      )}
                    >
                      {proj.websiteName}
                    </p>
                    <p
                      className={classNames(
                        "font-playfair italic text-sm",
                        {
                          "text-gray-800": !isProjVisible,
                        },
                        {
                          "text-white": isProjVisible,
                        }
                      )}
                    >
                      {proj.year}
                    </p>
                  </div>

                  <div
                    className={classNames(
                      "flex text-right md:text-left text-sm md:text-base",
                      {
                        "text-gray-800": !isProjVisible,
                      },
                      {
                        "text-white": isProjVisible,
                      }
                    )}
                    dangerouslySetInnerHTML={{ __html: proj.workDone }}
                  />
                </div>
              </div>
            </div>
          </a>
        )
      })}
    </div>
  )
}

export default PreviousProjects
