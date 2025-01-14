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
		<div className="bg-primary min-h-screen text-white py-12">
			<h1 className="text-4xl font-bold mb-8 text-center">Upcoming Events</h1>
			<div className="grid gap-4 grid-cols-1 ">
				{events.map((event) => (
					<div key={event._id} className="bg-boxBG p-6 shadow-md">
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
								<h2 className="text-3xl font-bold mb-2 text-left">
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
