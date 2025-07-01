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
				

				const fullTeam = [
					{
						id: 1,
						name: "Julius Bahner",
						role: "Head of Chess",
						image: teamImagesData[3]?.url,
						bio: "Julius Bahner was born in Munich in 1990. He is an academic Philosopher who hosts and develops humanistic events in the Mulackei. Being a passionate Chess Player, who you used to play for the first Team of the legendary SC Kreuzberg alongside Grandmasters and German Champions, he is also offering a weekly Chess Class for Children as well as hosting a monthly Chess Tournament in the Mulackei called CHAZZ, in which the games are accompanied by live Jazz Music.",
						email: "alice@example.com",
					},
					{
						id: 2,
						name: "Frida Grubba",
						role: "Head of Heads",
						image: teamImagesData[1]?.url,
						bio: "She was born in Berlin in 1992. From 2015 to 2022, she studied stage and costume design at the Weißensee Academy of Art and Design, graduating with a diploma in fine art. In 2019/20, she received a scholarship from the Deutschland/Mart Stam scholarship. Since 2014, she has worked as a freelance stage and costume designer for both independent and state theater productions.",
						email: "ben@example.com",
					},
					{
						id: 3,
						name: "Oisín Large",
						role: "Community Outreach",
						image: teamImagesData[4]?.url,
						bio: "Born in 1998 in London, Oisín is a strategic professional with a strong background in operations, client relations, and project leadership. Holding a Bachelor of Applied Sciences in Media & Communication Management from Macromedia University of Applied Sciences in Berlin, Oisín currently supports Mulackei e.V. in areas such as concerts, chess, writing, social media, and marketing. His career highlights include significant achievements at WeWork and Futurepath, where he improved operational efficiency and client satisfaction. Fluent in English and German, Oisín is also passionate about rugby, poetry, photography, and music. He is pursuing dreams of writing a novel, becoming a drone pilot, and sharing his creative talents with the world, with an ultimate goal of founding a sustainability-focused organization.",
						email: "chloe@example.com",
					},
					{
						id: 4,
						name: "Hannah Ugé",
						role: "Technical Coordinator",
						image: teamImagesData[2]?.url,
						bio: "Hannah was born in 1997 at the Baltic Sea and grew up in Berlin. She holds a Bachelor’s degree in Sociolinguistics, Philosophy, and English Philology from the Free University of Berlin and is currently pursuing her Master’s degrees in Linguistics and Applied Cultural Studies in Berlin and Potsdam. Hannah has completed internships in directing for documentary film and theater and teaches German as a foreign language. Her passion is dedicated to writing and engaging with societal issues in creative and artistic formats.",
						email: "david@example.com",
					},
					{
						id: 5,
						name: "Aurelien Falconnet",
						role: "Macgyver",
						image: teamImagesData[0]?.url,
						bio: "Aurelien is a musician, sound engineer and producer. Born in Paris and trained as a pianist from an early age, he diversified his approach to music with drums, guitar, vocals and finally specialised as a bass player. Growing up in the hectic and multicultural Parisian music scene, he quickly fell in love with African and Afro-influenced music. Touring in France & Europe with various Afrobeat, Reggae, Soul, Jazz and Hip-hop projects, he had the opportunity to meet some of the most influential musicians of the last decades. In 2016, he moved to Berlin and has since worked as a music producer, sound engineer and live musician for a wide range of German and international artists. He is one of the founder of Mulackei and takes care of the day-to-day operations.",
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
