"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import link from "next/link";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
	const { ref } = useSectionInView("Home", 0.5);
	const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

	return (
		<section
			ref={ref}
			id="home"
			className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[200rem]">
			<div className="flex items-center justify-center">
				<div className="relative">
					<motion.div
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{
							type: "tween",
							duration: 0.33,
						}}>
						<Image
							src={"/rr-img.png"}
							alt="Robert portrait"
							width={200}
							height={200}
							priority={true}
							className="rounded-full border-[0.35rem] border-white shadow-xl object-cover"
						/>
					</motion.div>
				</div>
			</div>

			<motion.h1
				className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-3xl"
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}>
				Hello, I'm Robert, a Front-end Developer with 2 years of commercial
				experience and a total of 7 years in IT. I have a passion for crafting
				engaging websites and applications. My expertise lies primarily in
				React, particularly with Next.js framework.
			</motion.h1>

			<motion.div
				className="flex flex-col sm:flex-row items-center justify-center gap-2 px4
			text-lg font-medium"
				initial={{ opacity: 0, scale: 0 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ delay: 0.1 }}>
				<Link
					href="#contact"
					className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:bg-white hover:text-gray-900 borderBlack active:scale-90 duration-primary"
					onClick={() => {
						setActiveSection("Contact");
						setTimeOfLastClick(Date.now());
					}}>
					Contact me here{" "}
					<BsArrowRight className="group-hover:translate-x-1 duration-200" />
				</Link>

				<a
					href="/cv.pdf"
					download
					className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:bg-white hover:text-gray-900 borderBlack active:scale-90 duration-primary">
					Download CV{" "}
					<HiDownload className="group-hover:translate-y-1 duration-200" /> {""}
				</a>

				<a
					href="https://www.linkedin.com/in/robert-rapkowski/"
					target="_blank"
					className="bg-gray-900 text-white p-4 flex items-center gap-2 rounded-full focus:scale-105  hover:text-gray-900 hover:bg-white active:scale-90 duration-primary cursor-pointer borderBlack">
					<BsLinkedin />
				</a>

				<a
					href="https://github.com/Rapkowsky"
					target="_blank"
					className="bg-gray-900 text-white p-4 flex items-center gap-2 text-[1.35rem] focus:scale-105 rounded-full hover:bg-white hover:text-gray-900 active:scale-90 duration-primary cursor-pointer borderBlack">
					<FaGithubSquare />
				</a>
			</motion.div>
		</section>
	);
}
