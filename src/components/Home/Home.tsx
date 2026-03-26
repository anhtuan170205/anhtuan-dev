'use client'
import React, { useEffect } from 'react'
import AOS, { init } from 'aos'
import 'aot/dist/aos.css'

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
      
    </div>
  )
}

export default Home