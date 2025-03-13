import { useEffect, useState } from "react";
import { fetchVenueImages } from "../services/EventServices";
import ImageSlider from "../components/imageSlider";

const About = () => {
	const [imagesUrls, setImagesUrls] = useState([]);

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
		<div className="bg-primary flex flex-col items-center justify-center h-screen">
			<ImageSlider imageUrls={imagesUrls} />
		</div>
	);
};

export default About;
