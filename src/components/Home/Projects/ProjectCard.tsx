import React from 'react'
import Image from 'next/image'

type Props = {
	image: string
	title: string
	description: string
	techStack: string[]
	highlights: string[]
	repo: string
	demo: string
}

const ProjectCard = ({ image, title, description, techStack, highlights, repo, demo }: Props) => {
  return (
	<div className='bg-black/10 rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition duration-300 h-full flex flex-col'>
		{/* Imamge */}
		<div className='relative w-full h-48'>
			<Image 
				src={image}
				alt={title}
				layout='fill'
				className='object-cover'
			/>
		</div>

		{/* Content */}
		<div className='p-5 flex flex-col flex-grow'>
			{/* Title */}
			<h3 className='text-xl font-semibold text-black mt-2 line-clamp-3'>{title}</h3>

			{/* Description */}
			<p className='text-gray-600 text-sm mt-2 h-1 overflow-hidden text-justify'>{description}</p>

			{/* Tech Stack */}
			<div className='flex flex-wrap gap-2 mt-4'>
				{techStack.map((tech) => (
					<span key={tech} className='px-3 py-1 text-xs bg-black/10 rounded-full'>
						{tech}
					</span>
				))}
			</div>

			{/* Highlight */}
			<ul className='mt-3 text-sm text-gray-600 list-disc list-inside space-y-1 line-clamp-4'>
				{highlights.map((item) => (
					<li key={item}>{item}</li>
				))}
			</ul>

			{/* Links */}
			<div className='flex gap-4 pt-4 mt-auto '>
				<a 
					href={repo} 
					target='_blank' 
					rel='noopener noreferrer'
					className='text-blue-500 hover:text-blue-700 text-sm font-medium'
				>
					Repository
				</a>
				<a 
					href={demo} 
					target='_blank' 
					rel='noopener noreferrer'
					className='text-green-500 hover:text-green-700 text-sm font-medium'
				>
					Demo
				</a>
			</div>
		</div>
	</div>
  )
}

export default ProjectCard