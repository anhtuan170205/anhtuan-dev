import React from 'react'
import EducationCard from './EducationCard'
import { FaGraduationCap } from 'react-icons/fa'

const Education = () => {
  return (
	<div className='pt-20 pb-16'>
		<div className='w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 gap-10'>
			{/* Education Card */}
			<div>
				<h1 className='text-3xl sm:text-4xl font-bold text-black'>Education</h1>
				<div className='mt-10' data-aos='zoom-in' data-aos-anchor-placement='top-center'>
					<EducationCard 
						name="Ho Chi Minh University of Technology - HCMUT"
						major="Computer Science"
						title="Bachelor"
						logo="/hcmut-logo.png"
						date="Sep 2023 - present"
						gpa="3.1/4.0"
					/>
					<EducationCard 
						name="OTH Regensburg"
						major="Technical Computer Science"
						title="Exchange Student"
						logo="/oth-logo.jpg"
						date="Sep 2025 - Feb 2026"
						gpa="2.3/1.0"
					/>
				</div>
			</div>
		</div>
	</div>
  )
}

export default Education