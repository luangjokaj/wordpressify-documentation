import React from "react";
import { Space, H1, H2, H3 } from "cherry-components";
import { Page } from "../../components/Pages";
import { Link } from "../../components/Layout";
import { DocNav, DocNavWrapper } from "../../components/DocNav";

function Index() {
	return (
		<Page title="Installing Docker">
			<Space xs={20} lg={40} />
			<H1 size="hero1">Installing Docker</H1>
			<Space xs={10} lg={30} />
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
			<p>
				If you’re on Windows{" "}
				<strong>
					make sure that you enable{" "}
					<a
						href="https://docs.microsoft.com/en-us/windows/wsl/tutorials/wsl-containers"
						target="_blank"
						rel="noreferrer"
					>
						WSL integration
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
