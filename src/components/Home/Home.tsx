'use client'
import React, { useEffect } from 'react'
import AOS, { init } from 'aos'
import 'aos/dist/aos.css'
import Hero from './Hero/Hero'
import Education from './Education/Education'
import Skills from './Skills/Skills'
import Projects from './Projects/Projects'

const Home = () => {
  useEffect(() => {
    const initAOS = async () => {
      await import('aos')
      AOS.init({
        duration: 1000,
        easing: 'ease',
        once: true,
        anchorPlacement: 'top-bottom',
    })
  }
  initAOS()
}, [])

  return (
    	<div>
			<section id='home' className='scroll-mt-24'>
				<Hero />
			</section>

			<section id='education' className='scroll-mt-24'>
				<Education />
			</section>

			<section id='projects' className='scroll-mt-24'>
				<Skills />
			</section>

			<section id='projects' className='scroll-mt-24'>
				<Projects />
			</section>
		</div>
  )
}

export default Home