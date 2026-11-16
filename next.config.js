/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	async redirects() {
		return [
			// Every page used to also exist under /en (from an unused "en" locale).
			// (Two rules, since "/en/:path*" would send "/en" itself to an empty address.)
			{ source: "/en", destination: "/", permanent: true },
			{ source: "/en/:path+", destination: "/:path+", permanent: true },
			// The Vercel project's own vercel.app alias serves the same site; send it to the real domain.
			{
				source: "/:path*",
				has: [{ type: "host", value: "lennynextportfolio.vercel.app" }],
				destination: "https://lennymetlitsky.com/:path*",
				permanent: true,
			},
		];
	},
	async headers() {
		return [
			{
				// Let browsers reuse images for a day. Not forever, since a file can be
				// replaced under the same name. Resized copies from next/image follow this too.
				source: "/img/:path*",
				headers: [
					{
						key: "Cache-Control",
						value: "public, max-age=86400, stale-while-revalidate=604800",
					},
				],
			},
		];
	},
};

module.exports = nextConfig;
