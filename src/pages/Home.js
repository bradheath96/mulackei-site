import { useEffect, useState } from "react";
import { fetchEvents } from "../services/EventServices";
import { useNavigate } from "react-router-dom";
import Mulackei from "../assets/images/Mulackei-1.jpg";

const Home = () => {
	const [events, setEvents] = useState([]);
	const [isImageLoaded, setIsImageLoaded] = useState(false); // State for image loading
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
		<div className="bg-primary relative ">
			{/* Hero Section with Background Image */}
			<div className="relative min-h-[30vh] lg:min-h-[70vh] overflow-hidden animate-fade animate-duration-500">
				{/* Skeleton Placeholder */}
				{!isImageLoaded && (
					<div className="absolute inset-0 bg-gray-800 animate-pulse"></div>
				)}

				{/* Background Image */}
				<img
					src={Mulackei}
					alt="Venue"
					className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
						isImageLoaded ? "opacity-100" : "opacity-0"
					}`}
					onLoad={() => setIsImageLoaded(true)}
				/>

				{/* Dark Overlay */}

				{/* Text Overlay */}
				{/* <section className="relative flex flex-col items-center justify-center min-h-[30vh] text-center p-6">
					<h1 className="animate-fade animate-duration-1000 font-titleFont text-3xl lg:text-6xl font-bold mb-4 text-white">
						Welcome to Mulackei
					</h1>
				</section> */}
			</div>

			<hr className="border-t-2 border-boxYellow" />

			{/* Upcoming Events Section */}
			<div className="bg-primary text-white py-5 px-6">
				<div className="relative flex items-center mb-8 mt-3 animate-fade animate-duration-500">
					<hr className="flex-grow border-t-2 border-boxYellow lg:w-auto lg:hidden" />
					<h2 className="px-4 text-3xl font-bold text-white font-titleFont whitespace-nowrap lg:text-5xl lg:px-0 lg:pr-4 lg:whitespace-normal">
						Coming Up
					</h2>
					<hr className="flex-grow border-t-2 border-boxYellow lg:w-auto" />
				</div>
				<div className="animate-fade animate-duration-1000 grid grid-cols-1 gap-6 lg:grid-cols-4 lg:gap-8 mx-auto">
					{events.map((event, index) => (
						<div key={index} className="bg-primary flex flex-col min-h-[400px]">
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
								{/* Buttons */}
								<div className="flex flex-col gap-4 mt-auto">
									<button
										className="font-bodyFont w-full py-3 bg-boxYellow hover:bg-secondary-dark font-medium text-black border-2 border-boxYellow transition duration-300 ease-in-out hover:-translate-y-0.5 hover:-translate-x-0.5"
										onClick={() => handleMoreInfoClick(event.slug.current)}>
										More Info
									</button>
									<button className="font-bodyFont w-full py-3 bg-primary hover:bg-secondary-dark text-white font-medium border-2 border-boxYellow transition duration-300 ease-in-out hover:-translate-y-0.5 hover:-translate-x-0.5">
										{event.priceAmount === null
											? "Free In!"
											: event.priceAmount
													.split("-")
													.map((price) => `€${price.trim()}`)
													.join("-")}
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
