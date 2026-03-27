'use client'
import { NAV_LINKS } from '@/constant/navlinks'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaCode } from 'react-icons/fa'
import { BiDownload } from 'react-icons/bi'
import { HiBars3BottomRight } from 'react-icons/hi2'

type Props = {
    openNav: () => void
}

const Nav = ({ openNav }: Props) => {
    const [navBg, setNavBg] = useState(false)

    useEffect(() => {
        const handler = () => {
            if (window.scrollY > 90) setNavBg(true)
            else setNavBg(false)
        }

        window.addEventListener('scroll', handler)
        return () => window.removeEventListener('scroll', handler)
    }, [])

    return (
        <div className={`transition-all duration-200 h-[12vh] z-[10000] fixed w-full ${navBg ? 'bg-white shadow-md' : 'bg-transparent'}`}>
            <div className='flex items-center h-full justify-between w-[90%] mx-auto'>
                {/* Logo */}
                <div className='flex items-center space-x-2'>
                    <div className='w-10 h-10 bg-white rounded-full flex items-center justify-center flex-col'>
                        <FaCode className='w-5 h-5 text-black' />
                    </div>
                    <h1 className='text-xl hidden sm:block md:text-2xl text-black font-bold'>
                        anhtuan-dev
                    </h1>
                </div>

                {/* Nav Links */}
                <div className='hidden lg:flex items-center space-x-10'>
                    {NAV_LINKS.map((link) => {
                        return (
                            <Link
                                key={link.id}
                                href={link.url}
                                className='text-base hover:text-gray-500 font-medium transition-all duration-200 text-black'
                            >
                                <p>{link.label}</p>
                            </Link>
                        )
                    })}
                </div>

                {/* Button */}
                <div className='flex items-center space-x-4'>
                    {/* CV Button */}
                    <button className='px-8 py-3.5 text-sm cursor-pointer rounded-lg bg-black hover:bg-gray-600 transition-all duration-300 text-white flex items-center space-x-2'>
                        <BiDownload className='w-5 h-5' />
                        <span> Resume </span>
                    </button>

                    {/* Burger Menu */}
                    <HiBars3BottomRight
                        onClick={openNav}
                        className='w-8 h-8 text-black cursor-pointer lg:hidden'
                    />
                </div>
            </div>
        </div>
    )
}

export default Nav