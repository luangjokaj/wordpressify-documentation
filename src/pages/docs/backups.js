import React from "react";
import { Space, H1 } from "cherry-components";
import { Page } from "../../components/Pages";
import { DocNav, DocNavWrapper } from "../../components/DocNav";
import { CodeBlock } from "../../components/CodeBlock";

function Index() {
	return (
		<Page title="Backups">
			<Space xs={20} lg={40} />
			<H1 size="hero1">Backups</H1>
			<p>
				While coding you will find yourself uploading dummy content to
				the WordPress build server, e.g. images or other media stored in{" "}
				<strong>wp-content</strong>. WordPressify allows you to back up
				the current state of the build which will include all server
				files. To back up your build run the command:
			</p>
			<CodeBlock language="shell" value={`npm run export:backup`} />
			<p>
				Alternatively if you don't have NodeJS installed locally, use
				Docker commands:
			</p>
			<CodeBlock
				language="shell"
				value={`docker compose run --rm nodejs npm run backup`}
			/>
			<p>
				Files will be compressed in a zip file and stored in the
				directory:
			</p>
			<CodeBlock language="shell" value={`backups/`} />
			<Space size={10} />
			<DocNavWrapper>
				<DocNav
					href="/docs/build-changes"
					as="/docs/build-changes"
					prev
				>
					Build Changes
				</DocNav>
				<DocNav
					href="/docs/code-style-rules"
					as="/docs/code-style-rules"
					next
				>
					Code Style Rules
				</DocNav>
			</DocNavWrapper>
		</Page>
	);
}

export default Index;
