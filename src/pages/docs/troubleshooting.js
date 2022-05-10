import React from "react";
import { Space, H1, H2, H3, H4, H5 } from "cherry-components";
import { Page } from "../../components/Pages";
import { DocNav, DocNavWrapper } from "../../components/DocNav";
import { CodeBlock } from "../../components/CodeBlock";

function Index() {
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
				This means the default port is already in use. In your{" "}
				<strong>.env</strong> file just specify a different port:
			</p>
			<CodeBlock language="text" value={`PROXY_PORT=3030`} />
			<p>And now try again.</p>
			<H5 size="h5">403 Forbidden or 502 Bad Gateway after starting</H5>
			<p>
				If you see one of these error messages in your browser after you
				started WordPressify, means that files are still being prepared.
				Just give it a few more moments and reload the page.
			</p>
			<Space size={10} />
			<DocNavWrapper>
				<DocNav href="/docs/deployment" as="/docs/deployment" prev>
					Deployment
				</DocNav>
				<DocNav
					href="/docs/windows-installation"
					as="/docs/windows-installation"
					next
				>
					Windows Installation
				</DocNav>
			</DocNavWrapper>
		</Page>
	);
}

export default Index;
