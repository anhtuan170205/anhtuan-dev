'use client'
import React from 'react'
import { IconType } from 'react-icons'
import Tilt from 'react-parallax-tilt'

type Props = {
	name: string,
	Icon: IconType
}

const SkillCard = ({ name, Icon }: Props) => {
  return (
	<Tilt scale={1.1} transitionSpeed={400}>
		<div className='bg-white w-36 h-36 rounded-2xl flex flex-col items-center justify-center shadow-lg hover:scale-105 transition'>
			<Icon className='text-4xl text-black' />
			<p className='mt-2 text-sm text-black'>{name}</p>
		</div>
	</Tilt>
  )
}

export default SkillCard