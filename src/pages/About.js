import { useEffect, useState } from "react";
import { fetchImagesByCategory } from "../services/EventServices";
import ImageSlider from "../components/imageSlider";
import { motion } from "framer-motion";
import { translations } from "../services/translations";

const About = ({ currentLang }) => {
	const [venueImages, setVenueImages] = useState([]);
	const [team, setTeam] = useState([]);
	const [openCard, setOpenCard] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const t = translations.about[currentLang];

	useEffect(() => {
		const fetchImages = async () => {
			try {
				const [venueImagesData, teamImagesData] = await Promise.all([
					fetchImagesByCategory("venue"),
					fetchImagesByCategory("team"),
				]);
				setVenueImages(venueImagesData);
				const teamEntries = t.team.map((entry, index) => {
					const key = Object.keys(entry)[0];
					const { name, role, bio } = entry[key];
					return {
						id: index + 1,
						name,
						role,
						image: teamImagesData[index]?.url,
						bio,
						email: "", // Optional
					};
				});
				setTeam(teamEntries);
			} catch (error) {
				console.error("Error fetching images:", error);
			} finally {
				setIsLoading(false);
			}
		};
		fetchImages();
	}, [currentLang]); // <-- Trigger refresh if language changes

	const fadeUp = {
		initial: { opacity: 0, y: 40 },
		whileInView: { opacity: 1, y: 0 },
		transition: { duration: 1, ease: "easeOut" },
		viewport: { once: true, amount: 0.2 },
	};
	venueImages.shift();
	return (
		<div className="bg-primary lg:flex lg:flex-col max-h-full justify-start min-h-screen ">
			<div className="w-full h-[500px] sm:h-[500px] lg:border-b-2 lg:border-boxYellow animate-fade animate-duration-1000">
				<ImageSlider imageData={venueImages.slice(0, -3)} />
			</div>

			<hr className="border-t-4 border-boxYellow" />

			{/* About Us Section */}
			

			<div className="bg-primary text-white py-5">
				{/* Heading with full-width HR */}
				<div className="relative w-full animate-fade animate-duration-1000">
					<hr className="absolute left-0 right-0 border-t-2 border-boxYellow top-1/2 -translate-y-1/2" />
					<div className="relative flex max-w-7xl mx-auto px-4 md:px-8 items-center justify-center lg:justify-start">
						<h2 className="text-2xl font-bold text-white font-titleFont bg-primary px-4 relative z-10 lg:text-5xl inline-block">
							{t.heading}
						</h2>
					</div>
				</div>

				{/* Content under heading */}
				<div className="max-w-7xl mx-auto px-4 md:px-8 pt-6">
					{/* First Row */}
					<motion.div
						{...fadeUp}
						className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6 items-center">
						<div className="order-1 flex justify-center items-center">
							<p className="font-bodyFont text-md lg:text-lg font-light max-w-xl md:text-left">
								{t.paragraph1}
							</p>
						</div>
						<div className="order-2 flex justify-center items-center">
							{isLoading ? (
								<div className="w-full max-w-[600px] h-[400px] bg-primary animate-pulse"></div>
							) : (
								<img
									src={venueImages[10]?.url}
									alt={venueImages[10]?.altText}
									className="w-full max-w-[600px] h-auto object-cover"
								/>
							)}
						</div>
					</motion.div>

					{/* Second Row */}
					<motion.div
						{...fadeUp}
						className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6 items-center">
						<div className="order-1 md:order-2 flex justify-center items-center">
							<p className="font-bodyFont text-md lg:text-lg font-light max-w-xl md:text-left">
								{t.paragraph2}
							</p>
						</div>
						<div className="order-2 md:order-1 flex justify-center items-center">
							{isLoading ? (
								<div className="w-full max-w-[600px] h-[400px] bg-primary animate-pulse"></div>
							) : (
								<img
									src={venueImages[11]?.url}
									alt={venueImages[11]?.altText}
									className="w-full max-w-[600px] h-auto object-cover"
								/>
							)}
						</div>
					</motion.div>

					{/* Third Row */}
					<motion.div
						{...fadeUp}
						className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
						<div className="order-1 flex justify-center items-center">
							<p className="font-bodyFont text-md lg:text-lg font-light max-w-xl md:text-left">
								{t.paragraph3}
							</p>
						</div>
						<div className="order-2 flex justify-center items-center">
							{isLoading ? (
								<div className="w-full max-w-[600px] h-[400px] bg-primary animate-pulse"></div>
							) : (
								<img
									src={venueImages[12]?.url}
									alt={venueImages[12]?.altText}
									className="w-full max-w-[600px] h-auto object-cover"
								/>
							)}
						</div>
					</motion.div>
				</div>
			</div>

			{/* Team Section */}
			<div className="bg-primary text-white py-5">
				<div className="relative w-full animate-fade animate-duration-1000">
					<hr className="absolute left-0 right-0 border-t-2 border-boxYellow top-1/2 -translate-y-1/2" />
					<div className="relative flex max-w-7xl mx-auto px-4 md:px-8 items-center justify-center lg:justify-start">
						<h2 className="text-2xl font-bold text-white font-titleFont bg-primary px-4 relative z-10 lg:text-5xl inline-block">
							{t.teamHeading}
						</h2>
					</div>
				</div>
				<div className="bg-primary text-white py-5 px-4">
					<div className="flex overflow-x-auto space-x-6 snap-x snap-mandatory pb-4">
						{team.map((member, index) => (
							<motion.div
								key={member.id}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 1, delay: index * 0.1 }}
								viewport={{ once: true, amount: 0.3 }}
								className="snap-center flex-shrink-0 w-full max-w-[90vw] sm:max-w-[500px] bg-secondary p-6 shadow-lg">
								<img
									src={member.image}
									alt={member.name}
									className="w-full h-64 object-cover mb-4"
								/>
								<h3 className="text-2xl font-titleFont font-bold text-white mb-1">
									{member.name}
								</h3>
								<p className="text-sm font-bodyFont text-boxYellow mb-2">
									{member.role}
								</p>
								<p className="text-sm font-bodyFont text-white">
									{openCard === index
										? member.bio
										: `${member.bio.slice(0, 100)}...`}
								</p>
								<button
									className="text-sm font-bodyFont text-boxYellow underline mt-2"
									onClick={() =>
										setOpenCard(openCard === index ? null : index)
									}>
									{openCard === index ? "Hide Bio" : "Read More"}
								</button>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
