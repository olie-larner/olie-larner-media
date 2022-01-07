import React, { useState } from "react"
import ReactPlayer from "react-player"
import classNames from "classnames"
import Fade from "react-reveal/Fade"

const MusicSection = music => {
  return (
    <div
      className={classNames("w-full pt-20 pb-60 transition-all duration-1000")}
    >
      <div className="w-full min-h-screen">
        <div className=" pt-10 w-10/12 mx-auto">
          <Fade bottom delay={300}>
            <h3 className="text-7xl pb-16 font-playfair transition-transform duration-700 delay-200">
              Latest Mix
            </h3>
          </Fade>
        </div>
        <Fade delay={500}>
          <ReactPlayer
            url={music.music.youtubeMix}
            light={true}
            width="100%"
            height="100vh"
          />
        </Fade>
      </div>
    </div>
  )
}

export default MusicSection
