import React from "react";
import comsocLogowhite from "../assets/comsocLogowhite.svg";
import instagram from "../assets/socialmedia/instagram.png";
import github from "../assets/socialmedia/github.png";
import linkedin from "../assets/socialmedia/linkedin.png";
import discord from "../assets/socialmedia/discord.png";
import youtube from "../assets/socialmedia/youtube.png";
import twitter from "../assets/socialmedia/twitter.png";
import telegram from "../assets/socialmedia/telegram.png";
import devto from "../assets/socialmedia/devto.png";

const Footer = () => {
	return (
		<div className="relative z-0 mx-32 backdrop-blur-md">
			<section
				id="contact"
				className="h-0.5 bg-gradient-to-r from-[#CF1259] to-[#7161EF] my-4 "
			/>
			<footer className="font-montserrat">
				<div className="pb-6 text-gray-800 flex flex-wrap lg:flex-nowrap justify-left text-left items-center">
					<div className="pt-8 lg:pt-4 w-11/12 sm:w-2/3 lg:w-[30rem] order-4 lg:order-1">
						<img
							src={comsocLogowhite.src}
							alt="IEEE CS VITC Logo"
							className="items-center justify-center"
						/>
					</div>
					<div className="mt-3 w-full lg:w-3/12 py-6 lg:py-0 hidden lg:block order-1 lg:order-2">
						<div className="text-lg lg:text-base text-white inline-block mb-3">
							Menu
							<div id="underlineGradient" />
						</div>
						<a
							href="#"
							className="my-3 block text-white hover:text-gray-200 text-sm"
						>
							Home
						</a>
						<a
							href="#about"
							className="my-3 block text-white hover:text-gray-200 text-sm"
						>
							About
						</a>
						<a
							href="#domains"
							className="my-3 block text-white hover:text-gray-200 text-sm"
						>
							Domains
						</a>
						<a
							href="#timeline"
							className="my-3 block text-white hover:text-gray-200 text-sm"
						>
							Timeline
						</a>
						<a
							href="#sponsors"
							className="my-3 block text-white hover:text-gray-200 text-sm"
						>
							Sponsors
						</a>
						<a
							href="#faqs"
							className="my-3 block text-white hover:text-gray-200 text-sm"
						>
							FAQs
						</a>
					</div>
					<div className="mt-3 w-full lg:w-3/12 order-2 lg:order-3">
						<div className="text-lg lg:text-base text-white inline-block mb-3">
							Address
							<div id="underlineGradient" />
						</div>
						<a
							href="https://goo.gl/maps/C9UE9JLWnBAfQPKe7"
							target="_blank"
							rel="noreferrer"
							className="my-3 block text-white hover:text-gray-200 text-base lg:text-sm lg:pr-16"
						>
							Kelambakkam - Vandalur Rd, Rajan Nagar, Chennai, Tamil Nadu -
							600127
						</a>
						<br />
						<div className="text-lg lg:text-base text-white inline-block mb-3">
							Email
							<div id="underlineGradient" />
						</div>
						<a
							href="mailto:ieeecomputersociety@vit.ac.in"
							target="_blank"
							rel="noreferrer"
							className="my-3 block text-white hover:text-gray-200 text-base lg:text-sm"
						>
							ieeecomputersociety@vit.ac.in
						</a>
					</div>
					<div className="mt-3 w-full lg:w-3/12 order-3 lg:order-4">
						<div className="text-lg lg:text-base text-white inline-block lg:my-0 lg:pb-4 pl-6 lg:pl-0">
							Social Media
							<div id="underlineGradient" />
						</div>
						<div className="grid grid-cols-4 lg:pr-16">
							<div>
								<a
									href="https://www.instagram.com/compsoc.vitcc/"
									target="_blank"
									rel="noreferrer"
								>
									<img
										src={instagram.src}
										alt="Instagram"
										className="h-7 my-5 mx-auto lg:mx-0"
									></img>
								</a>
							</div>
							<div>
								<a
									href="https://discord.gg/6vkY3kcZnE"
									target="_blank"
									rel="noreferrer"
								>
									<img
										src={discord.src}
										alt="Discord"
										className="h-7 my-5 mx-auto lg:mx-0"
									></img>
								</a>
							</div>
							<div>
								<a
									href="https://github.com/ComputerSocietyVITC"
									target="_blank"
									rel="noreferrer"
								>
									<img
										src={github.src}
										alt="Github"
										className="h-7 my-5 mx-auto lg:mx-0"
									></img>
								</a>
							</div>
							<div>
								<a
									href="https://www.linkedin.com/company/ieee-computer-society-vit-chennai/"
									target="_blank"
									rel="noreferrer"
								>
									<img
										src={linkedin.src}
										alt="LinkedIn"
										className="h-7 my-5 mx-auto lg:mx-0"
									></img>
								</a>
							</div>
							<div>
								<a
									href="https://www.youtube.com/channel/UCOgwDinZGau4rwv3swAe-nQ"
									target="_blank"
									rel="noreferrer"
								>
									<img
										src={youtube.src}
										alt="youtube"
										className="h-7 my-5 mx-auto lg:mx-0"
									></img>
								</a>
							</div>
							<div>
								<a
									href="https://t.me/IEEE_CS_VIT_Chennai"
									target="_blank"
									rel="noreferrer"
								>
									<img
										src={telegram.src}
										alt="telegram"
										className="h-7 my-5 mx-auto lg:mx-0"
									></img>
								</a>
							</div>
							<div>
								<a
									href="https://twitter.com/ieeecsvitc"
									target="_blank"
									rel="noreferrer"
								>
									<img
										src={twitter.src}
										alt="twitter"
										className="h-7 my-5 mx-auto lg:mx-0"
									></img>
								</a>
							</div>
							<div>
								<a
									href="https://dev.to/ieeecsvitc"
									target="_blank"
									rel="noreferrer"
								>
									<img
										src={devto.src}
										alt="devto"
										className="h-7 my-5 mx-auto lg:mx-0"
									></img>
								</a>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
