const withPlugins = require("next-compose-plugins");
const withBundleAnalyzer = require("@next/bundle-analyzer");

const config = {
	experimental: {
		emotion:
			true |
			{
				sourceMap: true,
			},
	},
};

const bundleAnalyzer = withBundleAnalyzer({
	enabled: process.env.ANALYZE === "true",
});

module.exports = withPlugins([[bundleAnalyzer, config]]);
