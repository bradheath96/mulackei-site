import { useEffect, useState } from "react";
import { fetchEvents } from "../services/EventServices";
import { useNavigate } from "react-router-dom";
import Mulackei from "../assets/images/Mulackei-1.jpg";

const Home = () => {
	const [events, setEvents] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		const currentDate = new Date();
		fetchEvents()
			.then((data) => {
				const upcomingEvents = data.filter(
					(event) => new Date(event.date) > currentDate
				);
				setEvents(upcomingEvents.slice(0, 8));
			})
			.catch(console.error);
	}, []);

	const handleMoreInfoClick = (slug) => {
		navigate(`/events/${slug}`);
	};

	return (
		<div className=" relative">
			{/* Hero Section with Background Image */}
			<div className="relative min-h-[30vh] lg:min-h-[54vh] overflow-hidden">
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
			<hr className="border-t-2 border-boxYellow" />

			{/* About Us Section */}
			<div className="bg-primary text-white py-3 lg:py-8 px-6 text-left">
				<p className="lg:text-center animate-fade animate-duration-1000 max-w-2xl mx-auto text-sm lg:text-lg font-bodyFont">
					The Mulackei is a non-profit association dedicated to art, readings,
					workshops, concerts and other cultural events. Our goal is to create a
					space for encounters and creative exchange that brings together people
					from different backgrounds.
				</p>
			</div>

			<hr className="border-t-2 border-boxYellow" />

			{/* Upcoming Events Section */}
			<div className="bg-primary text-white py-5 px-6  ">
				<div className="relative flex items-center mb-8 mt-3 animate-fade animate-duration-1000">
					<hr className="flex-grow border-t-2 border-boxYellow lg:w-auto lg:hidden" />

					<h2 className="px-4 text-3xl font-bold text-white font-titleFont whitespace-nowrap lg:text-5xl lg:px-0 lg:pr-4 lg:whitespace-normal">
						Coming Up
					</h2>
					<hr className="flex-grow border-t-2 border-boxYellow lg:w-auto" />
				</div>
				<div className="animate-fade animate-duration-1000 grid grid-cols-1 gap-6 lg:grid-cols-4 lg:gap-8 mx-auto">
					{events.map((event) => (
						<div
							key={event.id}
							className="bg-primary flex flex-col min-h-[400px]">
							{/* Ensure equal height */}
							{/* Event Image */}
							{event.image && (
								<img
									src={event.image.asset.url}
									alt={event.name}
									className="w-full h-48 object-cover"
								/>
							)}
							{/* Event Details */}
							<div className="flex flex-col flex-grow pt-4">
								{" "}
								{/* Allows content to expand */}
								<div>
									<p className="text-lg font-light text-white font-bodyFont">
										{new Date(event.date).toLocaleDateString(undefined, {
											weekday: "short",
											month: "short",
											day: "numeric",
										})}
									</p>
									<h3 className="font-titleFont text-4xl font-bold text-white mb-5">
										{event.name}
									</h3>
								</div>
								{/* Buttons always at the bottom */}
								<div className="flex flex-col gap-4 mt-auto">
									{" "}
									{/* Pushes to bottom */}
									<button
										className="font-bodyFont w-full py-3 bg-boxYellow hover:bg-secondary-dark font-medium text-black border-2 border-boxYellow"
										onClick={() => handleMoreInfoClick(event.slug.current)}>
										More Info
									</button>
									<button className="font-bodyFont w-full py-3 bg-primary hover:bg-secondary-dark text-white font-medium border-2 border-boxYellow">
										Free In!
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Home;
