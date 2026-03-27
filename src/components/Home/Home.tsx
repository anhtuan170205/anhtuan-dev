'use client'

import React from 'react'
import Hero from './Hero/Hero'
import Education from './Education/Education'
import Skills from './Skills/Skills'
import Projects from './Projects/Projects'
import Contact from './Contact/Contact'

const Home = () => {
  return (
    <div>
      <section id='home' className='scroll-mt-24'>
        <Hero />
      </section>

      <section id='education' className='scroll-mt-24'>
        <Education />
      </section>

      <section id='skills' className='scroll-mt-24'>
        <Skills />
      </section>

      <section id='projects' className='scroll-mt-24'>
        <Projects />
      </section>

      <section id='contact' className='scroll-mt-24'>
        <Contact />
      </section>
    </div>
  )
}

export default Home