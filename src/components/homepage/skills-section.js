import React, { useRef } from "react"
import { useInViewport } from "ahooks"
import classNames from "classnames"

const SkillsSection = () => {
  const myRef = useRef()
  const [inViewport] = useInViewport(myRef)
  return (
    <div id="skills-section" className="w-full" className="flex h-screen p-1">
      <div className={classNames("w-11/12 mx-auto align-middle")}>
        <p
          className={classNames(
            "text-9xl cursor-pointer text-gray-800 font-playfair font-bold transition-transform duration-700 delay-200 hover:text-yellow-600 hover:delay-0 hover:duration-0",
            {
              "scale-y-100": inViewport,
              "scale-y-0": !inViewport,
            }
          )}
          ref={myRef}
        >
          Web
        </p>
        <p
          className={classNames(
            "text-9xl cursor-pointer text-gray-800 font-playfair font-bold transition-transform duration-700 delay-300",
            {
              "scale-y-100": inViewport,
              "scale-y-0": !inViewport,
            }
          )}
          ref={myRef}
        >
          Music
        </p>
        <p
          className={classNames(
            "text-9xl cursor-pointer text-gray-800 font-playfair font-bold transition-transform duration-700 delay-500",
            {
              "scale-y-100": inViewport,
              "scale-y-0": !inViewport,
            }
          )}
          ref={myRef}
        >
          Graphics
        </p>
        <p
          className={classNames(
            "text-9xl cursor-pointer text-gray-800 font-playfair font-bold transition-transform duration-700 delay-700",
            {
              "scale-y-100": inViewport,
              "scale-y-0": !inViewport,
            }
          )}
        >
          Photography
        </p>
      </div>
    </div>
  )
}

export default SkillsSection
