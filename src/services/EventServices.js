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
		  price,
		  priceAmount,
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


const fetchImagesByCategory = async (category) => {
	try {
		const query = `*[_type == "imageCollection" && category == $category][0].images[]{
			"url": asset->url,
			"filename": asset->originalFilename,
			"altText": alt,
			"metadata": asset->metadata
		}`;
		const images = await sanityClient.fetch(query, { category });
		return images;
	} catch (error) {
		console.error(`Error fetching images for category '${category}':`, error);
		throw error;
	}
};

const fetchImagesByFilenames = async (filenames) => {
	try {
		const query = `*[_type == "imageCollection"]{
			images[asset->originalFilename in $filenames]{
				"url": asset->url,
				"filename": asset->originalFilename,
				"alt": alt,
				"caption": caption,
				"assetId": asset->_id
			}
		}.images[]`;

		// Pass an array instead of a single string
		const images = await sanityClient.fetch(query, { filenames });
		return images;
	} catch (error) {
		console.error("Error fetching images by filenames:", error);
		throw error;
	}
};



export {
	fetchEvents,
	fetchEventsBySlug,
	fetchImagesByCategory,
	fetchImagesByFilenames,
};
