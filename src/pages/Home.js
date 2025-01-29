import { useEffect } from "react";

const Home = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div>
			<section className="flex flex-col items-center justify-center min-h-screen p-12 md:p-14 bg-primary">
				<h1 className="text-4xl font-bold mb-4 text-white">
					Welcome to Mulackei!
				</h1>
				<p className="text-lg mb-6  text-white">
					Your hub for live music, art, and more.
				</p>
			</section>
		</div>
	);
};

export default Home;
