// CHAT GPT CODE
// I dont know what this does
// how this does it
// why this does it
// react bad, svelte W

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = ({ buttons }: { buttons: string[] }): JSX.Element => {
	const [currentButton, setCurrentButton] = useState<string | null>(buttons[0]); // Set the first button as initially highlighted
	const buttonRefs = React.useRef<{ [key: string]: HTMLElement | null }>({});
	const [isDesktop, setDesktop] = useState(false);
	const [isRadialNavbarOpen, setRadialNavbarOpen] = useState(false);

	const updateMedia = () => {
		setDesktop(window.innerWidth > 1400);
	};

	const openRadialNavbar = () => {
		setRadialNavbarOpen(!isRadialNavbarOpen);
	};

	useEffect(() => {
		window.addEventListener("resize", updateMedia);
		return () => window.removeEventListener("resize", updateMedia);
	});

	useEffect(() => {
		updateMedia();
	});

	useEffect(() => {
		// Access DOM elements after they have been rendered
		buttons.forEach((button) => {
			const buttonDom = document.getElementById(button);
			if (buttonDom) {
				buttonRefs.current[button] = buttonDom;

				buttonDom.addEventListener("click", () => {
					// Reset the color of all buttons
					buttons.forEach((btn) => {
						const btnRef = buttonRefs.current[btn];
						if (btnRef && btnRef !== null) {
							btnRef.style.cssText = ""; // Reset button color
						}
					});
					{
					}

					// Set the color of the clicked button
					buttonDom.style.cssText = `
            background-image: linear-gradient(to right, #cb356e, #897bec);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
          `;

					// Update the currently clicked button
					setCurrentButton(button);
				});
			}
		});

		// Highlight the first button initially
		const firstButton = buttonRefs.current[buttons[0]];
		if (firstButton && firstButton !== null) {
			firstButton.style.cssText = `
        background-image: linear-gradient(to right, #cb356e, #897bec);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
      `;
		}
	}, [buttons]);

	useEffect(() => {
		// Reset the color of all buttons except the currently clicked button
		buttons.forEach((button) => {
			const buttonDom = buttonRefs.current[button];
			if (buttonDom && button !== currentButton && buttonDom !== null) {
				buttonDom.style.cssText = ""; // Reset button color
			}
		});
	}, [currentButton, buttons]);

	return (
		<>
			<section className="top-0 left-0 w-full z-50">
				{isDesktop && (
					<nav className="justify-center flex font-normal text-[20px]">
						{buttons.map((button) => {
							return (
								<Link href={`#${button.toLowerCase()}`} key={button}>
									<section
										className={`px-16 py-5 
									`}
										id={button}
									>
										{button}
									</section>
								</Link>
							);
						})}
					</nav>
				)}
				{!isDesktop && (
					<>
						<nav className="relative flex justify-end visible lg:hidden z-[100]">
							<button className="flex items-center px-4 py-2 rounded-md ">
								<Image
									src="/three_bars.svg"
									alt="Logo"
									width={24}
									height={24}
									onClick={openRadialNavbar}
								/>
							</button>
						</nav>
					</>
				)}
			</section>
			<AnimatePresence>
				{isRadialNavbarOpen && (
					<section className="fixed flex flex-col items-center justify-center h-screen w-screen z-40 bg-transparent top-[-5px]">
						<motion.section
							initial={{ opacity: 0 }}
							animate={{
								opacity: 1,
							}}
							transition={{
								duration: 0.3,
								delay: 0,
								ease: "easeInOut",
							}}
							exit={{ opacity: 0 }}
							className="backdrop-blur-xl shadow-slate-600 border border-custom_red shadow-2xl flex flex-col items-center justify-center rounded-2xl py-4 px-8 min-w-screen"
						>
							{buttons.map((button) => {
								return (
									<Link href={`#${button.toLowerCase()}`} key={button}>
										<section
											onClick={openRadialNavbar}
											className={`px-16 py-6 hover:bg-black hover:bg-opacity-10 rounded-md 
									`}
											id={button}
										>
											{button}
										</section>
									</Link>
								);
							})}
						</motion.section>
					</section>
				)}
			</AnimatePresence>
			<section className="h-0.5 bg-gradient-to-r from-custom_red to-custom_lightblue" />
		</>
	);
};
export default Navbar;
