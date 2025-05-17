
/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
	output: 'standalone',

	// Increase timeout for static page generation if needed
	staticPageGenerationTimeout: 120,

	async redirects()
	{
		return [
			{
				source: '/index',
				destination: '/',
				permanent: true,
			},
		]
	},

	// Add cache control headers for blog pages
	async headers()
	{
		return [
			{
				source: '/blog/:path*',
				headers: [
					{
						key: 'Cache-Control',
						value: 's-maxage=60, stale-while-revalidate=59',
					},
				],
			},
		]
	},

	images: {
		// Consider removing unoptimized: true unless you have specific reasons for it
		unoptimized: true,
		remotePatterns: [
			{
				protocol: "https",
				hostname: "cdn.sanity.io",
			},
		],
	},
};

export default nextConfig;