import React from "react";
import { Page } from "../../../components/Pages";
import { Space, H1, Link, Col, Row } from "../../../components/Layout";
import { ColorBox, ColorBoxContainer } from "../../../components/ColorBox";
import { DocNav, DocNavWrapper } from "../../../components/DocNav";

function Index({ posts = [] }) {
	return (
		<Page
			title="Design Colors"
			description="Cherry includes a default color palette, that is a great starting point if you don't have your own specific branding in mind."
		>
			<Space xs={20} lg={40} />
			<H1 size="hero1">Design Colors</H1>
			<Space xs={10} lg={30} />
			<p>
				Cherry includes a default color palette, that is a great
				starting point if you don't have your own specific branding in
				mind.
			</p>
			<Space size={10} />
			<hr />
			<Space size={10} />
			<Row>
				<Col xs={12} lg={4}>
					<ColorBox name="Primary Light" value="#FDA4AF" />
					<Space size={20} />
				</Col>
				<Col xs={12} lg={4}>
					<ColorBox name="Secondary Light" value="#7DD3FC" />
					<Space size={20} />
				</Col>
				<Col xs={12} lg={4}>
					<ColorBox name="Tertiary Light" value="#D8B4FE" />
					<Space size={20} />
				</Col>
			</Row>
			<Row>
				<Col xs={12} lg={4}>
					<ColorBox name="Primary" value="#F43F5E" />
					<Space size={20} />
				</Col>
				<Col xs={12} lg={4}>
					<ColorBox name="Secondary" value="#0EA5E9" />
					<Space size={20} />
				</Col>
				<Col xs={12} lg={4}>
					<ColorBox name="Tertiary" value="#A855F7" />
					<Space size={20} />
				</Col>
			</Row>
			<Row>
				<Col xs={12} lg={4}>
					<ColorBox name="Primary Dark" value="#9F1239" />
					<Space xs={20} lg={10} />
				</Col>
				<Col xs={12} lg={4}>
					<ColorBox name="Secondary Dark" value="#075985" />
					<Space xs={20} lg={10} />
				</Col>
				<Col xs={12} lg={4}>
					<ColorBox name="Tertiary Dark" value="#6B21A8" />
					<Space xs={10} lg={10} />
				</Col>
			</Row>
			<hr />
			<ColorBoxContainer>
				<ColorBox name="Dark" value="#000000" />
				<ColorBox name="Light" value="#FFFFFF" border />
			</ColorBoxContainer>
			<ColorBoxContainer>
				<ColorBox name="Gray Light" value="#E5E7EB" />
				<ColorBox name="Gray" value="#9CA3AF" />
				<ColorBox name="Gray Dark" value="#4B5563" />
			</ColorBoxContainer>
			<ColorBoxContainer>
				<ColorBox name="Success" value="#28A745" />
				<ColorBox name="Error" value="#DC3545" />
				<ColorBox name="Warning" value="#FFC107" />
				<ColorBox name="Info" value="#17A2B8" />
			</ColorBoxContainer>
			<hr />
			<Space size={10} />
			<Link
				external
				href="https://www.figma.com/file/oumA2pAqhEDMpTAtDgarxr/Cherry-Design-System?node-id=0%3A1"
			>
				Colors in Figma
			</Link>
			<Space size={20} />
			<DocNavWrapper>
				<DocNav href="/docs/design" as="/docs/design" prev>
					Design Introduction
				</DocNav>
				<DocNav
					href="/docs/design/typography"
					as="/docs/design/typography"
					next
				>
					Design Typography
				</DocNav>
			</DocNavWrapper>
		</Page>
	);
}

export default Index;
