import React from "react";
import { Space, H1, H2 } from "cherry-components";
import { Page } from "../../components/Pages";
import { DocNav, DocNavWrapper } from "../../components/DocNav";
import { CodeBlock } from "../../components/CodeBlock";

function Index() {
	return (
		<Page title="Code Style Rules">
			<Space xs={20} lg={40} />
			<H1 size="hero1">Code Style Rules</H1>
			<p>WordPressify comes with its own set of code style rules:</p>
			<CodeBlock language="shell" value={`.stylelintrc`} />
			<Space size={10} />
			<H2>Lint CSS</H2>
			<p>
				Before pushing changes make sure you have clean and consistent
				CSS. Run{" "}
				<a
					href="https://stylelint.io/"
					target="_blank"
					rel="noreferrer noopener"
				>
					stylelint
				</a>{" "}
				with the command:
			</p>
			<CodeBlock language="shell" value={`npm run lintcss`} />
			<p>
				Alternatively if you don't have NodeJS installed locally, use
				Docker commands:
			</p>
			<CodeBlock
				language="shell"
				value={`docker compose run --rm nodejs npm run lint:css`}
			/>
			<Space size={10} />
			<DocNavWrapper>
				<DocNav href="/docs/backups" as="/docs/backups" prev>
					Backups
				</DocNav>
				<DocNav href="/docs/using-xdebug" as="/docs/using-xdebug" next>
					Using Xdebug
				</DocNav>
			</DocNavWrapper>
		</Page>
	);
}

export default Index;
