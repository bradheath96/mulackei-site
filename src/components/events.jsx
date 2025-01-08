import { useEffect, useState } from "react";
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
    
	console.log(events, "<<< events log")

	return (
		<div>
			<h1 className="text-4xl text-white font-bold">Upcoming Events</h1>
			<ul>
				{events.map((event) => (
					<li key={event._id}>
						<h2 className="text-4xl text-white font-bold " >{event.name}</h2>
						<p>{new Date(event.date).toLocaleDateString()}</p>
						{event.image && (
							<img
								src={event.image.asset.url}
								alt={event.name}
								className="w-40 h-40 object-cover rounded-lg"
							/>
						)}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Events;
