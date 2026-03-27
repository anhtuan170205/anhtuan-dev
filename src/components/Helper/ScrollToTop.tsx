'use client'
import React, { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'

const ScrollToTop = () => {

	const [isVisible, setIsVisible] = useState(false)

	useEffect(() => {
		const toggleVisibility = () => {
			if (window.scrollY > 300) setIsVisible(true)
			else setIsVisible(false)
		}

		window.addEventListener('scroll', toggleVisibility)

		return () => window.removeEventListener('scroll', toggleVisibility)
	}, [])

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}

  return (
		<div className='fixed bottom-8 right-8 animate-pulse'>
		{isVisible && (
			<button
			onClick={scrollToTop}
			className='bg-black text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-600 transition-all duration-300'
			>
			<FaArrowUp className='w-6 h-6' />
			</button>
		)}
		</div>
  	)
}

export default ScrollToTop