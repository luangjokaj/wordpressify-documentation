import React from "react";
import { Page } from "../../../components/Pages";
import {
	Space,
	H1,
	Link,
	Box,
	Row,
	Col,
	Button,
} from "../../../components/Layout";
import { DocNav, DocNavWrapper } from "../../../components/DocNav";

function Index({ posts = [] }) {
	return (
		<Page
			title="Design Buttons"
			description="Cherry includes different button styles with all the various states. It has a variation of 3 colors: Primary, Secondary and Tertiary. A default and a big size, as well as the framed buttons."
		>
			<Space xs={20} lg={40} />
			<H1 size="hero1">Design Buttons</H1>
			<Space xs={10} lg={30} />
			<p>
				Cherry includes different button styles with all the various
				states. It has a variation of 3 colors: Primary, Secondary and
				Tertiary. A default and a big size, as well as the framed
				buttons.
			</p>
			<Space size={10} />
			<Row>
				<Col xs={12} lg={4}>
					<Button variant="primary">Primary</Button>
					<Space size={20} />
				</Col>
				<Col xs={12} lg={4}>
					<Button variant="secondary">Secondary</Button>
					<Space size={20} />
				</Col>
				<Col xs={12} lg={4}>
					<Button variant="tertiary">Tertiary</Button>
					<Space size={20} />
				</Col>
				<Col xs={12} lg={4}>
					<Button variant="primary" frame>
						Primary Frame
					</Button>
					<Space size={20} />
				</Col>
				<Col xs={12} lg={4}>
					<Button variant="secondary" frame>
						Secondary Frame
					</Button>
					<Space size={20} />
				</Col>
				<Col xs={12} lg={4}>
					<Button variant="tertiary" frame>
						Tertiary Frame
					</Button>
					<Space size={20} />
				</Col>
				<Col xs={12} lg={4}>
					<Button variant="primary" size="big">
						Primary Big
					</Button>
					<Space size={20} />
				</Col>
				<Col xs={12} lg={4}>
					<Button variant="secondary" size="big">
						Secondary Big
					</Button>
					<Space size={20} />
				</Col>
				<Col xs={12} lg={4}>
					<Button variant="tertiary" size="big">
						Tertiary Big
					</Button>
					<Space size={20} />
				</Col>
				<Col xs={12} lg={4}>
					<Button variant="primary" frame size="big">
						Primary Frame Big
					</Button>
					<Space size={20} />
				</Col>
				<Col xs={12} lg={4}>
					<Button variant="secondary" frame size="big">
						Secondary Frame Big
					</Button>
					<Space size={20} />
				</Col>
				<Col xs={12} lg={4}>
					<Button variant="tertiary" frame size="big">
						Tertiary Frame Big
					</Button>
					<Space size={20} />
				</Col>
				<Col xs={12} lg={4}>
					<Button variant="primary" disabled>
						Disabled
					</Button>
					<Space size={20} />
				</Col>
				<Col xs={12} lg={4}>
					<Button variant="secondary" disabled>
						Disabled
					</Button>
					<Space size={20} />
				</Col>
				<Col xs={12} lg={4}>
					<Button variant="tertiary" disabled>
						Disabled
					</Button>
					<Space size={20} />
				</Col>
				<Col xs={12} lg={4}>
					<Button variant="primary" frame disabled>
						Primary Frame
					</Button>
					<Space size={20} />
				</Col>
				<Col xs={12} lg={4}>
					<Button variant="secondary" frame disabled>
						Secondary Frame
					</Button>
					<Space size={20} />
				</Col>
				<Col xs={12} lg={4}>
					<Button variant="tertiary" frame disabled>
						Tertiary Frame
					</Button>
					<Space size={20} />
				</Col>
				<Col xs={12} lg={4}>
					<Button variant="primary" disabled size="big">
						Disabled Big
					</Button>
					<Space size={20} />
				</Col>
				<Col xs={12} lg={4}>
					<Button variant="secondary" disabled size="big">
						Disabled Big
					</Button>
					<Space size={20} />
				</Col>
				<Col xs={12} lg={4}>
					<Button variant="tertiary" disabled size="big">
						Disabled Big
					</Button>
					<Space size={20} />
				</Col>
				<Col xs={12} lg={4}>
					<Button variant="primary" frame disabled size="big">
						Primary Frame Big
					</Button>
					<Space xs={20} lg={10} />
				</Col>
				<Col xs={12} lg={4}>
					<Button variant="secondary" frame disabled size="big">
						Secondary Frame Big
					</Button>
					<Space xs={20} lg={10} />
				</Col>
				<Col xs={12} lg={4}>
					<Button variant="tertiary" frame disabled size="big">
						Tertiary Frame Big
					</Button>
					<Space size={10} />
				</Col>
			</Row>
			<hr />
			<Space size={10} />
			<Link
				external
				href="https://www.figma.com/file/oumA2pAqhEDMpTAtDgarxr/Cherry-Design-System?node-id=17%3A0"
			>
				Buttons in Figma
			</Link>
			<Space size={20} />
			<DocNavWrapper>
				<DocNav
					href="/docs/design/typography"
					as="/docs/design/typography"
					prev
				>
					Design Typography
				</DocNav>
				<DocNav
					href="/docs/design/inputs"
					as="/docs/design/inputs"
					next
				>
					Design Inputs
				</DocNav>
			</DocNavWrapper>
		</Page>
	);
}

export default Index;
