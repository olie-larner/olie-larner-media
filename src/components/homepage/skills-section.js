import React, { useRef } from "react"
import { useInViewport } from "ahooks"
import classNames from "classnames"
import { Controller, Scene } from "react-scrollmagic"
import { Tween, Timeline } from "react-gsap"
import styled, { css } from "styled-components"

const TweenStyled = styled.div`
  .tween {
    background-color: rgba(31, 41, 55, 1);
  }
`

const SkillsSection = () => {
  const myRef = useRef()
  const [inViewport] = useInViewport(myRef)

  return (
    <TweenStyled>
      <Controller>
        <Scene triggerElement="#trigger" duration={1000} offset={1500}>
          {progress => (
            <Tween
              to={{
                backgroundColor: "#FFFFFF",
              }}
              ease="Strong.easeOut"
              totalProgress={progress}
              paused
            >
              <div id="skills-section" className="w-full tween h-[3000px]">
                <div className="w-11/12 h-full mx-auto">
                  <div id="trigger" />
                  <div className="sticky w-4/12 h-40 top-5">
                    <p
                      className={classNames(
                        "text-7xl  2xl:text-9xl cursor-pointer text-white font-playfair font-bold transition-transform duration-700 delay-200 hover:text-yellow-600 hover:delay-0 hover:duration-0",
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
                        "text-7xl  2xl:text-9xl cursor-pointer text-white font-playfair font-bold transition-transform duration-700 delay-300 hover:text-yellow-600 hover:delay-0 hover:duration-0",
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
                        "text-7xl  2xl:text-9xl cursor-pointer text-white font-playfair font-bold transition-transform duration-700 delay-500 hover:text-yellow-600 hover:delay-0 hover:duration-0",
                        {
                          "scale-y-100": inViewport,
                          "scale-y-0": !inViewport,
                        }
                      )}
                      ref={myRef}
                    >
                      Visual
                    </p>
                  </div>
                </div>
              </div>
            </Tween>
          )}
        </Scene>
      </Controller>
    </TweenStyled>
  )
}

export default SkillsSection
