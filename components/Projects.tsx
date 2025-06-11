import { projects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/3d-pin'

const Projects = () => {
  return (
    <div className='py-20' id='projects'>
        <h1 className='heading'>
            Some of my
            <span className='text-purple-300'> favourite projects</span>
        </h1>
        <div className='flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10'>
            {
                projects.map(({ id, title, desc, img, iconLists, link }) => (
                    <div key={id} className='sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]'>
                        <PinContainer title={link} href={link}>
                            <div className='relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10'>
                                <img src={img} alt={title} className='z-10 absolute bottom-0 w-full h-full overflow-hidden lg:rounded-3xl'/>
                            </div>
                            <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>
                                {title}
                            </h1>
                            <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2'>
                                {desc}
                            </p>
                            <div className='flex items-center justify-between mt-7 mb-3'>
                                <div className='flex items-center'>
                                    {
                                        iconLists.map((icon, index) => (
                                            <div 
                                                key={icon} 
                                                className='border border-white/[0.2] rounded-full bg-[#090909] lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center'
                                                style={{transform: `translateX(-${5 * index * 2}px)`}}
                                            >
                                                <img src={icon} alt={icon} className='p-2'/>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </PinContainer>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Projects