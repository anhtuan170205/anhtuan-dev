import React from 'react'
import Image from 'next/image'

type Props = {
	name: string,
	major: string,
	title: string,
	logo: string,
	date?: string,
	gpa: string
}

const EducationCard = ({name, major, title, logo, date, gpa}: Props) => {
  return (
	<div className='mb-6 w-full'>
		<div className='w-full flex items-start space-x-6 bg-black/20 transition-all duration-300 p-4 sm:p-8 rounded-md'>
			<div className='sm:w-14 sm:h-14 w-10 h-10 bg-white rounded-full flex items-center justify-center flex-col'>
				<Image 
					src={logo}
					alt={name}
					width={40}
					height={40}
					className='object-contain'
				/>
			</div>
			<div className='flex-1 min-w-0'>
				{date && (
					<h1 className='mb-2 sm:px-6 sm:py-1.5 px-4 py-1 rounded-full bg-white text-black w-fit sm:text-lg text-sm font-bold'>{date}</h1>
				)}
				<h1 className='text-black text-lg font-bold'>{name}</h1>
				<h1 className='text-black text-xl sm:text-2xl font-semibold mt-2'>{title}</h1>
				<p className='text-black text-sm sm:text-base pt-3'>{major}</p>
				<p className='text-black text-lg font-bold pt-2'>GPA: {gpa}</p>
			</div>
		</div>
	</div>
  )
}

export default EducationCard