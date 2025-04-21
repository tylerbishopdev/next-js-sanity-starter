/** @type {import('next').NextConfig} */

const nextConfig = {
	experimental: { urlImports: ['https://themer.sanity.build/'] },
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
	images: {
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