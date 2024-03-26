import React from "react";
import { useFormStatus } from "react-dom";
import { FaPaperPlane } from "react-icons/fa";

export default function SubmitBtn() {
	const { pending } = useFormStatus();
	return (
		<button
			type="submit"
			className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none duration-primary focus:scale-105 hover:bg-white hover:text-gray-900 borderBlack active:scale-90  disabled:scale-100 disabled:bg-opacity-65"
			disabled={pending}>
			{pending ? (
				<div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
			) : (
				<>
					Submit{" "}
					<FaPaperPlane className="duration-200 text-xs group-hover:translate-x-1 group-hover:-translate-y-1" />
				</>
			)}
		</button>
	);
}
