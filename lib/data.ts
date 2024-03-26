import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
	{
		name: "Home",
		hash: "#home",
	},
	{
		name: "About",
		hash: "#about",
	},
	{
		name: "Projects",
		hash: "#projects",
	},
	{
		name: "Skills",
		hash: "#skills",
	},
	{
		name: "Experience",
		hash: "#experience",
	},
	{
		name: "Contact",
		hash: "#contact",
	},
] as const;

export const experiencesData = [
	{
		title: "Front-End Developer",
		location: "Warsaw",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat at justo vel faucibus.",
		icon: React.createElement(FaReact),
		date: "2021 - present",
	},
	{
		title: "Front-End Developer",
		location: "Warsaw",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat at justo vel faucibus.",
		icon: React.createElement(CgWorkAlt),
		date: "2019 - 2021",
	},
	{
		title: "Front-End Developer",
		location: "Warsaw",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat at justo vel faucibus.",
		icon: React.createElement(LuGraduationCap),
		date: "2019",
	},
] as const;

export const projectsData = [
	{
		title: "Word Analytics",
		description:
			"A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
		tags: ["HTML", "CSS", "JS", "BEM"],
		imageUrl: wordanalyticsImg,
		link: "https://word-analytics-five.vercel.app",
	},

	{
		title: "CorpComment",
		description:
			"A feedback application allowing public feedback to companies. Posts are saved on the server (they are removed after 30 minutes).",
		tags: ["HTML", "CSS", "JS", "BEM", "MongoDB"],
		imageUrl: corpcommentImg,
		link: "https://rr-feedback-app.vercel.app",
	},
	{
		title: "rmtDev",
		description:
			"Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
		tags: ["HTML", "CSS", "JS", "BEM", "MongoDB", "webpack", "Babel"],
		imageUrl: rmtdevImg,
		link: "https://rr-it-market-tau.vercel.app",
	},
	{
		title: "Word Analytics",
		description:
			"A public web app coded using react for quick analytics on text. It shows word count, character count and social media post limits.",
		tags: ["React", "CSS", "JS", "BEM", "Vite"],
		imageUrl: wordanalyticsImg,
		link: "https://react-word-analytics.vercel.app/",
	},
] as const;

export const skillsData = [
	"HTML",
	"CSS",
	"SCSS",
	"JavaScript",
	"TypeScript",
	"React",
	"Next.js",
	"Node.js",
	"Git",
	"Tailwind",
	"Prisma",
	"Redux",
	"SQL",
	"Framer Motion",
	"Cypress",
	"Selenium",
] as const;
