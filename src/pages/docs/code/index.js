import React from "react";
import Image from "next/image";
import { Page } from "../../../components/Pages";
import { Space, H1, Row, Col, Box } from "../../../components/Layout";
import { DocNav, DocNavWrapper } from "../../../components/DocNav";

function Index({ posts = [] }) {
	return (
		<Page title="Code Documentation">
			<Space xs={20} lg={40} />
			<H1 size="hero1">Code</H1>
			<Space xs={10} lg={30} />
			<p>
				Every element of the design system comes with an implementation
				in code. Cherry can be used in Sass, PostCSS or as React
				Components. You have access to the source code in our GitHub{" "}
				<a
					href="https://github.com/cherry-design-system/?ref=cherry.design"
					target="_blank"
					rel="noopener noreferrer"
				>
					repositories
				</a>
				.
			</p>
			<Space size={20} />
			<Row>
				<Col xs={12} lg={4} textAlign="center">
					<Box href="/docs/code/sass" as="/docs/code/sass">
						<Image
							src="/img/docs/code/sass.png"
							alt="Sass Logo"
							width={120}
							height={90}
						/>
						<strong data-tertiary>Sass</strong>
					</Box>
				</Col>
				<Col xs={12} lg={4} textAlign="center">
					<Space xs={20} lg="none" />
					<Box href="/docs/code/postcss" as="/docs/code/postcss">
						<Image
							src="/img/docs/code/postcss.png"
							alt="PostCSS Logo"
							width={90}
							height={90}
						/>
						<strong data-tertiary>PostCSS</strong>
					</Box>
				</Col>
				<Col xs={12} lg={4} textAlign="center">
					<Space xs={20} lg="none" />
					<Box
						href="/docs/code/react-components"
						as="/docs/code/react-components"
					>
						<Image
							src="/img/docs/code/react.png"
							alt="React Logo"
							width={100.58}
							height={90}
						/>
						<strong data-tertiary>React Components</strong>
					</Box>
					<Space size={20} />
				</Col>
			</Row>
			<DocNavWrapper>
				<DocNav
					href="/docs/design/meta-images"
					as="/docs/design/meta-images"
					prev
				>
					Design Meta Images
				</DocNav>
				<DocNav
					href="/docs/code/meta-tags"
					as="/docs/code/meta-tags"
					next
				>
					Meta Tags
				</DocNav>
			</DocNavWrapper>
		</Page>
	);
}

export default Index;
