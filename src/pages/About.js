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
	}, [currentLang]); 
	const fadeUp = {
		initial: { opacity: 0, y: 40 },
		whileInView: { opacity: 1, y: 0 },
		transition: { duration: 1, ease: "easeOut" },
		viewport: { once: true, amount: 0.2 },
	};
	venueImages.splice(0, 2);;
	return (
		<div className="bg-primary lg:flex lg:flex-col max-h-full justify-start min-h-screen ">
			<div className="w-full h-[500px] sm:h-[500px] lg:border-b-2 lg:border-boxYellow animate-fade animate-duration-1000">
				<ImageSlider imageData={venueImages.slice(0, -3)} />
			</div>

			<hr className="border-t-2 border-boxYellow" />

			{/* About Us Heading */}
			<div className="bg-primary text-white pt-5 px-6">
				<div className="relative flex items-center mb-4 mt-3 animate-fade animate-duration-1000">
					<hr className="flex-grow border-t-2 border-boxYellow lg:w-auto lg:hidden" />
					<h2 className="px-4 text-3xl font-bold text-white font-titleFont whitespace-nowrap lg:text-5xl lg:px-0 lg:pr-4 lg:whitespace-normal">
						{t.heading}
					</h2>
					<hr className="flex-grow border-t-2 border-boxYellow lg:w-auto" />
				</div>
			</div>

			{/* First Row - Text Left, Image Right */}
			<div className="bg-primary text-white px-4 md:px-6 lg:px-8 py-4 ">
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
				<motion.div
					{...fadeUp}
					className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6 items-center">
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
								src={venueImages[9]?.url}
								alt={venueImages[9]?.altText}
								className="w-full max-w-[600px] h-auto object-cover"
							/>
						)}
					</div>
				</motion.div>
			</div>

			{/* Team Section */}
			<div className="bg-primary text-white py-2 px-6">
				<div className="relative flex items-center mb-4 mt-2 animate-fade animate-duration-1000">
					<hr className="flex-grow border-t-2 border-boxYellow lg:w-auto lg:hidden" />
					<h2 className="px-4 text-[20px] font-bold text-white font-titleFont whitespace-nowrap lg:text-5xl lg:px-0 lg:pr-4 lg:whitespace-normal">
						{t.teamHeading}
					</h2>
					<hr className="flex-grow border-t-2 border-boxYellow lg:w-auto" />
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
