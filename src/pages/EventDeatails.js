import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchEventsBySlug } from "../services/EventServices";

const EventDetails = () => {
	const { slug } = useParams();
	const [event, setEvent] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		const getEvent = async () => {
			try {
				const data = await fetchEventsBySlug(slug);
				setEvent(data);
			} catch (error) {
				console.error("Error fetching event details:", error);
			} finally {
				setLoading(false);
			}
		};
		getEvent();
	}, [slug]);

	if (loading) {
		return (
			<div className="bg-primary min-h-screen text-white text-center h-screen">
				<p className="text-2xl font-semibold">Loading...</p>
			</div>
		);
	}

	if (!event) {
		return (
			<div className="bg-primary min-h-screen text-white text-center h-screen">
				<p className="text-2xl font-semibold">Event not found!</p>
			</div>
		);
	}

	return (
		<div className="bg-primary min-h-screen text-white">
			<div className="grid grid-flow-col-1 md:grid-cols-2 lg:grid-cols-2">
				<div className="lg:px-4 lg:pt-4 md:px-4 md:pt-4">
					<div className="w-full  max-h-[500px] lg:max-w-[600px] lg:max-h-[620px] md:max-w-[520px] md:max-h-[500px]">
						<img
							src={event.image.asset.url}
							alt={event.name}
							className="w-[500px] h-[500px] md:w-full md:h-[400px] lg:w-[600px] lg:h-[620px] object-cover"
						/>
					</div>
				</div>
				<div className="md:place-content-end px-4 pt-4 md:h-full lg:place-content-end">
					<p className="text-2xl lg:text-3xl font-light">
						{new Date(event.date).toLocaleDateString(undefined, {
							weekday: "short",
							month: "short",
							day: "numeric",
							hour: "2-digit",
							minute: "2-digit",
						})}
					</p>
					<h1 className="text-6xl lg:text-8xl font-bold">{event.name}</h1>
					<button className="lg:w-full md:w-full w-full mt-5 py-3 bg-primary hover:bg-secondary-dark text-white font-medium border-2 border-boxYellow">
						Buy Tickets
					</button>
				</div>
			</div>
			<hr className="border-t border-boxYellow my-10" />

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
				<div></div>
				<div className="flex flex-col justify-start mx-5 mt-10">
					<div className="text-md font-light justify-start mr-5 space-y-4 mb-10">
						{event.description.map((block, index) => (
							<p key={index}>
								{block.children.map((child) => child.text).join(" ")}
							</p>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default EventDetails;
