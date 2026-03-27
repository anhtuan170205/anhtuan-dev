import {
	SiUnity,
	SiGithub,
	SiLatex,
	SiC,
	SiCplusplus,
	SiPython,
	SiMysql,
} from 'react-icons/si'
import { FaJava, FaRobot, FaCode } from 'react-icons/fa'
import { VscCode } from 'react-icons/vsc'

export const skillsData = {
	software: [
		{ name: 'Unity', icon: SiUnity },
		{ name: 'GitHub', icon: SiGithub },
		{ name: 'LaTeX', icon: SiLatex },
		{ name: 'VSCode', icon: VscCode }
	],
	programming: [
		{ name: 'C#', icon: FaCode },
		{ name: 'C', icon: SiC },
		{ name: 'C++', icon: SiCplusplus },
		{ name: 'Python', icon: SiPython },
		{ name: 'Java', icon: FaJava },
		{ name: 'SQL', icon: SiMysql },
	],
	soft: [
		'Teamwork',
		'Communication',
		'Leadership',
		'Problem-solving',
		'Adaptability',
		'Creativity',
	],
	aitools: [
		'ChatGPT',
		'Code generation',
		'Debugging support'
	],
	languages: [
		'Vietnamese (Native)',
		'English (IELTS 7.0)',
	],
}