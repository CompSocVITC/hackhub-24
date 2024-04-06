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

export default function Domain(): JSX.Element {
	return (
		<>
			<motion.section
				id="domains"
				className="relative -mt-16 w-full flex py-20 font-bold text-[5rem] min-h-screen"
			>
				<motion.img
					initial={{ opacity: 0, x: "0vw" }}
					animate={{
						opacity: [1, 0.7, 0.3, 0.5, 0, 0.5, 0.3, 0.7, 1],
						x: ["-50vw", "150vw"],
					}} // Animate opacity from 1 to 0
					transition={{
						duration: 5,
						repeat: Infinity,
						yoyo: Infinity,
						// x: {
						// 	duration: 5, // increase duration for slower movement
						// 	yoyo: infinity,
						// 	ease: "easeinout",
						// 	repeat: infinity, // changed ease for smoother motion
						// },
					}}
					src="/right_arrow_white.svg"
					className="sm:hidden absolute left-[1rem] bottom-[-5rem] z-0"
				/>
				<motion.img
					initial={{ opacity: 1 }}
					animate={{ opacity: [1, 0.7, 0.3, 0.5, 0, 0.5, 0.3, 0.7, 1] }} // Animate opacity from 1 to 0
					transition={{ duration: 1, repeat: Infinity, yoyo: Infinity }} // Set transition duration and repeat infinitely
					src="/dots_full_red.svg"
					className="absolute left-[0rem] top-[10rem] w-[18rem] z-0"
				></motion.img>

				<motion.p
					initial={{ x: "0vw", y: "0vh", rotate: 0 }}
					animate={{
						y: ["2vh", "-2vh", "2vh"],
					}}
					transition={{
						y: {
							duration: 5, // Increase duration for slower movement
							yoyo: Infinity,
							ease: "easeInOut",
							repeat: Infinity, // Changed ease for smoother motion
						},
					}}
					className="font-opensans sm:hidden font-black absolute text-[14rem] w-fit p-4 right-[10rem] top-[15rem] white-border text-custom_red"
				>
					◯
				</motion.p>

				<motion.p
					initial={{ x: "0vw", y: "0vh", rotate: 0 }}
					animate={{
						x: ["-2vw", "2vw", "-2vw"], // Change x values for repeated motion
						y: ["-2vh", "2vh", "-2vh"], // Adjusted y values for variation
						rotate: [360, 0],
						// Adding rotation animation
					}}
					transition={{
						x: {
							duration: 30, // Increase duration for slower movement
							yoyo: Infinity,
							ease: "linear",

							repeat: Infinity,
						},
						y: {
							duration: 5, // Increase duration for slower movement
							yoyo: Infinity,
							ease: "easeInOut",
							repeat: Infinity, // Changed ease for smoother motion
						},
						rotate: {
							duration: 50, // Adjust duration for rotation speed
							yoyo: Infinity,
							ease: "linear",
							repeat: Infinity,
						},
					}}
					className="font-opensans absolute left-[5rem] bottom-[0rem] text-[14rem] white-border text-custom_lightblue z-0"
				>
					×
				</motion.p>

				<div className="p-4 flex flex-col w-[80%] mx-auto items-center justify-center z-10">
					<section className={`flex py-4 ${spaceGrotesk.className}`}>
						<section className="text-custom_white mb-10 mt-10 text-7xl">
							Domains
						</section>
					</section>
					<section
						className={`text-[1.2rem] font-normal flex flex-col items-center w-full ${spaceMono.className}`}
					>
						<div className="flex lg:flex-row flex-col gap-[4rem] w-full items-center justify-center">
							<div className="bg-custom_white text-black rounded-xl">
								<div className="h-10 bg-black w-full flex gap-2 items-center p-2">
									<div className="rounded-full w-5 h-5 bg-green-600"></div>
									<div className="rounded-full w-5 h-5 bg-yellow-300"></div>
									<div className="rounded-full w-5 h-5 bg-red-500"></div>
								</div>
								<div className="flex flex-col w-full items-center p-8">
									<span className="font-black lg:text-4xl text-2xl">
										Domain 1
									</span>
									<span className="lg:text-lg text-[1rem] p-4">
										Lorem ipsum dolor sit amet consectetur, adipisicing elit.
										Architecto perspiciatis repellat similique saepe sequi,
										voluptas error modi ut, tempore officiis suscipit iure qui
										doloremque, debitis dignissimos incidunt. Minus, cum velit.
									</span>
								</div>
							</div>

							<div className="bg-custom_white text-black rounded-xl">
								<div className="h-10 bg-black w-full flex gap-2 items-center p-2">
									<div className="rounded-full w-5 h-5 bg-green-600"></div>
									<div className="rounded-full w-5 h-5 bg-yellow-300"></div>
									<div className="rounded-full w-5 h-5 bg-red-500"></div>
								</div>
								<div className="flex flex-col w-full items-center p-8">
									<span className="font-black lg:text-4xl text-2xl">
										Domain 1
									</span>
									<span className="lg:text-lg text-[1rem] p-4">
										Lorem ipsum dolor sit amet consectetur, adipisicing elit.
										Architecto perspiciatis repellat similique saepe sequi,
										voluptas error modi ut, tempore officiis suscipit iure qui
										doloremque, debitis dignissimos incidunt. Minus, cum velit.
									</span>
								</div>
							</div>

							<div className="bg-custom_white text-black rounded-xl">
								<div className="h-10 bg-black w-full flex gap-2 items-center p-2">
									<div className="rounded-full w-5 h-5 bg-green-600"></div>
									<div className="rounded-full w-5 h-5 bg-yellow-300"></div>
									<div className="rounded-full w-5 h-5 bg-red-500"></div>
								</div>
								<div className="flex flex-col w-full items-center p-8">
									<span className="font-black lg:text-4xl text-2xl">
										Domain 1
									</span>
									<span className="lg:text-lg text-[1rem] p-4">
										Lorem ipsum dolor sit amet consectetur, adipisicing elit.
										Architecto perspiciatis repellat similique saepe sequi,
										voluptas error modi ut, tempore officiis suscipit iure qui
										doloremque, debitis dignissimos incidunt. Minus, cum velit.
									</span>
								</div>
							</div>

							<div className="bg-custom_white text-black rounded-xl">
								<div className="h-10 bg-black w-full flex gap-2 items-center p-2">
									<div className="rounded-full w-5 h-5 bg-green-600"></div>
									<div className="rounded-full w-5 h-5 bg-yellow-300"></div>
									<div className="rounded-full w-5 h-5 bg-red-500"></div>
								</div>
								<div className="flex flex-col w-full items-center p-8">
									<span className="font-black lg:text-4xl text-2xl">
										Domain 1
									</span>
									<span className="lg:text-lg text-[1rem] p-4">
										Lorem ipsum dolor sit amet consectetur, adipisicing elit.
										Architecto perspiciatis repellat similique saepe sequi,
										voluptas error modi ut, tempore officiis suscipit iure qui
										doloremque, debitis dignissimos incidunt. Minus, cum velit.
									</span>
								</div>
							</div>
						</div>
					</section>
				</div>
			</motion.section>
		</>
	);
}
