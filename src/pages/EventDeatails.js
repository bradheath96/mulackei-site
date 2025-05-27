import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchEventsBySlug } from "../services/EventServices";
import { motion } from "framer-motion"; // Import motion from Framer Motion

const EventDetails = () => {
	const { slug } = useParams();
	const [event, setEvent] = useState(null);
	const [loading, setLoading] = useState(true);

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
					initial={{ opacity: 0, y: 30 }} // Initial position and opacity for the animation
					animate={{ opacity: 1, y: 0 }} // Final position and opacity
					transition={{ duration: 0.5 }} // Duration of the animation
				>
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
							new Date(event.date).toLocaleDateString(undefined, {
								weekday: "short",
								month: "short",
								day: "numeric",
								hour: "2-digit",
								minute: "2-digit",
							})
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
					<button
						className="font-bodyFont lg:w-full md:w-full w-full mt-5 py-3 bg-boxYellow hover:bg-secondary-dark text-black font-medium  transition duration-300 ease-in-out hover:-translate-y-0.5 hover:-translate-x-0.5"
						>
						Buy Tickets	
					</button>
				</motion.div>
			</div>

			{/* Divider */}
			<hr className="border-t-2 border-boxYellow my-10" />

			{/* Event Description Section */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
				<div></div>
				<motion.div
					className="flex flex-col justify-start mx-5 mt-10"
					initial={{ opacity: 0, y: 30 }} // Initial position and opacity
					animate={{ opacity: 1, y: 0 }} // Final position and opacity
					transition={{ duration: 0.5 }} // Duration of the animation
				>
					<div className="font-bodyFont text-md font-light justify-start mr-5 space-y-4 mb-10">
						{loading ? (
							<div className="space-y-4">
								<div className="w-full h-6 bg-primary animate-pulse"></div>
								<div className="w-3/4 h-6 bg-primary animate-pulse"></div>
								<div className="w-1/2 h-6 bg-primary animate-pulse"></div>
							</div>
						) : (
							event.description.map((block, index) => (
								<p key={index}>
									{block.children.map((child) => child.text).join(" ")}
								</p>
							))
						)}
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default EventDetails;
