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
			<h1>Upcoming Events</h1>
		</div>
	);
};

export default Events;
