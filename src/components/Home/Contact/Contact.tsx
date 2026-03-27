import React from 'react'
import { BiPhone, BiEnvelope, BiMap } from 'react-icons/bi'
import { FaFacebook, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa'

const Contact = () => {
  return (
	<div className='pt-16 pb-16'>
		<div className='w-[90%] md:w-[80%] lg:w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
			{/* Text Content */}
			<div>
				<h1 className='text-3xl sm:text-4xl font-bold text-black'>Contact</h1>

				{/* Contact Info */}
				<div className='mt-7'>
					<div className='flex items-center space-x-3 mb-4'>
						<BiPhone className='w-9 h-9 text-center text-black' />
						<a href='tel:+84329200769' className='text-lg text-black hover:underline'>
							+84 329 200 769
						</a>
					</div>
					<div className='flex items-center space-x-3 mb-4'>
						<BiEnvelope className='w-9 h-9 text-center text-black' />
						<a href='mailto:anhtuantran170205@gmail.com' className='text-black hover:underline'>
							anhtuantran170205@gmail.com
						</a>
					</div>
					<div className='flex items-center space-x-3 mb-4'>
						<BiMap className='w-9 h-9 text-center text-black' />
						<p className='text-black'>
							Dien Hong Ward, Ho Chi Minh City
						</p>
					</div>
				</div>
				{/* Divider */}
				<div className='border-t pt-6 flex gap-4'>
					
					{/* Facebook */}
					<a 
						href='https://www.facebook.com/anhtuan.traanf/' 
						className='w-12 h-12 flex items-center justify-center bg-black text-white rounded-full hover:bg-blue-800 transition'
						>
						<FaFacebook />
					</a>

					{/* Instagram */}
					<a 
						href='https://www.instagram.com/anhtuan.traanf/' 
						className='w-12 h-12 flex items-center justify-center bg-black text-white rounded-full hover:bg-pink-600 transition'
						>
						<FaInstagram />
					</a>

					{/* LinkedIn */}
					<a 
						href='https://www.linkedin.com/in/anhtuantraanf/' 
						className='w-12 h-12 flex items-center justify-center bg-black text-white rounded-full hover:bg-blue-500 transition'
						>
						<FaLinkedinIn />
					</a>

					{/* GitHub */}
					<a 
						href='https://github.com/anhtuan170205' 
						className='w-12 h-12 flex items-center justify-center bg-black text-white rounded-full hover:bg-gray-700 transition'
						>
						<FaGithub />
					</a>
				</div>
			</div>
		</div>
	</div>
  )
}

export default Contact