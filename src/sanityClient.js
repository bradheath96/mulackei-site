import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const sanityClient = createClient({
	projectId: "1e153wmz",
    dataset: "production",
    apiVersion: '2024-12-18',
    useCdn: true
});

const builder = imageUrlBuilder(sanityClient);

export const urlFor = (source) => builder.image(source);

export default sanityClient;

