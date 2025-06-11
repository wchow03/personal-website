'use client'
import React from 'react'
import { WavyBackground } from "./ui/wavy-background";
import SplitText from './ui/SplitText';
import ArrowButton from './ui/ArrowButton';

const Hero = () => {
  return (
    <WavyBackground className="max-w-4xl mx-auto pb-40 flex flex-col px-4" backgroundFill='transparent'>
        <div className='flex-grow max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center text-center'>
            <SplitText 
                text='William Chow'
                className='text-5xl md:text-8xl mb-8 font-bold'
            />
            <SplitText
                text='Fifth-year computer science student at the University of British Columbia.'
                delay={20}
                className='text-md md:text-2xl text-white font-bold inter-var text-right mb-8'
                textAlign='center'
            />
            <a href="#work" className='mx-auto'>
                <ArrowButton text='Explore' className='cursor-pointer mx-auto' borderColor='#dcc2ff' textColor='#dcc2ff' buttonOverlayColor='#9a4dff'/>
            </a>
        </div>
    </WavyBackground>
  )
}

export default Hero