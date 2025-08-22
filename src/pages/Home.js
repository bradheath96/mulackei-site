import { useEffect, useState } from "react";
import { fetchEvents, fetchImagesByFilenames } from "../services/EventServices";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { translations } from "../services/translations";
import { Link } from "react-router-dom";

const Home = ({ currentLang }) => {
	const [events, setEvents] = useState([]);
	const [images, setImages] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [isImageLoaded, setIsImageLoaded] = useState(false);
	const navigate = useNavigate();

	const t = translations.home[currentLang];

	const fadeUp = {
		initial: { opacity: 0, y: 40 },
		whileInView: { opacity: 1, y: 0 },
		transition: { duration: 0.5, ease: "easeOut" },
		viewport: { once: true, amount: 0.2 },
	};

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		const currentDate = new Date();
		fetchEvents()
			.then((data) => {
				const upcomingEvents = data.filter(
					(event) => new Date(event.date) > currentDate
				);
				setEvents(upcomingEvents.slice(0, 8));
				setIsLoading(false);
			})
			.catch(console.error);
	}, []);

	const handleMoreInfoClick = (slug) => {
		navigate(`events/${slug}`);
	};

	useEffect(() => {
		const loadImage = async () => {
			const imgs = await fetchImagesByFilenames([
				"CAP_1062.webp",
				"CAP_1256.webp",
				"CAP_0950.webp",
				"CAP_1066.webp",
			]);
			setImages(imgs);
		};

		loadImage();
	}, []);

	return (
		<div className="bg-primary relative min-h-screen">
			{/* Hero Section with Background Image */}
			<div className="relative min-h-[500px] md:h-[500px] lg:min-h-[40vh] overflow-hidden animate-fade animate-duration-1500">
				{!isImageLoaded && (
					<div className="absolute inset-0 bg-primary animate-pulse"></div>
				)}
				{images?.[0] && (
					<img
						src={images[0].url}
						alt={images[0].alt || "Event image"}
						className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
							isImageLoaded ? "opacity-100" : "opacity-0"
						}`}
						onLoad={() => setIsImageLoaded(true)}
					/>
				)}
			</div>

			<hr className="border-t-2 border-boxYellow" />

			{/* Upcoming Events Section */}
			<div className="bg-primary text-white py-5 ">
				{/* Full-width line */}
				<div className="relative w-full animate-fade animate-duration-1000">
					<hr className="absolute left-0 right-0 border-t-2 border-boxYellow top-1/2 -translate-y-1/2" />

					{/* Container keeps content aligned */}
					<div className="relative flex max-w-7xl mx-auto px-4 md:px-8 items-center justify-center lg:justify-start ">
						<h2 className="text-2xl font-bold text-white font-titleFont bg-primary px-4 relative z-10 lg:text-5xl inline-block">
							{t.heading}
						</h2>
					</div>
				</div>

				<div className="max-w-7xl mx-auto px-4 pt-6 md:px-8">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 md:px-8 max-w-7xl mx-auto">
						{/* Skeleton Loader while fetching events */}
						{isLoading
							? [...Array(4)].map((_, index) => (
									<div
										key={index}
										className="bg-primary flex flex-col min-h-[400px] animate-pulse rounded-lg overflow-hidden">
										<div className="w-full h-48 bg-primary"></div>
										<div className="flex flex-col flex-grow p-4">
											<div className="h-6 bg-primary w-1/2 mb-3"></div>
											<div className="h-10 bg-primary w-3/4 mb-5"></div>
											<div className="h-12 bg-primary w-full"></div>
										</div>
									</div>
							  ))
							: events.map((event, index) => (
									<motion.div
										key={index}
										initial={{ opacity: 0, y: 30 }}
										whileInView={{ opacity: 1, y: 0 }}
										viewport={{ once: true, amount: 0.2 }}
										transition={{ duration: 0.5 }}
										className="bg-primary flex flex-col min-h-[400px] overflow-hidden ">
										{event.image && (
											<img
												src={event.image.asset.url}
												alt={event.name}
												className="w-full h-[300px] object-cover"
											/>
										)}
										<div className="flex flex-col flex-grow pt-2">
											<p className="font-bodyFont text-lg font-light text-white">
												{new Date(event.date).toLocaleDateString(
													currentLang === "de" ? "de-DE" : "en-US",
													{
														weekday: "long",
														month: "long",
														day: "numeric",
													}
												)}
											</p>
											<h3 className="font-titleFont text-4xl font-bold text-white mb-5">
												{event.name}
											</h3>
											<div className="flex flex-col gap-4 mt-auto">
												<button
													className="font-bodyFont w-full py-3 bg-boxYellow hover:bg-secondary-dark font-medium text-black border-2 border-boxYellow transition duration-300 ease-in-out hover:-translate-y-0.5"
													onClick={() =>
														handleMoreInfoClick(event.slug.current)
													}>
													{t.button}
												</button>
												<button className="font-bodyFont w-full py-3 bg-primary hover:bg-secondary-dark text-white font-medium border-2 border-boxYellow transition duration-300 ease-in-out hover:-translate-y-0.5">
													{event.priceAmount === null
														? t.freeInOption
														: event.priceAmount
																.split("-")
																.map((price) => `€${price.trim()}`)
																.join("-")}
												</button>
											</div>
										</div>
									</motion.div>
							  ))}
					</div>
				</div>
			</div>
			<div className="bg-primary text-white py-5 ">
				{/* We Need Your Help Section */}
				<div className="relative w-full">
					<hr className="absolute left-0 right-0 border-t-2 border-boxYellow top-1/2 -translate-y-1/2" />

					{/* Container keeps content aligned */}
					<div className="relative flex max-w-7xl mx-auto px-4 md:px-8 items-center justify-center lg:justify-start">
						<h2 className="text-2xl font-bold text-white font-titleFont bg-primary px-4 relative z-10 lg:text-5xl inline-block">
							{t.helpHeading}
						</h2>
					</div>
				</div>
				<div className="max-w-7xl mx-auto px-4 md:px-8">
					<div className="bg-primary text-white">
						{/* Grid row (Text left / Image right) */}
						<motion.div
							{...fadeUp}
							className="flex flex-col items-center justify-center lg:text-center mb-10 mt-10">
							<button
								className="font-bodyFont w-full md:w-auto lg:w-[400px] lg:h-[50px]  py-3 px-6 bg-boxYellow hover:bg-secondary-dark text-black font-medium transition duration-300 ease-in-out hover:-translate-y-0.5"
								onClick={() =>
									window.open(
										"https://www.betterplace.org/en/projects/155684-neue-mulackei-e-v",
										"_blank"
									)
								}>
								{t.helpButton}
							</button>
						</motion.div>
						<motion.div
							{...fadeUp}
							className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 items-center">
							{/* Text */}
							<div className="order-1 flex justify-center items-center">
								<div className="max-w-xl">
									<p className="font-bodyFont text-md lg:text-lg font-light">
										{t.helpParagraph}
									</p>
								</div>
							</div>
							<div className="order-2 flex justify-center items-center">
								{isLoading ? (
									<div className="w-full max-w-[600px] h-[400px] bg-primary animate-pulse"></div>
								) : (
									images?.[1] && (
										<img
											src={images[1].url}
											alt={images[1].alt || "Event image"}
											className="w-full max-w-[600px] h-auto object-cover"
										/>
									)
								)}
							</div>
						</motion.div>
						<motion.div
							{...fadeUp}
							className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 items-center">
							<div className="order-2 md:order-1 flex justify-center items-center">
								{isLoading ? (
									<div className="w-full max-w-[600px] h-[400px] bg-primary animate-pulse"></div>
								) : (
									images?.[2] && (
										<img
											src={images[2].url}
											alt={images[2].alt || "Event image"}
											className="w-full max-w-[600px] h-auto object-cover"
										/>
									)
								)}
							</div>

							<div className="order-1 md:order-2 flex justify-center items-center">
								<div className="max-w-xl">
									<p className="font-bodyFont text-md lg:text-lg font-light">
										{t.helpParagraph2}
									</p>
								</div>
							</div>
						</motion.div>
						<motion.div
							{...fadeUp}
							className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 items-center">
							{/* Text */}
							<div className="order-1 flex justify-center items-center">
								<div className="max-w-xl">
									<p className="font-bodyFont text-md lg:text-lg font-light">
										{t.helpParagraph3}
									</p>
								</div>
							</div>
							<div className="order-2 flex justify-center items-center">
								{isLoading ? (
									<div className="w-full max-w-[600px] h-[400px] bg-primary animate-pulse"></div>
								) : (
									images?.[1] && (
										<img
											src={images[3].url}
											alt={images[3].alt || "Event image"}
											className="w-full max-w-[600px] h-auto object-cover"
										/>
									)
								)}
							</div>
						</motion.div>
						<motion.div
							{...fadeUp}
							className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 items-center">
							<div className="order-2 md:order-1 flex justify-center items-center">
								{isLoading ? (
									<div className="w-full max-w-[600px] h-[400px] bg-primary animate-pulse"></div>
								) : (
									images?.[2] && (
										<img
											src={images[2].url}
											alt={images[2].alt || "Event image"}
											className="w-full max-w-[600px] h-auto object-cover"
										/>
									)
								)}
							</div>

							<div className="order-1 md:order-2 flex justify-center items-center">
								<div className="max-w-xl">
									<p className="font-bodyFont text-md lg:text-lg font-light">
										{t.helpParagraph4}
									</p>
								</div>
							</div>
						</motion.div>
						<motion.div
							{...fadeUp}
							className="flex flex-col items-center justify-center lg:text-center lg:mt-16">
							<div className="max-w-2xl">
								<p className="font-bodyFont text-md lg:text-lg font-light mb-6">
									{t.helpParagraph5}
								</p>
							</div>

							<button
								className="font-bodyFont w-full md:w-auto lg:w-[400px] lg:h-[50px]  py-3 px-6 bg-boxYellow hover:bg-secondary-dark text-black font-medium transition duration-300 ease-in-out hover:-translate-y-0.5"
								onClick={() =>
									window.open(
										"https://www.betterplace.org/en/projects/155684-neue-mulackei-e-v",
										"_blank"
									)
								}>
								{t.helpButton}
							</button>
						</motion.div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
