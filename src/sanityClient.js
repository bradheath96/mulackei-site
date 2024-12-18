import { createClient } from "@sanity/client";

const sanityClient = createClient({
	projectId: "1e153wmz",
    dataset: "production",
    apiVersion: '2024-12-18',
    useCdn: true
});

export default sanityClient;

