import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = ({ buttons }: { buttons: string[] }): JSX.Element => {
	const [currentButton, setCurrentButton] = useState<string | null>(buttons[0]); // Set the first button as initially highlighted
	const buttonRefs = React.useRef<{ [key: string]: HTMLElement | null }>({});
	const [isRadialNavbarOpen, setRadialNavbarOpen] = useState(false);

	const openRadialNavbar = () => {
		setRadialNavbarOpen(!isRadialNavbarOpen);
	};

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
			<section className="">
				<nav className="absolute right-0 lg:hidden ">
					<button className="flex items-center px-4 py-2 rounded-md ">
						<img
							src="/three_bars.svg"
							alt="Logo"
							width={50}
							height={50}
							onClick={openRadialNavbar}
							className="z-[100]"
						/>
					</button>
				</nav>
				<nav className="sm:hidden md:hidden justify-center flex flex-nowrap font-normal text-[20px] w-screen">
					{buttons.map((button) => {
						return (
							<a href={`#${button.toLowerCase()}`} key={button}>
								<section
									className={`px-16 py-5 
									`}
									id={button}
								>
									{button}
								</section>
							</a>
						);
					})}
				</nav>
			</section>
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
								<a href={`#${button.toLowerCase()}`} key={button}>
									<section
										onClick={openRadialNavbar}
										className={`px-16 py-6 hover:bg-black hover:bg-opacity-10 rounded-md 
									`}
										id={button}
									>
										{button}
									</section>
								</a>
							);
						})}
					</motion.section>
				</section>
			)}
			<section className="lg:h-0.5 bg-gradient-to-r from-custom_red to-custom_lightblue" />
		</>
	);
};
export default Navbar;
