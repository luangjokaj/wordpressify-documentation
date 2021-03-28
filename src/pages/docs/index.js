import React from "react";
import Image from "next/image";
import { css } from "@emotion/react";
import { Page } from "../../components/Pages";
import { Space, H1, Row, Col, Box } from "../../components/Layout";
import { DocNav, DocNavWrapper } from "../../components/DocNav";

function Index({ posts = [] }) {
	return (
		<Page
			title="Documentation"
			description="Cherry is the starting point for your design system. It comes with a minimal set of pre-defined styles for the most common web patterns."
		>
			<Space xs={20} lg={40} />
			<H1 size="hero1">Getting started with Cherry Design System</H1>
			<Space xs={10} lg={30} />
			<p>
				Cherry is the starting point for your design system. It comes
				with a minimal set of pre-defined styles for the most common web
				patterns. It covers the design aspects of your website by
				providing a Figma template with the original designs. Each
				element of the design system is implemented in code using
				various modern fron-end technologies. This facilitates
				co-creation from design to code. If you are not a designer you
				can still use Cherry components to build your layouts
				out-of-the-box.
			</p>
			<Space size={20} />
			<Row>
				<Col xs={12} lg={4} textAlign="center">
					<Box href="/docs/design" as="/docs/design">
						<Image
							src="/img/design.png"
							alt="Design illustration"
							width={94.6}
							height={127}
						/>
						<strong data-secondary>Design</strong>
					</Box>
				</Col>
				<Col xs={12} lg={4} textAlign="center">
					<Space xs={20} lg="none" />
					<Box href="/docs/code" as="/docs/code">
						<Image
							src="/img/code.png"
							alt="Code illustration"
							width={113.89}
							height={127}
						/>
						<strong data-tertiary>Code</strong>
					</Box>
				</Col>
				<Col xs={12} lg={4} textAlign="center">
					<Space xs={20} lg="none" />
					<Box href="/docs/scale" as="/docs/scale">
						<Image
							src="/img/scale.png"
							alt="Scale illustration"
							width={138.37}
							height={127}
						/>
						<strong data-primary>Scale</strong>
					</Box>
					<Space size={20} />
				</Col>
			</Row>
			<DocNavWrapper>
				<DocNav href="/" as="/" prev>
					Home
				</DocNav>
				<DocNav href="/docs/design" as="/docs/design" next>
					Design Introduction
				</DocNav>
			</DocNavWrapper>
		</Page>
	);
}

export default Index;
