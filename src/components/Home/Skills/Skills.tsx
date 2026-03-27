'use client'

import React from 'react'
import SkillCard from './SkillCard'
import { skillsData } from '@/constant/skills'

const Skills = () => {
  return (
	<section className='text-black pt-20 pb-20'>
		<div className='w-[90%] sm:w-[70%] mx-auto'>
			<h1 className='text-3xl sm:text-4xl font-bold text-black'>
				Skills
			</h1>
			{/* Software */}
			<div className='mt-14'>
				<h2 className='text-xl font-semibold mb-6 text-black'>Software</h2>
				<div className='flex flex-wrap gap-6'>
					{skillsData.software.map((skill) => (
						<SkillCard key={skill.name} name={skill.name} Icon={skill.icon} />
					))}
				</div>
			</div>

			{/* Programming */}
			<div className='mt-14'>
				<h2 className='text-xl font-semibold mb-6 text-black'>Programming</h2>
				<div className='flex flex-wrap gap-6'>
					{skillsData.programming.map((p) => (
						<SkillCard key={p.name} name={p.name} Icon={p.icon} />
					))}
				</div>
			</div>

			{/* Soft Skills */}
			<div className='mt-14'>
				<h2 className='text-xl font-semibold mb-6 text-black'>Soft Skills</h2>
				<div className='flex flex-wrap gap-6'>
					{skillsData.soft.map((s) => (
						<span key={s} className='px-4 py-2 bg-black/20 rounded-full text-sm'>
							{s}
						</span>
					))}
				</div>
			</div>

			{/* Languages */}
			<div className='mt-14'>
				<h2 className='text-xl font-semibold mb-6 text-black'>Languages</h2>
				<div className='flex flex-wrap gap-6'>
					{skillsData.languages.map((l) => (
						<span key={l} className='px-4 py-2 bg-black/20 rounded-full text-sm'>
							{l}
						</span>
					))}
				</div>
			</div>
		</div>			
	</section>
  )
}

export default Skills