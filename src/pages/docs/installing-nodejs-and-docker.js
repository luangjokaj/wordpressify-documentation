import React from "react";
import { css } from "@emotion/react";
import { Page } from "../../components/Pages";
import { Space, H1, H2, H3 } from "../../components/Layout";
import { DocNav, DocNavWrapper } from "../../components/DocNav";

function Index({ posts = [] }) {
	return (
		<Page title="Installing Node.js and Docker">
			<Space xs={20} lg={40} />
			<H1 size="hero1">Installing Node.js and Docker</H1>
			<Space xs={10} lg={30} />
			<p>WordPressify requires Node.js v12+ and Docker Compose.</p>
			<H2>Node.js</H2>
			<p>
				Node.js is a JavaScript runtime built on Chrome’s V8 JavaScript
				engine. Node.js uses an event-driven, non-blocking I/O model
				that makes it lightweight and efficient. Node.js’ package
				ecosystem, npm, is the largest ecosystem of open source
				libraries in the world.
			</p>
			<p>You can download Node.js here.</p>
			<Space size={10} />
			<Link href="https://nodejs.org/en/download/" frame external>
				Download Node.js
			</Link>
			<Space size={20} />
			<H3 size="h2">Docker</H3>
			<p>
				A Docker container is a standard unit of software that packages
				up code and all its dependencies so the application runs quickly
				and reliably from one computing environment to another.
			</p>
			<p>Instructions to download Docker Compose can be found here.</p>
			<p>
				If you’re on Linux{" "}
				<strong>
					make sure that you can{" "}
					<a
						href="https://docs.docker.com/engine/install/linux-postinstall/"
						target="_blank"
						rel="noreferrer"
					>
						manage Docker as a non-root user
					</a>
				</strong>
				.
			</p>
			<Space size={10} />
			<Link
				href="https://www.docker.com/products/docker-desktop"
				frame
				external
			>
				Download Docker
			</Link>
			<Space size={20} />
			<DocNavWrapper>
				<DocNav href="/docs" as="/docs" prev>
					Introduction
				</DocNav>
				<DocNav
					href="/docs/set-up-project"
					as="/docs/set-up-project"
					next
				>
					Set Up Project
				</DocNav>
			</DocNavWrapper>
		</Page>
	);
}

export default Index;
