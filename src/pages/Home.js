import { useEffect } from "react";
import Mulackei from "../assets/images/Mulackei-1.jpg";

const Home = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div className="relative min-h-screen">
			<div
				className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-xs"
				style={{ backgroundImage: `url(${Mulackei})` }}>
				<div className="absolute inset-0 bg-black/50"></div>{" "}
				{/* Dark Overlay */}
			</div>
			<section className="relative flex flex-col items-center justify-center min-h-[500px] text-center p-6">
				<h1 className="animate-fade-up text-4xl font-bold mb-4 text-white">
					Welcome to Mulackei!
				</h1>
				<p className="animate-fade-up text-lg mb-6  text-white">
					Your hub for live music, art, and more.
				</p>
			</section>
		</div>
	);
};

export default Home;
