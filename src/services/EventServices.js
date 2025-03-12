import sanityClient from "../sanityClient";

const fetchEvents = async () => {
	try {
		const query = `*[_type == "event"] | order(date asc) {
          _id,
          name,
          slug,
          date,
          description,
          image {
              asset -> { url }
          },
          type,
          price,
          priceAmount,
          tickets
        }`;
		const events = await sanityClient.fetch(query);
		return events;
	} catch (error) {
		console.error("Error fetching events:", error);
		throw error;
	}
};

const fetchEventsBySlug = async (slug) => {
	try {
		const event = await sanityClient.fetch(
			`*[_type == "event" && slug.current == $slug][0] {
            _id,
          name,
          slug,
          date,
          description,
          image {
              asset -> { url }
          },
          type,
          tickets
            }`,
			{ slug }
		);
		return event;
	} catch (error) {
		console.error("Error fetching events:", error);
		throw error;
	}
};

const fetchVenueImage = async () => {
	try {
		const query = `*[_type == "venue"][0].venueImages[]{
			"url": asset->url,
			"filename": asset->originalFilename
		}[filename == "Mulackei_1"][0]`; // Fetch only this image
		const image = await sanityClient.fetch(query);
		return image ? image.url : null;
	} catch (error) {
		console.error("Error fetching venue image:", error);
		throw error;
	}
};

export { fetchEvents, fetchEventsBySlug, fetchVenueImage };
