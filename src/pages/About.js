import { useEffect, useState } from "react";
import { fetchVenueImages } from "../services/EventServices";
import ImageSlider from "../components/imageSlider";
import Mulcakei3 from "../assets/images/Mulackei-3.webp"
import Mulackei4 from "../assets/images/Mulackei-4.webp"
import Mulackei5 from "../assets/images/Mulackei-5.jpg"

const About = () => {
	const [imagesUrls, setImagesUrls] = useState([]);
	imagesUrls.shift();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		const fetchImages = async () => {
			const images = await fetchVenueImages();
			const urls = images.map((image) => image.url);
			setImagesUrls(urls);
		};
		fetchImages();
	}, []);

	return (
		<div className="bg-primary lg:flex lg:flex-col max-h-full justify-start min-h-screen">
			<div className="w-full h-[66vh] sm:h-[500px] lg:border-b-2 lg:border-boxYellow">
				<ImageSlider imageUrls={imagesUrls} />
			</div>

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
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6 items-center animate-fade animate-duration-1000">
					{/* Text First on all screens */}
					<div className="order-1 flex justify-center items-center">
						<p className="font-bodyFont text-md lg:text-lg font-light max-w-xl md:text-left">
							The Mulackei is a non-profit association dedicated to art,
							readings, workshops, concerts and other cultural events. <br />
							Our goal is to create a space for encounters and creative exchange
							that brings together people from different backgrounds.
						</p>
					</div>

					{/* Image Second on all screens */}
					<div className="order-2 flex justify-center items-center">
						<img
							src={Mulcakei3}
							alt="Mulackei venue"
							className="w-full max-w-[600px] h-auto object-cover"
						/>
					</div>
				</div>

				{/* Second Row */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6 items-center animate-fade animate-duration-1000">
					{/* Text First on mobile, second on md+ */}
					<div className="order-1 md:order-2 flex justify-center items-center">
						<p className="font-bodyFont text-md lg:text-lg font-light max-w-xl md:text-left">
							The name “Mulackei" originates from a legendary Restaurant/Bar at
							Mulackstraße 15, which was the second home for many of Berlin’s
							most famous artists and con-artists, as well as for outsiders of
							society in general. In the 40s, the courageous Minna Mahlich hid
							trans- and homosexuals from the Nazis in the Mulackei. It was also
							used as a name for the neighborhood around Mulackstraße.
						</p>
					</div>

					{/* Image Second on mobile, first on md+ */}
					<div className="order-2 md:order-1 flex justify-center items-center">
						<img
							src={Mulackei4}
							alt="Placeholder for space"
							className="w-full max-w-[600px] h-auto object-cover"
						/>
					</div>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6 items-center animate-fade animate-duration-1000">
					{/* Text First on mobile, second on md+ */}
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

					{/* Image Second on mobile, first on md+ */}
					<div className="order-2 flex justify-center items-center">
						<img
							src={Mulackei5}
							alt="Placeholder for space"
							className="w-full max-w-[600px] h-auto object-cover"
						/>
					</div>
				</div>
			</div>
			<div className="bg-primary text-white py-5 px-6">
				<div className="relative flex items-center mb-4 mt-3 animate-fade animate-duration-1000">
					<hr className="flex-grow border-t-2 border-boxYellow lg:w-auto lg:hidden" />
					<h2 className="px-4 text-3xl font-bold text-white font-titleFont whitespace-nowrap lg:text-5xl lg:px-0 lg:pr-4 lg:whitespace-normal">
						Meet the Team
					</h2>
					<hr className="flex-grow border-t-2 border-boxYellow lg:w-auto" />
				</div>
			</div>
		</div>
	);
};

export default About;
