import React from 'react'
import { ClipboardWithIcon, Button } from "flowbite-react";
import Link from 'next/link';
import { HiRocketLaunch } from "react-icons/hi2";
import { socials } from '@/data';

const Contact = () => {
  return (
    <footer className='w-full pt-20 pb-10' id='contact'>
        <div className='flex flex-col items-center'>
            <h1 className='heading text-purple-300'>
                Get in touch
            </h1>
            <div className="grid w-full max-w-64">
                <div className="relative mb-3 font-bold">
                    <label htmlFor="npm-install" className="sr-only">
                    Label
                    </label>
                    <input
                    id="npm-install"
                    type="text"
                    className="col-span-6 block w-full rounded-lg border border-white/[0.2] bg-[#090909] p-2.5 text-sm text-white"
                    value="williamchow604@gmail.com"
                    disabled
                    readOnly
                    />
                    <ClipboardWithIcon valueToCopy="williamchow604@gmail.com" className='hover:cursor-pointer'/>
                </div>
                <Button as={Link} href='https://drive.google.com/file/d/1G_jvpuRtlp5l5mpw20qxWIbes7wRerL3/view?usp=sharing' target='_blank'
                    className='cursor-pointer border border-white/[0.2] bg-[#090909] font-bold' outline color=""
                >
                    Resume
                    <HiRocketLaunch className='ml-1'/>
                </Button>
            </div>
        </div>
        <div className='flex mt-5 md:flex-row flex-col justify-between items-center'>
            <div className='flex items-center md:gap-3 gap-6 mb-5'>
                {
                    socials.map((profile) => (
                        <Link key={profile.id} href={profile.link} target='_blank'>
                            <div className='w-10 h-10 cursor-pointer flex justify-center items-center backdropfil
                            backdrop-blur-lg saturate-180 bg-opacity-75 bg-neutral-900 rounded-lg border border-neutral-700'>
                                <img src={profile.img} alt={`${profile.id}`} width={25} height={25} />
                            </div>
                        </Link>
                    ))
                }
            </div>
            <p className='md:text-base text-sm md:font-normal font-light'>Copyright © 2025 William</p>
        </div>
    </footer>
  )
}

export default Contact