import React from "react";
import { Space, H1 } from "cherry-components";
import { Page } from "../../components/Pages";
import { Box } from "../../components/Layout";
import { DocNav, DocNavWrapper } from "../../components/DocNav";

function Index() {
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
				by providing a web server with a database out of the box, zero
				configuration required.
				<br />
				<br />
				WordPressify comes with a development server for running PHP
				under a proxy with BrowserSync. The data is stored in a
				pre-configured MariaDB database that works out of the box.
				Watches for all your changes while developing and reloads the
				webpage in real-time. Styles are preprocessed with PostCSS or
				Sass. Uses Babel compiler for writing next-generation
				JavaScript. Source maps are supported for both CSS and
				JavaScript. WordPressify allows easy import of external
				JavaScript libraries and npm scripts, it has a flexible build
				and can be easily customized with gulp tasks.
				<br />
				<br />
				It works on Mac, Windows, and Linux. And requires only Docker as
				the main dependency.
			</p>
			<Space size={10} />
			<DocNavWrapper>
				<DocNav href="/" as="/" prev>
					Home
				</DocNav>
				<DocNav
					href="/docs/installing-docker"
					as="/docs/installing-docker"
					next
				>
					Installing Docker
				</DocNav>
			</DocNavWrapper>
		</Page>
	);
}

export default Index;
