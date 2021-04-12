export const navigationData = [
	{
		label: "Getting Started",
		state: "start",
		children: [
			{
				href: "/docs",
				label: "Introduction",
			},
			{
				href: "/docs/installing-nodejs-and-docker",
				label: "Installing Node.js and Docker",
			},
			{
				href: "/docs/set-up-project",
				label: "Set Up Project",
			},
		],
	},
	{
		label: "Customization",
		state: "customization",
		children: [
			{
				href: "/docs/css-postcss-and-sass",
				label: "CSS, PostCSS and Sass",
			},
			{
				href: "/docs/images-and-fonts",
				label: "Images and Fonts",
			},
			{
				href: "/docs/es6-javascript",
				label: "ES6 JavaScript",
			},
			{
				href: "/docs/external-libraries",
				label: "External Libraries",
			},
			{
				href: "/docs/change-php-and-docker-settings",
				label: "Change PHP and Docker settings",
			},
		],
	},
	{
		label: "Build Utilities",
		state: "build-utilities",
		children: [
			{
				href: "/docs/backups",
				label: "Backups",
			},
			{
				href: "/docs/code-style-rules",
				label: "Code Style Rules",
			},
			{
				href: "/docs/using-xdebug",
				label: "Using Xdebug",
			},
		],
	},
	{
		label: "Production",
		state: "production",
		children: [
			{
				href: "/docs/deployment",
				label: "Deployment",
			},
		],
	},
	{
		label: "Other",
		state: "other",
		children: [
			{
				href: "/docs/troubleshooting",
				label: "Troubleshooting",
			},
			{
				href: "/docs/windows-installation",
				label: "Windows Installation",
			},
		],
	},
];
