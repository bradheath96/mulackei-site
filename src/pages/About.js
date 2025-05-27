import { use, useEffect, useState } from "react";
import {
	fetchVenueImages,
	fetchAboutUsImages,
} from "../services/EventServices";
import ImageSlider from "../components/imageSlider";
import Isobel from "../assets/images/Isobel.png";
import Bass from "../assets/images/Bass.jpg";
import { motion } from "framer-motion";
import { image } from "framer-motion/client";

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	const [imagesUrls, setImagesUrls] = useState([]);
	const [openCard, setOpenCard] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	imagesUrls.shift();

	const fadeUp = {
		initial: { opacity: 0, y: 40 },
		whileInView: { opacity: 1, y: 0 },
		transition: { duration: 1, ease: "easeOut" },
		viewport: { once: true, amount: 0.2 },
	};

	const team = [
		{
			id: 1,
			name: "Julius Bahner",
			role: "Head of Chess",
			image: Isobel,
			bio: "Julius Bahner was born in Munich in 1990. He is an academic Philosopher who hosts and develops humanistic events in the Mulackei. Being a passionate Chess Player, who you used to play for the first Team of the legendary SC Kreuzberg alongside Grandmasters and German Champions, he is also offering a weekly Chess Class for Children as well as hosting a monthly Chess Tournament in the Mulackei called CHAZZ, in which the games are accompanied by live Jazz Music.Alice leads the creative vision of the team and ensures artistic integrity across all projects.",
			email: "alice@example.com",
		},
		{
			id: 2,
			name: "Frida Grubba",
			role: "Head of Heads",
			image: Bass,
			bio: "Frida Grubba was born in Berlin in 1992. From 2015 to 2022, Frida studied stage and costume design at the Weißensee Academy of Art and Design, where she graduated with a diploma in fine art. In 2019/20, Frida was awarded a scholarship from the Deutschland/Mart Stam program. Since 2014, Frida Grubba has worked as a freelance stage and costume designer on both independent and state theatre productions. Her portfolio includes work on The Last Dance and The Last Dance. B., as well as numerous children’s and youth theatre productions such as The Ugly Duckling, I Am Vincent and I Am Not Afraid, and A Week Full of SAMStage at Atze Music Theatre. Frida also contributed to opera productions including The Smart One (HMT Leipzig), The Bat (with the opera collective Con Tutti e.V. at Heimathafen Neukölln), and Carmen, Dido & Aeneas, and Hansel and Gretel (music theatre workshops of HFM+KHB Berlin). Additional projects include The Dragon (Theater Wolkow, Mecklenburg-Vorpommern), the immersive theatre performance XYZA (Karmanoia Immersive Art), the short films Evolin (FH Potsdam) and Stiche (HFF Potsdam), the music video Barely Real Snippet (Pulp Talks), and the photo series Out (amoresproductions)",
			email: "ben@example.com",
		},
		{
			id: 3,
			name: "Oisín Large",
			role: "Community Outreach",
			image: Isobel,
			bio: "Born in 1998 in London, Oisín is a strategic professional with a strong background in operations, client relations, and project leadership. Holding a Bachelor of Applied Sciences in Media & Communication Management from Macromedia University of Applied Sciences in Berlin, Oisín currently supports Mulackei e.V. in areas such as concerts, chess, writing, social media, and marketing. His career highlights include significant achievements at WeWork and Futurepath, where he improved operational efficiency and client satisfaction. Fluent in English and German, Oisín is also passionate about rugby, poetry, photography, and music. He is pursuing dreams of writing a novel, becoming a drone pilot, and sharing his creative talents with the world, with an ultimate goal of founding a sustainability-focused organization",
			email: "chloe@example.com",
		},
		{
			id: 4,
			name: "Hannah Ugé",
			role: "Technical Coordinator",
			image: Bass,
			bio: "Hannah was born in 1997 at the Baltic Sea and grew up in Berlin. She holds a Bachelor’s degree in Sociolinguistics, Philosophy, and English Philology from the Free University of Berlin and is currently pursuing her Master’s degrees in Linguistics and Applied Cultural Studies in Berlin and Potsdam. Hannah has completed internships in directing for documentary film and theater and teaches German as a foreign language. Her passion is dedicated to writing and engaging with societal issues in creative and artistic formats.",
			email: "david@example.com",
		},
		{
			id: 5,
			name: "Aurelien Falconnet",
			role: "Macgyver",
			image: Bass,
			bio: "Aurelien is a musician, sound engineer and producer. Born in Paris and trained as a pianist from an early age, he diversified his approach to music with drums, guitar, vocals and finally specialised as a bass player. Growing up in the hectic and multicultural Parisian music scene, he quickly fell in love with African and Afro-influenced music. Touring in France & Europe with various Afrobeat, Reggae, Soul, Jazz and Hip-hop projects, he had the opportunity to meet some of the most influential musicians of the last decades. In 2016, he moved to Berlin and has since worked as a music producer, sound engineer and live musician for a wide range of German and international artists. He is one of the founder of Mulackei and takes care of the day-to-day operations.",
			email: "david@example.com",
		},
	];

	useEffect(() => {
		const fetchImages = async () => {
			const images = await fetchVenueImages();
			const urls = images.map((image) => image.url);
			setImagesUrls(urls);
			setIsLoading(false);
		};
		fetchImages();
	}, []);
	console.log(imagesUrls);
	return (
		<div className="bg-primary lg:flex lg:flex-col max-h-full justify-start min-h-screen ">
			<div className="w-full h-[500px] sm:h-[500px] lg:border-b-2 lg:border-boxYellow animate-fade animate-duration-1000">
				<ImageSlider imageUrls={imagesUrls.slice(0, -3)} />
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
								src={imagesUrls[10]}
								alt="Mulackei Venue"
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
								src={imagesUrls[11]}
								alt="Mulackei Venue"
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
								src={imagesUrls[9]}
								alt="Mulackei Venue"
								className="w-full max-w-[600px] h-auto object-cover"
							/>
						)}
					</div>
				</motion.div>
			</div>
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
