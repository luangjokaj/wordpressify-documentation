import React from "react";
import { Page } from "../../../components/Pages";
import { Space, H1, Row, Col, Box } from "../../../components/Layout";
import { DocNav, DocNavWrapper } from "../../../components/DocNav";
import Image from "next/image";

function Index({ posts = [] }) {
	return (
		<Page title="Scale">
			<Space xs={20} lg={40} />
			<H1 size="hero1">Scale</H1>
			<Space xs={20} lg={30} />
			<p>
				Cherry comes as a template for your design system. It contains
				only the essential elements and patterns for a modern website.
				Cherry it is meant to be extended and used as a starting point
				for your own design system. It follows the same naming
				convention from Design to Code and carries the same patterns
				across different technologies.
			</p>
			<p>
				All Cherry repositories are free and open-source. You can
				implement the source code directly in your development
				environment.
			</p>
			<Space size={10} />
			<Row>
				<Col xs={12} lg={4} textAlign="center">
					<Box
						href="/docs/scale/static-site"
						as="/docs/scale/static-site"
					>
						<Image
							src="/img/docs/scale/html5.png"
							alt="Html5 Logo"
							width={63.77}
							height={90}
						/>
						<strong data-primary>Static Site</strong>
					</Box>
				</Col>
				<Col xs={12} lg={4} textAlign="center">
					<Space xs={20} lg="none" />
					<Box
						href="/docs/scale/wordpress"
						as="/docs/scale/wordpress"
					>
						<Image
							src="/img/docs/scale/wordpress.png"
							alt="WordPress Logo"
							width={90}
							height={90}
						/>
						<strong data-primary>WordPress</strong>
					</Box>
				</Col>
				<Col xs={12} lg={4} textAlign="center">
					<Space xs={20} lg="none" />
					<Box href="/docs/scale/react" as="/docs/scale/react">
						<Image
							src="/img/docs/code/react.png"
							alt="React Logo"
							width={100.58}
							height={90}
						/>
						<strong data-primary>React</strong>
					</Box>
					<Space size={20} />
				</Col>
			</Row>
			<DocNavWrapper>
				<DocNav
					href="/docs/code/react-components/theme"
					as="/docs/code/react-components/theme"
					prev
				>
					Emotion Theme
				</DocNav>
				<DocNav
					href="/docs/scale/static-site"
					as="/docs/scale/static-site"
					next
				>
					Static Site
				</DocNav>
			</DocNavWrapper>
		</Page>
	);
}

export default Index;
