import Footer from "@hackhub/components/footer";
import Navbar from "@hackhub/components/header";
import "@hackhub/styles/globals.css";
import "@hackhub/styles/shadows.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { Montserrat } from "next/font/google";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const montserrat = Montserrat({
	subsets: ["latin"],
	variable: "--font-montserrat",
});

const loadingAnimation = {
	initial: {
		opacity: 0,
		scale: 0.8,
		transition: { duration: 3, ease: "easeInOut" },
	},
	animate: {
		opacity: 1,
		scale: 1,
		transition: { duration: 3, ease: "easeInOut" },
	},
};

export default function App({ Component, pageProps }: AppProps) {
	const buttons = [
		"Home",
		"About",
		"Domains",
		"Timeline",
		"Sponsors",
		"FAQs",
		"Contact",
	];

	return (
		<>
			<section
				className={`bg-[#03091E] text-[#EAEAEA] ${montserrat.className} scroll-smooth overflow-x-hidden overflow-y-hidden`}
			>
				<motion.section
					className="bg-[#03091E] bg-opacity-50 w-full z-50"
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{
						duration: 2,
						delay: 2,
						ease: "easeInOut",
					}}
				>
					<Navbar buttons={buttons} />
				</motion.section>
				<motion.section
					className="bg-[#03091E]"
					initial="initial"
					animate="animate"
					variants={loadingAnimation}
				>
					<Component {...pageProps} />
					<Footer />
				</motion.section>
			</section>
		</>
	);
}
