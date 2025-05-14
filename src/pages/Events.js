import { useState, useEffect } from "react";
import { fetchEvents } from "../services/EventServices";
import { useNavigate } from "react-router-dom";

const Events = () => {
	const [events, setEvents] = useState([]);
	const [selectedCategory, setSelectedCategory] = useState("all");
	const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
	const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
	const [isLoading, setIsLoading] = useState(true);
	const [animationKey, setAnimationKey] = useState(0); 
	const navigate = useNavigate();
		console.log(events);


	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		const currentDate = new Date();
		fetchEvents()
			.then((data) => {
				const upComingEvents = data.filter(
					(event) => new Date(event.date) > currentDate
				);
				setEvents(upComingEvents);
				setIsLoading(false);
			})
			.catch(console.error);
	}, []);

	
	const filteredEvents = events.filter((event) => {
		const eventDate = new Date(event.date);
		const isSameMonth =
			eventDate.getMonth() === currentMonth &&
			eventDate.getFullYear() === currentYear;

		const isSameCategory =
			selectedCategory === "all" || event.type === selectedCategory;

		return isSameMonth && isSameCategory;
	});

	const monthNames = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"July",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	];

	const handleMonthChange = (direction) => {
		window.scrollTo(0, 0);
		if (direction === "prev") {
			if (currentMonth === 0) {
				setCurrentMonth(11);
				setCurrentYear(currentYear - 1);
			} else {
				setCurrentMonth(currentMonth - 1);
			}
		} else if (direction === "next") {
			if (currentMonth === 11) {
				setCurrentMonth(0);
				setCurrentYear(currentYear + 1);
			} else {
				setCurrentMonth(currentMonth + 1);
			}
		}
		setAnimationKey((prevKey) => prevKey + 1); 
	};

	const handleCategoryChange = (category) => {
		setSelectedCategory(category);
		setAnimationKey((prevKey) => prevKey + 1); 
	};

	const handleMoreInfoClick = (slug) => {
		navigate(`/events/${slug}`);
	};

	return (
		<div className="bg-primary text-white min-h-screen">
			{/* Month Selector */}
			<div className="sticky top-16 z-10 bg-primary py-2 flex justify-center items-center mx-auto w-full border-b-2 border-boxYellow transition duration-300 ease-in-out">
				<button
					className="text-white px-4"
					onClick={() => handleMonthChange("prev")}>
					←
				</button>
				<h2 className="text-5xl font-bold mx-4 font-titleFont">
					{monthNames[currentMonth]} {currentYear}
				</h2>
				<button
					className="text-white px-4"
					onClick={() => handleMonthChange("next")}>
					→
				</button>
			</div>

			{/* Category Filter */}
			<div className="grid grid-cols-5 justify-center mx-auto w-[350px] max-w-2xl mt-4">
				{["all", "music", "chess", "art", "film"].map((category) => (
					<button
						key={category}
						className={`px-1 py-1 ${
							selectedCategory === category
								? "bg-boxYellow text-black"
								: "bg-primary text-white"
						} border-2 border-boxYellow font-bodyFont transition duration-300 ease-in-out`}
						onClick={() => handleCategoryChange(category)}>
						{category.charAt(0).toUpperCase() + category.slice(1)}
					</button>
				))}
			</div>

			<hr className="border-t-2 border-boxYellow mt-[1rem]" />

			{/* Event Listings */}
			<div
				key={animationKey}
				className="grid grid-cols-1 gap-6 lg:grid-cols-1 lg:gap-2 mt-3 animate-fade-up animate-duration-[1250ms]">
				{/* Skeleton Loader */}
				{isLoading ? (
					<div className="grid grid-cols-1 gap-6 lg:grid-cols-1 lg:gap-2">
						{[...Array(5)].map((_, index) => (
							<div key={index} className="bg-primary p-4 animate-pulse">
								<div className="h-48 bg-primary rounded-md mb-4"></div>
								<div className="h-6 bg-primary rounded-md mb-2"></div>
								<div className="h-4 bg-primary rounded-md mb-2"></div>
							</div>
						))}
					</div>
				) : filteredEvents.length === 0 ? (
					// No Events Message
					<div className="text-center py-20">
						<h2 className="text-4xl font-titleFont font-bold">
							No events found.
						</h2>
						<p className="text-lg mt-2 font-bodyFont">
							Check back soon for more updates!
						</p>
					</div>
				) : (
					// Actual Event Listings
					filteredEvents.map((event, index) => (
						<div key={index} className="bg-primary">
							{/* Event Layout */}
							<div className="lg:grid lg:grid-cols-[2fr_600px_1fr] lg:grid-rows-1 lg:mx-10 lg:justify-center lg:p-1 lg:mb-8 md:grid md:grid-cols-2 md:grid-rows-[auto_80px] md:p-5 p-3">
								{/* Event Image */}
								{event.image && (
									<div className="w-full h-[300px] p-2 flex justify-center">
										<img
											src={event.image.asset.url}
											alt={event.name}
											className="w-full h-full object-cover"
										/>
									</div>
								)}

								{/* Event Content */}
								<div className="lg:content-start lg:h-full md:h-full md:content-end p-2">
									<p className="font-bodyFont text-lg font-light text-white">
										{new Date(event.date).toLocaleDateString(undefined, {
											weekday: "short",
											month: "short",
											day: "numeric",
										})}
									</p>
									<h2 className="font-titleFont lg:text-6xl md:text-6xl text-4xl font-bold text-white md:align-text-bottom">
										{event.name}
									</h2>
								</div>

								{/* Buttons */}
								<div className="lg:flex lg:flex-col lg:gap-4 lg:col-auto lg:row-auto lg:items-start lg:h-full lg:mt-5 md:col-span-2 md:row-start-2 md:h-[80px] p-2 flex items-center gap-4">
									<button
										className="font-bodyFont lg:w-full md:w-full w-full py-3 bg-boxYellow hover:bg-secondary-dark font-medium text-black border-2 border-boxYellow transition duration-300 ease-in-out hover:-translate-y-0.5 hover:-translate-x-0.5"
										onClick={() => handleMoreInfoClick(event.slug.current)}>
										More Info
									</button>
									<button className="font-bodyFont lg:w-full md:w-full w-full py-3 bg-primary hover:bg-secondary-dark text-white font-medium border-2 border-boxYellow transition duration-300 ease-in-out hover:-translate-y-0.5 hover:-translate-x-0.5">
										{event.priceAmount === null
											? "Free In!"
											: "€" + event.priceAmount}
									</button>
								</div>
							</div>

							<hr className="border-t-2 border-boxYellow" />
						</div>
					))
				)}
			</div>
		</div>
	);
};

export default Events;
