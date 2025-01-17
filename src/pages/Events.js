import { useState, useEffect } from "react";
import sanityClient from "../sanityClient";

const Events = () => {
	const [events, setEvents] = useState([]);
	const [filteredEvents, setFilteredEvents] = useState([]);
	const [selectedCategory, setSelectedCategory] = useState("all");

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
				setFilteredEvents(upComingEvents);
			})
			.catch(console.error);
	}, []);

	const handleFilterChange = (category) => {
		setSelectedCategory(category);

		if (category === "all") {
			setFilteredEvents(events);
		} else {
			const filteredEvents = events.filter((event) => event.type === category);
			setFilteredEvents(filteredEvents);
		}
	};

	console.log(filteredEvents, "<<< filtered events");

	return (
		<div className="bg-primary min-h-screen text-white py-12">
			<h1 className="text-4xl font-bold mb-8 text-center">Upcoming Events</h1>

			{/* Filter Bar */}
			<div className="grid grid-cols-5 justify-center mb-8 mx-auto w-[60%] max-w-4xl">
				<button
					className={`px-2 py-2 ${
						selectedCategory === "all" ? "bg-secondary" : "bg-boxBG"
					} text-white border border-yellow-600`}
					onClick={() => handleFilterChange("all")}>
					All
				</button>
				<button
					className={`px-2 py-2 ${
						selectedCategory === "music" ? "bg-secondary" : "bg-boxBG"
					} text-white border border-yellow-600`}
					onClick={() => handleFilterChange("music")}>
					Music Gig
				</button>
				<button
					className={`px-2 py-2 ${
						selectedCategory === "chess" ? "bg-secondary" : "bg-boxBG"
					} text-white border border-yellow-600`}
					onClick={() => handleFilterChange("chess")}>
					Chess Nights
				</button>
				<button
					className={`px-2 py-2 ${
						selectedCategory === "art exhibition" ? "bg-secondary" : "bg-boxBG"
					} text-white border border-yellow-600`}
					onClick={() => handleFilterChange("art exhibition")}>
					Art Exhibition
				</button>
				<button
					className={`px-2 py-2 ${
						selectedCategory === "film screening" ? "bg-secondary" : "bg-boxBG"
					} text-white border border-yellow-600`}
					onClick={() => handleFilterChange("film screening")}>
					Film Screening
				</button>
			</div>

			{/* Event Listings */}
			<div className="grid grid-cols-1 ">
				{filteredEvents.map((event) => (
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
								<h2 className="text-5xl font-bold mb-2 text-left">
									{event.name}
								</h2>
								<p className="text-sm text-white mb-4 text-left">
									{new Date(event.date).toLocaleDateString(undefined, {
										weekday: "short",
										month: "short",
										day: "numeric",
										year: "numeric",
										hour: "numeric",
										minute: "numeric",
									})}
								</p>
							</div>
							<div className="justify-self-end">
								<button className="px-8 py-4 bg-secondary text-white shadow hover:bg-secondary-dark">
									More Info
								</button>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Events;
