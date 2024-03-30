import { motion } from "framer-motion";
import { Space_Grotesk, Space_Mono } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
	subsets: ["latin"],
	variable: "--font-space-grotesk",
});

const spaceMono = Space_Mono({
	subsets: ["latin"],
	variable: "--font-space-mono",
	weight: "400",
});

export default function Timeline(): JSX.Element {
	const times = [
		{
			topic: "26th April 2024",
			description: "Registration starts",
		},
		{
			topic: "26th April 2024",
			description: "Registration starts",
		},
		{
			topic: "26th April 2024",
			description: "Registration starts",
		},
	];
	return (
		<>
			<motion.section
				id="timeline"
				className="relative mt-10 w-full flex py-20 font-bold text-[5rem] min-h-screen"
			>
				<motion.img
					initial={{ opacity: 1 }}
					animate={{ opacity: [1, 0.7, 0.3, 0.5, 0, 0.5, 0.3, 0.7, 1] }} // Animate opacity from 1 to 0
					transition={{ duration: 1, repeat: Infinity, yoyo: Infinity }} // Set transition duration and repeat infinitely
					src="/dots_full_red.svg"
					className="absolute left-[0rem] top-[0rem] w-[18rem] z-0"
				></motion.img>
				<motion.img
					initial={{ opacity: 1 }}
					animate={{ opacity: [1, 0.7, 0.3, 0.5, 0, 0.5, 0.3, 0.7, 1] }} // Animate opacity from 1 to 0
					transition={{ duration: 0.8, repeat: Infinity, yoyo: Infinity }} // Set transition duration and repeat infinitely
					src="/dots_full_white.svg"
					className="absolute left-[3rem] top-[-4rem] w-[22rem] z-0"
				></motion.img>

				<div className="p-4 flex w-screen flex-col items-center justify-center z-10">
					<section className={`flex py-4 ${spaceGrotesk.className}`}>
						<section className="text-custom_white text-start w-screen ml-[3em]">
							Timeline
						</section>
					</section>
					<section
						className={`text-[1.2rem] font-normal ${spaceMono.className}`}
					>
						<section className="">
							{times.map((time, index) => (
								<section className={`justify-center w-screen rounded-lg p-12`}>
									<section
										className={`${
											index % 2 == 0
												? "ml-[25em] mr-[4em] border-custom_red"
												: "ml-[4em] mr-[25em] border-custom_lightblue"
										} border rounded-lg p-12 backdrop-brightness-125 backdrop-blur-lg shadow-2xl shadow-custom_darkblue`}
									>
										<section
											className={`${
												index % 2 == 0
													? "text-custom_red"
													: "text-custom_lightblue"
											} text-[3rem] font-normal self-start"`}
										>
											{time.topic}
										</section>
										<section className="text-[1.5rem] font-normal mt-12 text-end">
											{time.description}
										</section>
									</section>
								</section>
							))}
						</section>
					</section>
				</div>
			</motion.section>
		</>
	);
}
