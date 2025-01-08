import { useState, useEffect } from "react";
import sanityClient from "../sanityClient";

const Events = () => {
	const [events, setEvents] = useState([]);

	useEffect(() => {
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
			.then((data) => setEvents(data))
			.catch(console.error);
	}, []);

	console.log(events, "<<< fetched events");

	return (
		<div
			className="min-h-screen text-white px-8 py-12"
			style={{ backgroundColor: "#F93631" }}>
			<h1 className="text-4xl font-bold mb-8 text-center">Upcoming Events</h1>
			<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 ">
				{events.map((event) => (
					<div
						key={event._id}
						className="p-6 rounded-lg shadow-md"
						style={{ backgroundColor: "#C21F23" }}>
						{event.image && (
							<img
								src={event.image.asset.url}
								alt={event.name}
								className="w-full h-40 object-cover rounded-md mb-4"
							/>
						)}
						<h2 className="text-xl font-semibold mb-2 text-center">
							{event.name}
						</h2>
						<p className="text-sm text-gray-400 mb-4 text-center">
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
				))}
			</div>
		</div>
	);
};

export default Events;
