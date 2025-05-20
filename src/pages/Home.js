import { useEffect, useState } from "react";
import { fetchEvents, fetchSingleVenueImage } from "../services/EventServices";
import { useNavigate } from "react-router-dom";


const Home = () => {
	const [events, setEvents] = useState([]);
	const [imageUrl, setImageUrl] = useState(null); 
	const [isLoading, setIsLoading] = useState(true); 
	const [isImageLoaded, setIsImageLoaded] = useState(false);
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
				setIsLoading(false); // Stop loading when data is fetched
			})
			.catch(console.error);
	}, []);

	const handleMoreInfoClick = (slug) => {
		navigate(`/events/${slug}`);
	};

	useEffect(() => {
		const loadImage = async () => {
			const url = await fetchSingleVenueImage("Mulackei_2.webp"); // Replace with any filename
			setImageUrl(url);
		};

		loadImage();
	}, []);

	return (
		<div className="bg-primary relative min-h-screen">
			{/* Hero Section with Background Image */}
			<div className="relative min-h-[30vh] lg:min-h-[70vh] overflow-hidden animate-fade animate-duration-1500">
				{!isImageLoaded && (
					<div className="absolute inset-0 bg-primary animate-pulse"></div>
				)}
				<img
					src={imageUrl}
					alt="Venue"
					className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
						isImageLoaded ? "opacity-100" : "opacity-0"
					}`}
					onLoad={() => setIsImageLoaded(true)}
				/>
			</div>

			<hr className="border-t-2 border-boxYellow" />

			{/* Upcoming Events Section */}
			<div className="bg-primary text-white py-5 px-6">
				<div className="relative flex items-center mb-8 mt-3 ">
					<hr className="flex-grow border-t-2 border-boxYellow lg:w-auto lg:hidden" />
					<h2 className="px-4 text-3xl font-bold text-white font-titleFont whitespace-nowrap lg:text-5xl lg:px-0 lg:pr-4 lg:whitespace-normal">
						Coming Up
					</h2>
					<hr className="flex-grow border-t-2 border-boxYellow lg:w-auto" />
				</div>

				<div className="animate-fade animate-duration-1000 grid grid-cols-1 gap-6 lg:grid-cols-4 lg:gap-8 mx-auto">
					{/* Skeleton Loader while fetching events */}
					{isLoading
						? [...Array(4)].map((_, index) => (
								<div
									key={index}
									className="bg-primary flex flex-col min-h-[400px] animate-pulse">
									<div className="w-full h-48 bg-primary"></div>
									<div className="flex flex-col flex-grow p-4">
										<div className="h-6 bg-primary w-1/2 mb-3"></div>
										<div className="h-10 bg-primary w-3/4 mb-5"></div>
										<div className="h-12 bg-primary w-full"></div>
									</div>
								</div>
						  ))
						: events.map((event, index) => (
								<div
									key={index}
									className="bg-primary flex flex-col min-h-[400px] animate-fade-up animate-duration-1500">
									{event.image && (
										<img
											src={event.image.asset.url}
											alt={event.name}
											className="w-full h-48 object-cover"
										/>
									)}
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
