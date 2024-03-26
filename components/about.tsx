"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
	const { ref } = useSectionInView("About");

	return (
		<motion.section
			ref={ref}
			className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.175 }}
			id="about">
			<SectionHeading>About me</SectionHeading>
			<p className="mb-3">
				My journey into the world of programming began with a career in Quality
				Assurance, which instilled in me a meticulous attention to detail and a
				knack for precision. However, my relentless pursuit of growth led me to
				immerse myself fully in front-end development, a realm that has
				completely consumed my passion and focus.
			</p>
			<p className="mb-3">
				I embarked on a journey to pursue my passion for programming by
				enrolling in coding courses, where I delved into front-end development.
				The aspect of problem-solving within programming captivates me the most.
				There's a certain satisfaction that comes with finally unraveling a
				challenging issue.
			</p>
			<p className="mb-3">
				My primary stack includes <b>React, Next.js, Node.js</b>, and{" "}
				<b>MongoDB</b>, supplemented by my familiarity with <b>TypeScript</b>{" "}
				and
				<b> Prisma</b> (of course including vanilla languages like <b>HTML</b>,{" "}
				<b>CSS</b>, and <b>JavaScript</b>). I possess an insatiable appetite for
				learning and constantly seek to expand my skill set by exploring new
				technologies.
			</p>

			<p className="mb-3">
				In my spare time, I cherish embarking on adventures with my wife,
				exploring intriguing destinations around the world. Valldemossa and
				Jordan, especially Wadi Rum, hold a special place in my heart. Music
				also holds a special place in my heart, as I enjoy strumming away on my
				guitar. You'll also often find me at the gym or engrossed in gaming
				sessions on my PlayStation. My favorite game, hands down, is Red Dead
				Redemption 2. It's meticulously crafted world and attention to detail by
				the developers truly set it apart.
			</p>
			<p className="mb-3">Okay, that's enough for now ;)</p>
		</motion.section>
	);
}
