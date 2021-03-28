import React from "react";
import Image from "next/image";
import { Page } from "../../../components/Pages";
import { Space, H1, Link, Box } from "../../../components/Layout";
import { DocNavWrapper, DocNav } from "../../../components/DocNav";

function Index({ posts = [] }) {
	return (
		<Page
			title="Design Documentation"
			description="Cherry provides a UI Kit template in Figma with all the standard web elements. The document template is divided in a few pages to keep everything organized."
		>
			<Space xs={20} lg={40} />
			<H1 size="hero1">Design</H1>
			<Space xs={10} lg={30} />
			<p>
				Cherry provides a UI Kit template in Figma with all the standard
				web elements. The document template is divided in a few pages to
				keep everything organized.
			</p>
			<ol>
				<li>
					<strong>Branding</strong> - Contains the colors definition
					and all the typography styles, both for desktop and mobile.
				</li>
				<li>
					<strong>Interface</strong> - You can find all the form
					elements, buttons, inputs, checkboxes, radio buttons and
					drop-down selects.
				</li>
				<li>
					<strong>Icons</strong> - Cherry uses open source icons from
					Ionicons.
				</li>
				<li>
					<strong>Spacing & Grid</strong> - Spacing definitions and
					Cherry Grid, the 12 column layout system.
				</li>
				<li>
					<strong>Meta Images</strong> - Favicon and all the rest of
					icons required for metadata.
				</li>
			</ol>
			<Space size={10} />
			<Box noPadding>
				<Image
					src="/img/docs/design/figma.jpg"
					alt="Scale illustration"
					width={1916}
					height={1051}
				/>
			</Box>
			<Space size={10} />
			<hr />
			<Space size={10} />
			<Link
				external
				href="https://www.figma.com/community/file/943862931766586094/Cherry-Design-System"
			>
				Figma UI Kit
			</Link>
			<Space size={20} />
			<DocNavWrapper>
				<DocNav href="/docs" as="/docs" prev>
					Docs Introduction
				</DocNav>
				<DocNav
					href="/docs/design/colors"
					as="/docs/design/colors"
					next
				>
					Design Colors
				</DocNav>
			</DocNavWrapper>
		</Page>
	);
}

export default Index;
