import React from "react";
import Image from "next/image";
import { css } from "@emotion/react";
import { Page } from "../../components/Pages";
import { Space, H1, H2, H3, Box, Link } from "../../components/Layout";
import { DocNav, DocNavWrapper } from "../../components/DocNav";
import { CodeBlock } from "../../components/CodeBlock";

function Index({ posts = [] }) {
	return (
		<Page title="Change PHP and Docker settings">
			<Space xs={20} lg={40} />
			<H1 size="hero1">Change PHP and Docker settings</H1>
			<p>
				You can make changes to PHP and Docker files (the ones that
				don’t have <strong>.in</strong> extension).
			</p>
			<p>
				Change PHP settings in <strong>config/php.ini</strong> after
				starting WordPressify. To make your changes active, restart PHP:
			</p>
			<CodeBlock language="shell" value={`npm run env:restart`} />
			<p>
				If you make changes to <strong>Dockerfile</strong> or{" "}
				<storng>docker-compose.yml</storng>, then you must rebuild
				containers:
			</p>
			<CodeBlock language="shell" value={`npm run env:rebuild`} />
			<Space size={20} />
			<DocNavWrapper>
				<DocNav
					href="/docs/external-libraries"
					as="/docs/external-libraries"
					prev
				>
					External Libraries
				</DocNav>
				<DocNav href="/docs/backups" as="/docs/backups" next>
					Backups
				</DocNav>
			</DocNavWrapper>
		</Page>
	);
}

export default Index;
