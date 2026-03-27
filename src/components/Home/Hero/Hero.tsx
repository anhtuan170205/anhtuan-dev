'use client'
import React from 'react'
import ParticlesHero from './ParticleBackground'
import Typewriter from 'typewriter-effect'
import { BsArrowRight } from 'react-icons/bs'

const Hero = () => {
  return (
    <div className='relative h-screen flex flex-col items-center justify-center overflow-hidden bg-white text-black'>
      <div className='absolute inset-0 z-0'>
        <ParticlesHero />
      </div>

      <div className='relative z-10 flex flex-col items-center px-4'>
        <h1
          data-aos='fade-up'
          data-aos-delay='200'
          className='text-2xl sm:text-4xl md:text-5xl lg:text-6xl mt-6 text-center font-bold tracking-wide'
        >
          Creating game 
		<br/>& software products
        </h1>

        <h2
          data-aos='fade-up'
          data-aos-delay='400'
          className='mt-5 text-sm px-2 text-center sm:text-2xl font-medium flex items-center flex-wrap justify-center'
        >
          Hi! I&apos;m <span className='ml-3 text-black font-bold'>Anh Tuan Tran </span> - A Passionate
          <span className='text-gray-400 font-bold ml-2'>
            <Typewriter
              options={{
                strings: ['Game Developer', 'Software Engineer'],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
              }}
            />
          </span>
        </h2>

        <button
          data-aos='fade-up'
          data-aos-delay='600'
          className='mt-6 px-10 py-4 bg-black text-white hover:bg-gray-600 transition-all duration-300 cursor-pointer rounded-full text-lg font-medium'
        >
          <span onClick={() => document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' })}>
            Start here
          </span>
          <BsArrowRight className='w-5 h-5 ml-2 inline-block' />
        </button>
      </div>
    </div>
  )
}

export default Hero