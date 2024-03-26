"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { useState } from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
	const { ref } = useSectionInView("Contact");
	const [emailText, setEmailText] = useState("");
	const [areaText, setAreaText] = useState("");
	const textAreaHandleChange = (e: { target: { value: any } }) => {
		let areaText = e.target.value;
		setAreaText(areaText);
	};
	const emailHandleChange = (e: { target: { value: any } }) => {
		let emailText = e.target.value;
		setEmailText(emailText);
	};
	return (
		<motion.section
			initial={{
				opacity: 0,
			}}
			whileInView={{
				opacity: 1,
			}}
			transition={{
				duration: 1.5,
			}}
			viewport={{
				once: true,
			}}
			id="contact"
			ref={ref}
			className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center">
			<SectionHeading>Contact me</SectionHeading>
			<p className="text-gray-700 -mt-6 dark:text-gray-50">
				Please contact me directly at{" "}
				<a className="underline" href="mailto:robertrapkowski19@gmail.com">
					robertrapkowski19@gmail.com
				</a>{" "}
				or through this form
			</p>

			<form
				className="mt-10 flex flex-col"
				action={async (formData) => {
					const { data, error } = await sendEmail(formData);
					if (error) {
						toast.error(error);
						return;
					}
					toast.success("Email sent successfully!");
					setEmailText("");
					setAreaText("");
				}}>
				<input
					className=" text-gray-700 h-14 px-4 rounded-lg borderBlack transition-all dark:outline-none duration-primary dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 "
					name="senderEmail"
					type="email"
					required
					maxLength={500}
					placeholder="Your email"
					value={emailText}
					onChange={emailHandleChange}
				/>
				<textarea
					className=" text-gray-700 h-52 my-3 rounded-lg borderBlack p-4 transition-all dark:outline-none duration-primary dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 "
					name="message"
					placeholder="Your message"
					required
					maxLength={5000}
					value={areaText}
					onChange={textAreaHandleChange}
				/>
				<SubmitBtn />
			</form>
		</motion.section>
	);
}