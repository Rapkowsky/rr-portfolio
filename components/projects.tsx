"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
	const { ref } = useSectionInView("Projects", 0.5);

	return (
		<section ref={ref} id="projects" className="scroll-mt-28 mb-28">
			<SectionHeading>My projects</SectionHeading>
			<div>
				{projectsData.map((project, index) => (
					<React.Fragment key={index}>
						<Project {...project} />
					</React.Fragment>
				))}
				<div className="text-center max-w-[42rem] ">
					<p className=" mt-10 mb-10">
						Aside from the above projects, as well as completely new, larger,
						more advanced ones, will appear in the coming weeks. I can't wait to
						share them with you because I'll be using all the latest
						technologies such as:
					</p>

					<p>
						<b>+</b> React ((custom) hooks, Context API, state management
						(Zustand / RTK), RHF (forms), Next-Auth, Stripe, Framer Motion,
						Shadcn-UI, Prisma, Postgres, Vercel, etc.
					</p>
					<p>
						<b>+</b> Next.js (App Router, server components, server actions,
						revalidation, SSR & SSG, etc.)
					</p>
					<p>
						<b>+</b> TypeScript
					</p>
					<p>
						<b>+</b> Tailwind
					</p>
				</div>
			</div>
		</section>
	);
}
