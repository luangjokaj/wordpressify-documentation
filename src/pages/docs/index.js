import React from "react";
import { css } from "@emotion/react";
import { Page } from "../../components/Pages";
import { Space, H1, Box } from "../../components/Layout";
import { DocNav, DocNavWrapper } from "../../components/DocNav";

function Index({ posts = [] }) {
	return (
		<Page
			title="Documentation"
			description="WordPressify is a simple tool that helps you build WordPress themes and plugins. It takes care of the development experience by providing a web server with a database out of the box, zero-configuration required."
		>
			<Space xs={20} lg={40} />
			<H1 size="hero1">Getting started with WordPressify</H1>
			<Space xs={10} lg={30} />
			<p>
				WordPressify is a simple tool that helps you build WordPress
				themes and plugins. It takes care of the development experience
				by providing a web server with a database out of the box,
				zero-configuration required.
				<br />
				<br />
				WordPressify comes with a development server for running PHP
				under a proxy with BrowserSync. The data is stored in a
				pre-configured MariaDB database that works out-of-the-box.
				Watches for all your changes while developing and reloads the
				webpage in real-time. Styles are preprocessed with PostCSS or
				Sass. Uses Babel compiler for writing next-generation
				JavaScript. Source maps are supported for both CSS and
				JavaScript. WordPressify allows easy import of external
				JavaScript libraries and npm scripts, it has a flexible build
				and can be easily customized with gulp tasks.
			</p>
			<Space size={10} />
			<Box noPadding isVideo>
				<iframe
					height="315"
					src="https://www.youtube.com/embed/dDl0pMtTdSg"
					frameBorder="0"
					title="YouTube video player"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
					className="video"
				/>
			</Box>
			<Space size={20} />
			<DocNavWrapper>
				<DocNav href="/" as="/" prev>
					Home
				</DocNav>
				<DocNav
					href="/docs/installing-nodejs-and-docker"
					as="/docs/installing-nodejs-and-docker"
					next
				>
					Installing Node.js and Docker
				</DocNav>
			</DocNavWrapper>
		</Page>
	);
}

export default Index;
