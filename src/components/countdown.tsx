import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface CountdownProps {
	year: number;
	month: number;
	date: number;
	hour: number;
	minutes: number;
	seconds: number;
}

export default function Countdown({
	year,
	month,
	date,
	hour,
	minutes,
	seconds,
}: CountdownProps) {
	const [timeLeft, setTimeLeft] = useState({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
	});

	useEffect(() => {
		const countdownDate = new Date(
			year,
			month - 1,
			date,
			hour,
			minutes,
			seconds
		).getTime();

		const interval = setInterval(() => {
			const now = new Date().getTime();
			const distance = countdownDate - now;

			const days = Math.floor(distance / (1000 * 60 * 60 * 24));
			const hours = Math.floor(
				(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
			);
			const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			const seconds = Math.floor((distance % (1000 * 60)) / 1000);

			setTimeLeft({ days, hours, minutes, seconds });

			if (distance < 0) {
				clearInterval(interval);
				setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
			}
		}, 1000);

		return () => clearInterval(interval);
	}, [year, month, date, hour, minutes, seconds]);

	let a = "";

	return (
		<section className="z-10">
			<section className="font-offbittrialbold">
				<section className="flex justify-center sm:text-[2em] text-7xl gap-16 sm:gap-6 mt-20 ">
					<div className="flex flex-col items-center">
						<p className="text-9xl sm:text-[2em]">{timeLeft.days}</p>
						<p className="text-custom_red font-offbittrial sm:text-[1em] text-6xl">
							days
						</p>
					</div>

					<div className="flex flex-col items-center">
						<p className="text-9xl sm:text-[2em]">{timeLeft.hours}</p>
						<p className="text-custom_lightblue font-offbittrial sm:text-[1em] text-6xl">
							hours
						</p>
					</div>
					<div className="flex flex-col items-center">
						<p className="text-9xl sm:text-[2em]">{timeLeft.minutes}</p>
						<p className="text-custom_white font-offbittrial sm:text-[1em] text-6xl">
							minutes
						</p>
					</div>
					<div className="flex flex-col items-center">
						<p className="text-9xl sm:text-[2em]">{timeLeft.seconds}</p>
						<p className="text-custom_red font-offbittrial text-6xl sm:text-[1em]">
							seconds
						</p>
					</div>
				</section>
			</section>
		</section>
	);
}
