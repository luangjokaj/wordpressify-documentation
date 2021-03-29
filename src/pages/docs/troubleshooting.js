import React from "react";
import { css } from "@emotion/react";
import { Page } from "../../components/Pages";
import { Space, H1, H2, H3, H4 } from "../../components/Layout";
import { DocNav, DocNavWrapper } from "../../components/DocNav";
import { CodeBlock } from "../../components/CodeBlock";

function Index({ posts = [] }) {
	return (
		<Page title="Troubleshooting">
			<Space xs={20} lg={40} />
			<H1 size="hero1">Troubleshooting</H1>
			<Space xs={10} lg={30} />
			<H2 size="h5">ERROR: docker-compose: command not found</H2>
			<p>
				Docker is not installed. Please&nbsp;
				<a href="https://www.wordpressify.co/installing-nodejs-and-docker/">
					install Docker
				</a>
				, then try again.
			</p>
			<H3 size="h5">ERROR: Failed to execute script docker-compose</H3>
			<p>Make sure Docker is open and running, then try again.</p>
			<H4 size="h5">
				ERROR: Bind for 0.0.0.0:3020 failed: port is already allocated
			</H4>
			<p>
				Make sure there are no other Docker containers running the same
				port 3020. You can stop all Docker containers with the command:
			</p>
			<CodeBlock
				language="shell"
				value={`docker stop $(docker ps -a -q)`}
			/>
			<p>And now try again.</p>
			<Space size={10} />
			<DocNavWrapper>
				<DocNav href="/docs/deployment" as="/docs/deployment" prev>
					Deployment
				</DocNav>
				<DocNav href="/docs" as="/docs" next>
					Introduction
				</DocNav>
			</DocNavWrapper>
		</Page>
	);
}

export default Index;
