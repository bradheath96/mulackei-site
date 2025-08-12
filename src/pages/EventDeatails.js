import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchEventsBySlug } from "../services/EventServices";
import { motion } from "framer-motion";
import { translations } from "../services/translations";
import { PortableText } from "@portabletext/react";

const EventDetails = ({ currentLang }) => {
	const { slug } = useParams();
	const [event, setEvent] = useState(null);
	const [loading, setLoading] = useState(true);

	const t = translations.eventsDetails[currentLang];

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		const getEvent = async () => {
			try {
				const data = await fetchEventsBySlug(slug);
				setEvent(data);
			} catch (error) {
				console.error("Error fetching event details:", error);
			} finally {
				setLoading(false);
			}
		};
		getEvent();
	}, [slug]);


	return (
		<div className="bg-primary min-h-screen text-white">
			{/* Event Image Section with Skeleton */}
			<div className="grid grid-flow-col-1 md:grid-cols-2 lg:grid-cols-2 lg:grid-rows-1 mb-10">
				<motion.div
					className="lg:px-4 lg:pt-4 md:px-4 md:pt-4"
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}>
					{/* Image or Skeleton Placeholder */}
					<div className="animate-fade animate-duration-1500">
						{loading ? (
							<div className="w-[500px] h-[500px] md:w-full md:h-[400px] lg:w-[600px] lg:h-[620px] bg-primary animate-pulse"></div>
						) : (
							<img
								src={event.image.asset.url}
								alt={event.name}
								className="w-[500px] h-[500px] md:w-full md:h-[400px] lg:w-[600px] lg:h-[620px] object-cover"
							/>
						)}
					</div>
				</motion.div>

				{/* Event Details Section */}
				<motion.div
					className="md:place-content-end px-4 pt-4 md:h-full lg:place-content-end"
					initial={{ opacity: 0, y: 30 }} // Initial position and opacity
					animate={{ opacity: 1, y: 0 }} // Final position and opacity
					transition={{ duration: 0.5 }} // Duration of the animation
				>
					{/* Event Date */}
					<p className="font-bodyFont text-2xl lg:text-3xl font-light">
						{loading ? (
							<div className="w-40 h-6 bg-primary animate-pulse"></div>
						) : (
							new Date(event.date)
								.toLocaleString(currentLang === "de" ? "de-DE" : "en-US", {
									weekday: "short",
									day: "numeric",
									month: "short",
									hour: "2-digit",
									minute: "2-digit",
									hour12: false,
								})
								.replace(",", "") // Removes comma between date and time
						)}
					</p>

					{/* Event Name */}
					<h1 className="font-titleFont text-6xl lg:text-8xl font-bold">
						{loading ? (
							<div className="w-60 h-8 bg-primary animate-pulse"></div>
						) : (
							event.name
						)}
					</h1>

					{/* Event Button */}
					{loading ? (
						<div className="flex gap-5 mt-5">
							<div className="w-full h-12 bg-primary animate-pulse"></div>
							<div className="w-full h-12 bg-primary animate-pulse"></div>
						</div>
					) : (
						<div className="flex gap-5">
							{event.tickets === null ? (
								<div className="text-center font-bodyFont lg:w-full md:w-full w-full mt-5 py-3 bg-boxYellow text-black font-medium ">
									{t.payOnEntry}
								</div>
							) : (
								<a
									href={event.tickets}
									target="_blank"
									rel="noopener noreferrer"
									className="text-center font-bodyFont lg:w-full md:w-full w-full mt-5 py-3 bg-boxYellow hover:bg-secondary-dark text-black font-medium transition duration-300 ease-in-out hover:-translate-y-0.5 hover:-translate-x-0.5">
									{t.buyButton}
								</a>
							)}
							<button className="font-bodyFont lg:w-full md:w-full w-full mt-5 py-3 border-boxYellow border-2 hover:bg-secondary-dark text-white font-medium transition duration-300 ease-in-out hover:-translate-y-0.5 hover:-translate-x-0.5">
								{event.priceAmount === null
									? t.freeInOption
									: "€" + event.priceAmount}
							</button>
						</div>
					)}
				</motion.div>
			</div>

			{/* Divider */}
			<hr className="border-t-2 border-boxYellow my-5" />

			{/* Event Description Section */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
				<div></div>
				<motion.div
					className="flex flex-col justify-start mx-5 mt-10"
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}>
					<div className="font-bodyFont text-md font-light justify-start mr-5 space-y-4 mb-10">
						{loading ? (
							<div className="space-y-4">
								<div className="w-full h-6 bg-primary animate-pulse"></div>
								<div className="w-3/4 h-6 bg-primary animate-pulse"></div>
								<div className="w-1/2 h-6 bg-primary animate-pulse"></div>
							</div>
						) : (
							<PortableText value={event.description?.[currentLang]} />
						)}
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default EventDetails;
