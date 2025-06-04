import React from 'react'
import { WavyBackground } from "./ui/wavy-background";
import { TextHoverEffect } from "./ui/text-hover-effect";

const Hero = () => {
  return (
    <div>
        <WavyBackground className="max-w-4xl mx-auto pb-40" backgroundFill='#171717'>
            <TextHoverEffect text="William Chow"/>
            <p className="text-base md:text-xl mt-4 text-white font-normal inter-var text-center">
                Fifth-year computer science student at the University of British Columbia.
            </p>
        </WavyBackground>
    </div>
  )
}

export default Hero