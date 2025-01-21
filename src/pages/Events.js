import { useState, useEffect } from "react";
import sanityClient from "../sanityClient";

const Events = () => {
	const [events, setEvents] = useState([]);
	const [selectedCategory, setSelectedCategory] = useState("all");
	const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
	const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

	useEffect(() => {
		const currentDate = new Date();
		sanityClient
			.fetch(
				`*[_type == "event"] | order(date asc) {
          _id,
          name,
          date,
          description,
          image {
              asset -> { url }
          },
          type,
          tickets
        }`
			)
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

	console.log(filteredEvents, "<<< filtered events");

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

	return (
		<div className="bg-primary min-h-screen text-white py-12">
			{/* Month Selector */}
			<div className="sticky top-14 bg-primary py-4 flex justify-center items-center mb-8 mx-auto w-full z-10">
				<button
					className="text-white px-4"
					onClick={() => handleMonthChange("prev")}>
					←
				</button>
				<h2 className="text-4xl font-bold mx-4">
					{monthNames[currentMonth]} {currentYear}
				</h2>
				<button
					className="text-white px-4"
					onClick={() => handleMonthChange("next")}>
					→
				</button>
			</div>

			{/* Category Filter */}
			<div className="grid grid-cols-5 justify-center mb-8 mx-auto w-[60%] max-w-4xl">
				<button
					className={`px-2 py-2 ${
						selectedCategory === "all" ? "bg-secondary" : "bg-boxBG"
					} text-white border border-yellow-600`}
					onClick={() => handleCategoryChange("all")}>
					All
				</button>
				<button
					className={`px-2 py-2 ${
						selectedCategory === "music" ? "bg-secondary" : "bg-boxBG"
					} text-white border border-yellow-600`}
					onClick={() => handleCategoryChange("music")}>
					Music Gig
				</button>
				<button
					className={`px-2 py-2 ${
						selectedCategory === "chess" ? "bg-secondary" : "bg-boxBG"
					} text-white border border-yellow-600`}
					onClick={() => handleCategoryChange("chess")}>
					Chess Nights
				</button>
				<button
					className={`px-2 py-2 ${
						selectedCategory === "art exhibition" ? "bg-secondary" : "bg-boxBG"
					} text-white border border-yellow-600`}
					onClick={() => handleCategoryChange("art exhibition")}>
					Art Exhibition
				</button>
				<button
					className={`px-2 py-2 ${
						selectedCategory === "film screening" ? "bg-secondary" : "bg-boxBG"
					} text-white border border-yellow-600`}
					onClick={() => handleCategoryChange("film screening")}>
					Film Screening
				</button>
			</div>

			{/* Event Listings */}
			<div className="grid grid-cols-1 ">
				{filteredEvents.length === 0 ? (
					<div className="text-center mt-10">
						<h3 className="text-4xl font-bold">No results found</h3>
						<p className="text-lg mt-2">
							Please choose another filter to find some sweet events.
						</p>
					</div>
				) : (
					filteredEvents.map((event) => (
						<div
							key={event._id}
							className="bg-boxBG p-6 shadow-md border border-yellow-600">
							<div className="grid grid-cols-[auto_1fr_auto] items-center gap-8 p-6">
								<div className="max-w-max">
									{event.image && (
										<img
											src={event.image.asset.url}
											alt={event.name}
											className="w-60 h-60 object-cover rounded"
										/>
									)}
								</div>
								<div className="flex flex-col justify-center">
									<p className="text-lg font-light text-white mb-2 text-left">
										{new Date(event.date).toLocaleDateString(undefined, {
											weekday: "short",
											month: "short",
											day: "numeric",
										})}
									</p>
									<h2 className="text-5xl font-bold mb-2 text-left">
										{event.name}
									</h2>
								</div>
								<div className="justify-self-end mr-16">
									<button className="px-8 py-4 bg-secondary text-white shadow hover:bg-secondary-dark mx-auto">
										More Info
									</button>
								</div>
							</div>
						</div>
					))
				)}
			</div>
		</div>
	);
};

export default Events;
