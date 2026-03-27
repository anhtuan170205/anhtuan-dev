'use client'

import React from 'react'
import ProjectCard from './ProjectCard'
import { projectsData } from '@/constant/projectsData'

const Projects = () => {
  return (
	<div className='pt-20 pb-16'>
		<div className='w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 gap-10'>
			
			{/* Title */}
			<div>
				<h1 className='text-3xl sm:text-4xl font-bold text-black'>Projects</h1>

				{/* Project List */}
				<div className='mt-10 grid grid-cols-1 sm:grid-cols-2 lg-grid-cols-3 gap-8'>
					{projectsData.map((project, index) => (
						<ProjectCard 
							key={index}
							image={project.image}
							title={project.title}
							description={project.description}
							techStack={project.techStack}
							highlights={project.highlights}
							repo={project.repo}
							demo={project.demo}
						/>
					))}
				</div>
			</div>
		</div>
	</div>
  )
}

export default Projects