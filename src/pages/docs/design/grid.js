import React from "react";
import Image from "next/image";
import { Page } from "../../../components/Pages";
import { Space, H1, Row, Col, Box, Link } from "../../../components/Layout";
import { DocNav, DocNavWrapper } from "../../../components/DocNav";

function Index({ posts = [] }) {
	return (
		<Page
			title="Design Grid"
			description="Cherry's grid system allows up to 12 columns across the page. If you do not want to use all 12 column individually, you can group the columns together to create wider columns. There are 3 different variations for the gutter size: default, medium, big."
		>
			<Space xs={20} lg={40} />
			<H1 size="hero1">Design Grid</H1>
			<Space xs={10} lg={30} />
			<p>
				Cherry's grid system allows up to 12 columns across the page. If
				you do not want to use all 12 column individually, you can group
				the columns together to create wider columns. There are 3
				different variations for the gutter size: default, medium, big.
			</p>
			<Space size={10} />
			<Row>
				<Col xs={12}>
					<Box noPadding>
						<p>
							<Space horizontal size={10} />
							<small>12</small>
						</p>
					</Box>
					<Space size={20} />
				</Col>
				<Col xs={10}>
					<Box noPadding>
						<p>
							<Space horizontal size={10} />
							<small>10</small>
						</p>
					</Box>
					<Space size={20} />
				</Col>
				<Col xs={2}>
					<Box noPadding>
						<p>
							<Space horizontal size={10} />
							<small>2</small>
						</p>
					</Box>
					<Space size={20} />
				</Col>
				<Col xs={9}>
					<Box noPadding>
						<p>
							<Space horizontal size={10} />
							<small>9</small>
						</p>
					</Box>
					<Space size={20} />
				</Col>
				<Col xs={3}>
					<Box noPadding>
						<p>
							<Space horizontal size={10} />
							<small>3</small>
						</p>
					</Box>
					<Space size={20} />
				</Col>
				<Col xs={8}>
					<Box noPadding>
						<p>
							<Space horizontal size={10} />
							<small>8</small>
						</p>
					</Box>
					<Space size={20} />
				</Col>
				<Col xs={4}>
					<Box noPadding>
						<p>
							<Space horizontal size={10} />
							<small>4</small>
						</p>
					</Box>
					<Space size={20} />
				</Col>
				<Col xs={7}>
					<Box noPadding>
						<p>
							<Space horizontal size={10} />
							<small>7</small>
						</p>
					</Box>
					<Space size={20} />
				</Col>
				<Col xs={5}>
					<Box noPadding>
						<p>
							<Space horizontal size={10} />
							<small>5</small>
						</p>
					</Box>
					<Space size={20} />
				</Col>
				<Col xs={6}>
					<Box noPadding>
						<p>
							<Space horizontal size={10} />
							<small>6</small>
						</p>
					</Box>
					<Space size={20} />
				</Col>
				<Col xs={6}>
					<Box noPadding>
						<p>
							<Space horizontal size={10} />
							<small>6</small>
						</p>
					</Box>
					<Space size={20} />
				</Col>
				<Col xs={5}>
					<Box noPadding>
						<p>
							<Space horizontal size={10} />
							<small>5</small>
						</p>
					</Box>
					<Space size={20} />
				</Col>
				<Col xs={7}>
					<Box noPadding>
						<p>
							<Space horizontal size={10} />
							<small>7</small>
						</p>
					</Box>
					<Space size={20} />
				</Col>
				<Col xs={4}>
					<Box noPadding>
						<p>
							<Space horizontal size={10} />
							<small>4</small>
						</p>
					</Box>
					<Space size={20} />
				</Col>
				<Col xs={8}>
					<Box noPadding>
						<p>
							<Space horizontal size={10} />
							<small>8</small>
						</p>
					</Box>
					<Space size={20} />
				</Col>
				<Col xs={3}>
					<Box noPadding>
						<p>
							<Space horizontal size={10} />
							<small>3</small>
						</p>
					</Box>
					<Space size={20} />
				</Col>
				<Col xs={9}>
					<Box noPadding>
						<p>
							<Space horizontal size={10} />
							<small>9</small>
						</p>
					</Box>
					<Space size={20} />
				</Col>
				<Col xs={2}>
					<Box noPadding>
						<p>
							<Space horizontal size={10} />
							<small>2</small>
						</p>
					</Box>
					<Space size={20} />
				</Col>
				<Col xs={10}>
					<Box noPadding>
						<p>
							<Space horizontal size={10} />
							<small>10</small>
						</p>
					</Box>
					<Space size={20} />
				</Col>
				<Col xs={12}>
					<Box noPadding>
						<p>
							<Space horizontal size={10} />
							<small>12</small>
						</p>
					</Box>
					<Space size={10} />
				</Col>
			</Row>
			<hr />
			<Space size={10} />
			<Link
				external
				href="https://www.figma.com/file/oumA2pAqhEDMpTAtDgarxr/Cherry-Design-System?node-id=152%3A137"
			>
				Grid in Figma
			</Link>
			<Space size={20} />
			<DocNavWrapper>
				<DocNav
					href="/docs/design/spacing"
					as="/docs/design/spacing"
					prev
				>
					Design Spacing
				</DocNav>
				<DocNav
					href="/docs/design/meta-images"
					as="/docs/design/meta-images"
					next
				>
					Design Meta Images
				</DocNav>
			</DocNavWrapper>
		</Page>
	);
}

export default Index;
