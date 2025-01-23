import sanityClient from "../sanityClient";

export const fetchEvents = async () => {
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
          tickets
        }`;
		const events = await sanityClient.fetch(query);
		return events;
	} catch (error) {
		console.error("Error fetching events:", error);
		throw error;
	}
};
