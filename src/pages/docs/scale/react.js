import React from "react";
import { Page } from "../../../components/Pages";
import { Space, H1, Box, Link } from "../../../components/Layout";
import { DocNav, DocNavWrapper } from "../../../components/DocNav";
import Image from "next/image";

function Index({ posts = [] }) {
	return (
		<Page title="React">
			<Space xs={20} lg={40} />
			<H1 size="hero1">Next.js</H1>
			<Space xs={20} lg={30} />
			<p>
				Nextify is a repository on GitHub with a pre-configured
				environment for React using Next.js and Emotion. It includes
				Cherry out-of-the-box and you can pass the Emotion theme down to
				Cherry React Components.
			</p>
			<Space size={10} />
			<Box noPadding>
				<Image
					src="/img/docs/scale/nextify.jpg"
					alt="Nextify"
					width={1280}
					height={670}
				/>
			</Box>
			<Space size={10} />
			<hr />
			<Space size={10} />
			<Link
				external
				href="https://github.com/luangjokaj/nextify/?ref=cherry.design"
			>
				Nextify
			</Link>
			<Space size={20} />
			<DocNavWrapper>
				<DocNav
					href="/docs/scale/wordpress"
					as="/docs/scale/wordpress"
					prev
				>
					WordPress
				</DocNav>
				<DocNav href="/docs" as="/docs" next>
					Docs Introduction
				</DocNav>
			</DocNavWrapper>
		</Page>
	);
}

export default Index;
