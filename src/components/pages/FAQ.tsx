import { motion } from "framer-motion";
import { Space_Grotesk, Space_Mono } from "next/font/google";
import { SetStateAction, useState } from "react";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const spaceGrotesk = Space_Grotesk({
	subsets: ["latin"],
	variable: "--font-space-grotesk",
});

const spaceMono = Space_Mono({
	subsets: ["latin"],
	variable: "--font-space-mono",
	weight: "400",
});

export default function FAQ(): JSX.Element {
	const [selectedTopic, setSelectedTopic] = useState<number | null>(null);
	const faqs = [
		{
			topic: "What is HackHub?",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus",
		},
		{ topic: "Is it free to register for HackHub?", description: "hello" },
		{ topic: "Why should I participate in HackHub?", description: "hello" },
		{ topic: "How many members are allowed in a team?", description: "hello" },
		{
			topic:
				"Is it necessary for the participants to be from the same university?",
			description: "hello",
		},
		{ topic: "Will the hackathon be offline or online?", description: "hello" },
		{
			topic: "Do you provide travel reimbursement to the hackers?",
			description: "hello",
		},
		{
			topic: "What if I'm interested but can't find a team?",
			description: "hello",
		},
		{
			topic: "Do we need to have the entire idea fully working?",
			description: "hello",
		},
	];
	const toggleTopic = (index: number) => {
		if (selectedTopic === index) {
			setSelectedTopic(null);
		} else {
			setSelectedTopic(index);
		}
	};
	return (
		<>
			<motion.section
				id="faqs"
				className="relative mt-10 w-full flex py-20 font-bold text-[5rem] sm:text-[80%] min-h-screen sm:justify-center"
			>
				<div className="w-[80%] ml-24 sm:ml-0 z-10 sm:text-center">
					<section className={`${spaceGrotesk.className} font-regular`}>
						FAQs
					</section>
					<section className={`${spaceGrotesk.className} ml-[-1rem]`}>
						{faqs.map((faq, index) => (
							<motion.section
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{
									duration: 3,
									delay: 0.3,
									ease: "easeInOut",
								}}
								className=" border-custom_red border-b-2 backdrop-blur-2xl rounded-3xl p-4 mb-4 shadow-lg shadow-custom_darkblue"
								key={index}
							>
								<section
									className="text-[2.1rem] sm:text-[40%] font-normal flex justify-between"
									onClick={() => toggleTopic(index)}
								>
									<section>{faq.topic}</section>
									<FontAwesomeIcon
										className="mt-4 font-extralight"
										icon={selectedTopic === index ? faChevronUp : faChevronDown}
									/>
								</section>
								{selectedTopic === index && (
									<motion.section
										initial={{ opacity: 0 }}
										animate={{
											opacity: 1,
										}}
										transition={{
											duration: 2,
											delay: 0,
											ease: "easeInOut",
										}}
										className={` font-extralight text-[1.2rem] sm:text-[25%] pt-4 pb-24 sm:pr-0`}
									>
										<p>{faq.description}</p>
									</motion.section>
								)}
							</motion.section>
						))}
					</section>
				</div>
			</motion.section>
		</>
	);
}
