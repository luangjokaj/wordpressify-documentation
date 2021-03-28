import React from "react";
import { Page } from "../../../components/Pages";
import { Space, H1, Box, Link } from "../../../components/Layout";
import { DocNav, DocNavWrapper } from "../../../components/DocNav";
import Image from "next/image";

function Index({ posts = [] }) {
	return (
		<Page title="WordPress">
			<Space xs={20} lg={40} />
			<H1 size="hero1">WordPressify</H1>
			<Space xs={20} lg={30} />
			<p>
				WordPressify is a modern workflow for your WordPress
				development, with an integrated database, web server and
				auto-reload. CSS preprocessors and ES6 ready. It includes Cherry
				out-of-the-box, and it purges unused classes in production.
			</p>
			<Space size={10} />
			<Box noPadding>
				<Image
					src="/img/docs/scale/wordpressify.jpg"
					alt="WordPressify"
					width={1280}
					height={670}
				/>
			</Box>
			<Space size={10} />
			<hr />
			<Space size={10} />
			<Link
				external
				href="https://www.wordpressify.co/?ref=cherry.design"
			>
				WordPressify
			</Link>
			<Space size={20} />
			<DocNavWrapper>
				<DocNav
					href="/docs/scale/static-site"
					as="/docs/scale/static-site"
					prev
				>
					Static Site
				</DocNav>
				<DocNav href="/docs/scale/react" as="/docs/scale/react" next>
					React
				</DocNav>
			</DocNavWrapper>
		</Page>
	);
}

export default Index;
