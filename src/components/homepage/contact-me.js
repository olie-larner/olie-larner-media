import React, { useState } from "react"
import Fade from "react-reveal/Fade"

const ContactMe = () => {
  return (
    <div className="w-full py-32">
      <div className="w-10/12 mx-auto flex flex-col justify-center items-center">
        <Fade bottom delay={500}>
          <h3 className="text-7xl font-playfair transition-transform duration-700 delay-200">
            That's about it...
          </h3>

          <p className="font-playfair text-center py-10 text-2xl">
            If you want to get in contact about work, have any crypto tips, or
            just wanna chat, then hit me up on:
          </p>
          <a
            className=" italic text-4xl font-playfair"
            href="mailto:info@olielarner.awsapps.com"
          >
            info@olielarner.awsapps.com<sup>*</sup>
          </a>
          <p className=" text-xs font-playfair pt-8">
            *Don't blame me for the odd looking email address, Amazon are weird.
          </p>
        </Fade>
      </div>
    </div>
  )
}

export default ContactMe
