/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{ hostname: "basic-goose-99.convex.cloud" },
			{ hostname: "oaidalleapiprodscus.blob.core.windows.net" },
		],
	},
};

export default nextConfig;
