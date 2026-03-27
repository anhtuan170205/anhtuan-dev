export const projectsData = [
	{
		image: '/projects/backtothrone.png',
		title: 'Back To Throne',
		description:
			'3D endless runner game built in Unity with modular architecture.',
		techStack: ['Unity', 'C#'],
		highlights: [
			'Designed a modular game architecture using finite state machines to manage player behavior and transitions',
			'Built an event-driven system to decouple gameplay, UI, and core managers, improving scalability',
			'Optimized runtime performance using object pooling, reducing instantiation overhead',
			'Implemented a data-driven upgrade system using ScriptableObjects for flexible game balancing',
		],
		repo: 'https://github.com/anhtuan170205/BackToThrone.git',
		demo: 'https://youtu.be/fKqodS0EmkA',
	},
	{
		image: '/projects/dumbjumper.png',
		title: 'Dumb Jumper',
		description:
			'2D platformer game built in Unity with gameplay.',
		techStack: ['Unity', 'C#'],
		highlights: [
			'Developed a state-driven game flow handling menu, gameplay, and transitions.',
			'Implemented a grappling hook mechanic using Rigidbody physics and custom force handling',
			'Created custom Unity Editor tools to accelerate development workflow',
			'Integrated physics-based interactions and input system for responsive gameplay'
		],
		repo: 'https://github.com/anhtuan170205/DumbJumper.git',
		demo: 'https://youtu.be/3K3GBHd4Yb4',
	},
	{
		image: '/projects/tuna-lang.png',
		title: 'tuna-lang',
		description:
			'A simplified interpreted programming language built in C with Flex/Bison.',
		techStack: ['C', 'Flex', 'Bison'],
		highlights: [
			'Built a custom interpreted language in C using Flex/Bison from lexer to parser to execution',
			'Implemented AST-based evaluation for expressions, control flow, and full programs',
			'Designed a scoped environment for variable binding and runtime state management',
			'Tested the language with non-trivial programs such as Game of Life and Blackjack',
		],
		repo: 'https://github.com/anhtuan170205/tuna-lang.git',
		demo: '#',
  	},
	{
		image: '/projects/anhtuan-dev.png',
		title: 'anhtuan-dev',
		description:
			'A personal portfolio responsive website built with modern frontend tools.',
		techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
		highlights: [
			'Built a responsive multi-section portfolio website with reusable React components',
			'Organized content using modular data files for skills, projects, and education',
			'Implemented clean UI sections for project showcase, technical skills, and academic background',
			'Used Tailwind CSS to create a consistent and responsive design across screen sizes',
		],
		repo: 'https://github.com/anhtuan170205/anhtuan-dev.git',
		demo: 'https://anhtuan-dev.vercel.app/',
	},
]