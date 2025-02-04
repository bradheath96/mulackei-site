import { useState, useEffect } from "react";
import { fetchEvents } from "../services/EventServices";
import { useNavigate } from "react-router-dom";

const Events = () => {
	const [events, setEvents] = useState([]);
	const [selectedCategory, setSelectedCategory] = useState("all");
	const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
	const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
	const navigate = useNavigate();

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
			})
			.catch(console.error);
	}, []);

	const handleCategoryChange = (category) => {
		setSelectedCategory(category);
	};

	const handleMonthChange = (direction) => {
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
	};

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

	const handleMoreInfoClick = (slug) => {
		navigate(`/events/${slug}`);
	};

	return (
		<div className="bg-primary text-white min-h-screen">
			{/* Month Selector */}
			<div className="top-28 bg-primary py-2 flex justify-center items-center mx-auto w-full">
				<button
					className="text-white px-4"
					onClick={() => handleMonthChange("prev")}>
					←
				</button>
				<h2 className="text-5xl font-bold mx-4">
					{monthNames[currentMonth]} {currentYear}
				</h2>
				<button
					className="text-white px-4"
					onClick={() => handleMonthChange("next")}>
					→
				</button>
			</div>
			<hr className="border-t border-boxYellow my-4" />

			{/* Category Filter */}
			<div className="grid grid-cols-5 justify-center mx-auto w-[350px] max-w-2xl">
				{["all", "music", "chess", "art", "film"].map((category) => (
					<button
						key={category}
						className={`px-1 py-1 ${
							selectedCategory === category
								? "bg-boxYellow text-black"
								: "bg-primary text-white"
						} border-2 border-floralWhite`}
						onClick={() => handleCategoryChange(category)}>
						{category.charAt(0).toUpperCase() + category.slice(1)}
					</button>
				))}
			</div>

			<hr className="border-t border-boxYellow my-4" />

			{/* Event Listings */}
			<div className="grid grid-cols-1 gap-6 lg:grid-cols-1 xl:grid-cols-1">
				{filteredEvents.length === 0 ? (
					<div className="text-center">
						<h3 className="text-4xl font-bold">No results found</h3>
						<p className="text-lg mt-2">
							Please choose another filter to find some sweet events.
						</p>
					</div>
				) : (
					filteredEvents.map((event) => (
						<div key={event._id} className="bg-primary">
							{/* Large Screen Layout (Three Columns) */}
							<div
								className="lg:grid lg:grid-cols-[auto_1fr_auto] lg:grid-rows-1 lg:mx-20 lg:items-center 
                        					md:grid md:grid-cols-2 md:grid-rows-2 md:gap-4 
                        sm:flex sm:flex-col sm:items-center">
								{/* Event Image (First Column) */}
								{event.image && (
									<div className="lg:w-[300px] lg:h-[300px] sm:w-full sm:h-64 sm:mb-4">
										<img
											src={event.image.asset.url}
											alt={event.name}
											className="w-full h-full object-cover"
										/>
									</div>
								)}

								{/* Event Content (Second Column) */}
								<div className="lg:w-full sm:w-full sm:px-6 sm:py-4">
									{/* Event Date */}
									<p className="text-lg font-light text-white text-left">
										{new Date(event.date).toLocaleDateString(undefined, {
											weekday: "short",
											month: "short",
											day: "numeric",
										})}
									</p>

									{/* Event Name */}
									<h2 className="lg:text-6xl font-bold mb-4 text-left text-white">
										{event.name}
									</h2>
								</div>

								{/* Buttons (Third Column - Stay on the Right) */}
								<div className="lg:flex lg:flex-col lg:items-end lg:gap-4 font-medium">
									{/* More Info Button */}
									<button
										className="lg:w-52 px-6 py-3 bg-boxYellow hover:bg-secondary-dark text-black border border-white"
										onClick={() => handleMoreInfoClick(event.slug.current)}>
										More Info
									</button>

									{/* Free In Button */}
									<button className="lg:w-52 px-6 py-3 bg-boxYellow hover:bg-secondary-dark text-black border border-white">
										Free In!
									</button>
								</div>
							</div>

							<hr className="border-t border-boxYellow" />
						</div>
					))
				)}
			</div>
		</div>
	);
};

export default Events;
