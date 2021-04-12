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
			<p>
				To install WordPressify on Windows, you need to use Windows
				Subsystem for Linux. Then follow the WordPressify installation
				instructions.
			</p>
			<Space size={10} />
			<Link
				href="https://docs.microsoft.com/en-us/windows/wsl/install-win10"
				external
				frame
			>
				WSL Installation Guide
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
