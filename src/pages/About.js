import { useEffect, useState } from "react";
import { fetchImagesByCategory } from "../services/EventServices";
import ImageSlider from "../components/imageSlider";
import { motion } from "framer-motion";

const About = () => {
	const [venueImages, setVenueImages] = useState([]);
	const [team, setTeam] = useState([]);
	const [openCard, setOpenCard] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		const fetchImages = async () => {
			try {
				const [venueImagesData, teamImagesData] = await Promise.all([
					fetchImagesByCategory("venue"),
					fetchImagesByCategory("team"),
				]);
				setVenueImages(venueImagesData);
				

				const fullTeam = [
					{
						id: 1,
						name: "Julius Bahner",
						role: "Head of Chess",
						image: teamImagesData[3]?.url,
						bio: "Julius Bahner was born in Munich in 1990. He is an academic Philosopher who hosts and develops humanistic events in the Mulackei. Being a passionate Chess Player, who you used to play for the first Team of the legendary SC Kreuzberg alongside Grandmasters and German Champions, he is also offering a weekly Chess Class for Children as well as hosting a monthly Chess Tournament in the Mulackei called CHAZZ, in which the games are accompanied by live Jazz Music.Alice leads the creative vision of the team and ensures artistic integrity across all projects.",
						email: "alice@example.com",
					},
					{
						id: 2,
						name: "Frida Grubba",
						role: "Head of Heads",
						image: teamImagesData[1]?.url,
						bio: "Frida Grubba was born in Berlin in 1992. From 2015 to 2022, Frida studied stage and costume design at the Weißensee Academy of Art and Design, where she graduated with a diploma in fine art. In 2019/20, Frida was awarded a scholarship from the Deutschland/Mart Stam program...",
						email: "ben@example.com",
					},
					{
						id: 3,
						name: "Oisín Large",
						role: "Community Outreach",
						image: teamImagesData[4]?.url,
						bio: "Born in 1998 in London, Oisín is a strategic professional with a strong background in operations, client relations, and project leadership...",
						email: "chloe@example.com",
					},
					{
						id: 4,
						name: "Hannah Ugé",
						role: "Technical Coordinator",
						image: teamImagesData[2]?.url,
						bio: "Hannah was born in 1997 at the Baltic Sea and grew up in Berlin...",
						email: "david@example.com",
					},
					{
						id: 5,
						name: "Aurelien Falconnet",
						role: "Macgyver",
						image: teamImagesData[0]?.url,
						bio: "Aurelien is a musician, sound engineer and producer. Born in Paris and trained as a pianist from an early age...",
						email: "david@example.com",
					},
				];

				setTeam(fullTeam);
			} catch (error) {
				console.error("Error fetching images:", error);
			} finally {
				setIsLoading(false);
			}
		};
		fetchImages();
	}, []);

	const fadeUp = {
		initial: { opacity: 0, y: 40 },
		whileInView: { opacity: 1, y: 0 },
		transition: { duration: 1, ease: "easeOut" },
		viewport: { once: true, amount: 0.2 },
	};
	venueImages.shift();
	console.log("Venue Images:", venueImages); // Debugging line to check the images
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
						About Us
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
							The Mulackei is a non-profit association dedicated to art,
							readings, workshops, concerts and other cultural events. <br />
							Our goal is to create a space for encounters and creative exchange
							that brings together people from different backgrounds.
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
							The Name „Mulackei" originates from a legendary Restaurant/Bar at
							Mulackstraße 15, which was the second home for many of Berlin’s
							most famous artists and con-artists, as well as for outsiders of
							the society in general. In the 40s, the courageous Minna Mahlich
							hid trans- and homosexuals from the Nazis in the Mulackei.
							Mulackei was also used as a pars pro toto name for the whole
							neighborhood surrounding Mulackstraße.
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
							Our Mulackei is at Mulackstraße 27, across the street from Sodtkes
							Restaurant, which was been replaced by shiny apartment buildings a
							long time ago. We want to honour the tradition of our historical
							neighbours by offering a tolerant gathering place for both
							residents and visitors of the area. But we are not a restaurant,
							nor a bar. Instead, we focus on artistic and cultural nourishment.
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
			<div className="bg-primary text-white py-5 px-6">
				<div className="relative flex items-center mb-4 mt-3 animate-fade animate-duration-1000">
					<hr className="flex-grow border-t-2 border-boxYellow lg:w-auto lg:hidden" />
					<h2 className="px-4 text-3xl font-bold text-white font-titleFont whitespace-nowrap lg:text-5xl lg:px-0 lg:pr-4 lg:whitespace-normal">
						Meet the Team
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
