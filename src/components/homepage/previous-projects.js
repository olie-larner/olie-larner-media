import React, { useState } from "react"
import { useInView } from "react-hook-inview"
import classNames from "classnames"

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
        "w-full py-20 transition-all duration-1000",
        {
          "bg-white": !isProjVisible,
        },
        {
          "bg-gray-800": isProjVisible,
        }
      )}
    >
      <div className="w-10/12 mx-auto flex">
        <h3
          className={classNames(
            "text-7xl pb-10 font-playfair transition-transform duration-700 delay-200",
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
      </div>
      {previousProjects.previousProjects.map((proj, key) => {
        const projNo = key
        return (
          <div
            key={key}
            className={classNames(
              "w-10/12 mx-auto overflow-hidden relative transition-all duration-1000 flex border-b-2",
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
            <div className="w-full relative py-16 px-7 border-t-[1] border-b-[1]">
              <div className="flex relative font-playfair justify-between italic">
                <div className="flex w-1/5 justify-around items-center">
                  <p
                    className={classNames(
                      "font-playfair italic text-3xl",
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
                    "flex",
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
        )
      })}
    </div>
  )
}

export default PreviousProjects
