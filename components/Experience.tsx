"use client"
import { languages, technologies, workExperience } from '@/data'
import React from 'react'
import { Button } from './ui/MovingBorders'
import { IconCloud } from './ui/IconCloud'

const Experience = () => {
  return (
    <div className='py-20' id="work">
        <h1 className='heading'>
            My 
            <span className='text-purple-300'> work experience</span>
        </h1>
        <div className='w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10'>
            {
                workExperience.map((card) => (
                    <Button
                        key={card.id}
                        duration={Math.floor(Math.random() * 7500) + 7500}
                        borderRadius='1.75rem'
                        className='flex-1 text-white border-neutral-200 dark:border-slate-800'
                    >
                        <div className='flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2'>
                            <div className='lg:ms-5'>
                                <h1 className='text-start text-xl md:text-2xl font-bold'>
                                    {card.title}
                                </h1>
                                <p className='text-start text-white-100 mt-3 font-semibold'>
                                    {card.desc}
                                </p>
                            </div>
                        </div>
                    </Button>
                ))
            }
        </div>
        <div className='grid md:grid-cols-2 grid-cols-1 mt-12'>
            <div className='flex flex-col lg:items-center'>
                <IconCloud images={languages}/>
            </div>
            <div className='flex flex-col lg:items-center'>
                <IconCloud images={technologies}/>
            </div>
        </div>
    </div>
  )
}

export default Experience