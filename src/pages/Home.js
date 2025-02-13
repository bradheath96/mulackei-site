import { useEffect } from "react";
import Mulackei from "../assets/images/Mulackei-1.jpg";

const Home = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className=" relative">
			{/* Hero Section with Background Image */}
			<div className="relative min-h-[30vh] overflow-hidden">
				<div
					className="bg-primary absolute inset-0 bg-cover bg-center bg-no-repeat scale-200 transform"
					style={{ backgroundImage: `url(${Mulackei})` }}>
					<div className="absolute inset-0 bg-black/50"></div>{" "}
					{/* Dark Overlay */}
				</div>

				{/* Text Overlay */}
				<section className="relative flex flex-col items-center justify-center min-h-[30vh] text-center p-6">
					<h1 className="animate-fade animate-duration-1000 font-titleFont text-3xl lg:text-6xl font-bold mb-4 text-white">
						Welcome to Mulackei
					</h1>
				</section>
			</div>

			{/* About Us Section */}
			<div className="bg-primary text-white py-5 px-6 text-left">
				<p className="animate-fade animate-duration-1000 max-w-2xl mx-auto text-md font-bodyFont">
					The Mulackei is a non-profit association dedicated to art, readings,
					workshops, concerts and other cultural events. Our goal is to create a
					space for encounters and creative exchange that brings together people
					from different backgrounds.
				</p>
			</div>
		</div>
	);
};

export default Home;
