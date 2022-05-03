import emoji from "react-easy-emoji";


export const greetings = {
	name: "Shakhzod Aktamov",
	title: "Hi all, I'm Shakhzod",
	description:
		"A passionate Full Stack Web Developer having an experience of building Web applications with JavaScript / Reactjs / Nodejs / Python / Django.",
	resumeLink: "https://resume.io/r/oFNRuoiZk" 
};

export const openSource = {
	githubUserName: "Shahzod95",
};

export const contact = {};

export const socialLinks = {
	facebook: "https://www.facebook.com/shahzod.aktamov.1/",
	github: "https://github.com/Shahzod95",
	linkedin: "https://www.linkedin.com/in/shahzod-aktamov-31959b207/",
};

export const skillsSection = {
	title: "What I do",
	subTitle:
		"CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
	skills: [
		emoji(
			"⚡ Develop highly interactive Front end / User Interfaces for your web applications"
		),
		emoji(
			"⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"
		),
		emoji(
			"⚡ Integration of technology like Firebase"
		),
	],

	softwareSkills: [
		{
			skillName: "html-5",
			fontAwesomeClassname: "vscode-icons:file-type-html",
		},
		{
			skillName: "css3",
			fontAwesomeClassname: "vscode-icons:file-type-css",
		},
		{
			skillName: "sass",
			fontAwesomeClassname: "logos:sass",
		},
		{
			skillName: "JavaScript",
			fontAwesomeClassname: "logos:javascript",
		},
		{
			skillName: "reactjs",
			fontAwesomeClassname: "vscode-icons:file-type-reactjs",
		},
		{
			skillName: "npm",
			fontAwesomeClassname: "vscode-icons:file-type-npm",
		},
		{
			skillName: "firebase",
			fontAwesomeClassname: "logos:firebase",
		},
		{
			skillName: "python",
			fontAwesomeClassname: "logos:python",
		},
		{
			skillName: "git",
			fontAwesomeClassname: "logos:git-icon",
		},
	],
};

export const SkillBars = [
	{
		Stack: "Frontend/Design", //Insert stack or technology you have experience in
		progressPercentage: "80", //Insert relative proficiency in percentage
	},
	{
		Stack: "Backend",
		progressPercentage: "60",
	},
	{
		Stack: "Programming",
		progressPercentage: "60",
	},
];

export const educationInfo = [
	{
		schoolName: "The Khatirchi agroservice vocational college",
		subHeader: "Agronomy",
		duration: "September 2012 - June 2015",
		desc: "I have been  studying Agronomy ower the years",
		
	},
	{
		schoolName: "Navoi state pedagogical institute",
		subHeader: "Bachelor of Methods of teaching Informatics",
		duration: "September 2017 - June 2021",
		desc: "I studied at the institute in the field of methods of teaching Informatics",
	},
	{
		schoolName: "Navoi state pedagogical institute",
		subHeader: "Bachelor of Information technology in education",
		duration: "September 2021",
		desc: "I am currently studying for a Master’s degree in Information Technology in Education",
	},
];

export const projects = [
	{
		name: "Book store",
		desc: "This is a site that helps you find all the books in the world",
		link: "https://book-store-app.vercel.app/",
	},
	{
		name: "Tasty Food",
		desc: "This is a new looking Tasty Food site",
		github: "https://github.com/Shahzod95/TastyFood",
	},
	{
		name: "DevBook",
		desc: "This is a site that combines the works of Uzbek and world literature",
		github: "https://github.com/Shahzod95/DevBook",
	},
];

export const feedbacks = [
	{
		name: "Mekhriddin Soyibov",
		feedback:
			"We have been very happy with our new website! It looks professional and very easy to navigate. Our experience with the customer service Shakhzod Aktamov has been great. They handle things very efficiently and are available for any questions we have. They also keep us updated on daily reports so we know how our site is doing. I would recommend that u have choose Shakhzod web developer services for u.",
	},
	{
		name: "Bakhtiyor Rakhmonqulov",
		feedback:
			"the website is very nice, everything was perfectly made as i need. it just loads in moments, without giving u the chance to wait. the quality is also very amazing. i am using it without any problem. great job",
	},
];
