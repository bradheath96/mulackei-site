import { useEffect, useState } from "react";
import { fetchVenueImages } from "../services/EventServices";
import ImageSlider from "../components/imageSlider";

const About = () => {
	const [imagesUrls, setImagesUrls] = useState([]);

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
		<div className="bg-primary lg:flex lg:flex-col max-h-full  justify-start min-h-screen ">
			{/* Mobile: 2/3 of the screen height | Desktop: Original size */}
			<div className="w-full h-[66vh] sm:h-[500px]  lg:border-b-2 lg:border-boxYellow">
				<ImageSlider imageUrls={imagesUrls} />
			</div>
			<div className="bg-primary text-white py-5 px-6  ">
				<div className="relative flex items-center mb-8 mt-3 animate-fade animate-duration-1000">
					<hr className="flex-grow border-t-2 border-boxYellow lg:w-auto lg:hidden" />

					<h2 className="px-4 text-3xl font-bold text-white font-titleFont whitespace-nowrap lg:text-5xl lg:px-0 lg:pr-4 lg:whitespace-normal">
						About Us
					</h2>
					<hr className="flex-grow border-t-2 border-boxYellow lg:w-auto" />
				</div>
			</div>
		</div>
	);
};

export default About;
