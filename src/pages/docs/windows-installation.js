import React from "react";
import { Space, H1, H2, H3, H4 } from "cherry-components";
import { Page } from "../../components/Pages";
import { DocNav, DocNavWrapper } from "../../components/DocNav";
import { Link } from "../../components/Layout";

function Index() {
	return (
		<Page title="Windows Installation">
			<Space xs={20} lg={40} />
			<H1 size="hero1">Windows Installation</H1>
			<Space xs={10} lg={30} />
			<p>
				Make sure Docker is installed, and WordPressify should run
				exactely the same on Windows as well.
			</p>
			<Space size={10} />
			<Link href="/docs/set-up-project" as="/docs/set-up-project" frame>
				Set Up Project
			</Link>
			<Space size={20} />
			<DocNavWrapper>
				<DocNav
					href="/docs/troubleshooting"
					as="/docs/troubleshooting"
					prev
				>
					Troubleshooting
				</DocNav>
				<DocNav href="/docs" as="/docs" next>
					Introduction
				</DocNav>
			</DocNavWrapper>
		</Page>
	);
}

export default Index;
