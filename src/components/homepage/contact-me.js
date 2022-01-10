import React, { useState } from "react"
import Fade from "react-reveal/Fade"

const ContactMe = () => {
  return (
    <div className="w-full pb-32">
      <div className="w-10/12 mx-auto flex flex-col items-center">
        <Fade bottom delay={500}>
          <h3 className="text-7xl font-playfair text-center transition-transform duration-700 delay-200">
            That's about it...
          </h3>

          <p className="font-playfair text-center w-11/12 md:w-1/2 py-10 text-xl md:text-2xl">
            If you want to get in contact about work, have any crypto tips, or
            just wanna chat, then hit me up on:
          </p>
          <a
            className=" italic text-2xl md:text-4xl font-playfair"
            href="mailto:info@olielarner.com"
          >
            info@olielarner.com
          </a>
        </Fade>
      </div>
    </div>
  )
}

export default ContactMe
