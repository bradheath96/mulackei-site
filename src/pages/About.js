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
			const urls = images.map(image => image.url)
			setImagesUrls(urls);
		};
		fetchImages();
	}, []);
	console.log(imagesUrls);
	return (
		<div className="bg-primary flex flex-col items-center justify-center min-h-screen">
			<div className="max-w-[800px] width-full height-[250px] m-0-auto border-2 border-boxYellow">
				<ImageSlider imageUrls={imagesUrls} />
			</div>
			
		</div>
	);
};

export default About;
