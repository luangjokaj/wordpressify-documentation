import React from "react";
import { css } from "@emotion/react";
import Image from "next/image";
import { Page } from "../components/Pages";
import {
	Container,
	Row,
	Col,
	Space,
	Button,
	H1,
	H2,
	H3,
	H4,
	Link,
	Input,
	Flex,
} from "../components/Layout";
import { LogoWrapper } from "../components/LogoWrapper/LogoWrapper";
import { BigNumber } from "../components/BigNumber";
import { Projects } from "../components/Projects";
import { Socials } from "../components/Socials/Socials";
import { Features } from "../components/Features";
import { Mockup } from "../components/Mockup";

function Index({ posts = [] }) {
	return (
		<Page title="A build system designed to automate your WordPress development workflow">
			<Container>
				<Space xs={20} lg={150} />
				<Row gutterLg="medium">
					<Col xs={12} lg={8}>
						<H1 size="hero2">
							A build system designed to automate your WordPress
							development workflow.
						</H1>
						<Space xs="none" lg={10} />
						<p>
							WordPressify is a simple tool that helps you build
							WordPress themes and plugins. It takes care of the
							development experience by providing a web server
							with a database out of the box, zero-configuration
							required.
						</p>
						<Space xs={10} lg={20} />
						<Flex>
							<Link href="/docs" as="/docs">
								Get Started
							</Link>
							<Space size={20} horizontal />
							<Input
								value="npx wordpressify"
								fullWidth={false}
								onChange={() => {}}
								spellCheck="false"
							/>
						</Flex>
						<Space xs={10} lg="none" />
					</Col>
					<Col xs={12} lg={4} textAlign="center">
						<Space xs={10} lg="none" />
						<Image
							src="/img/illustration.svg"
							alt="WordPressify home page illustration"
							width={445}
							height={445}
						/>
						<Space xs={10} lg="none" />
					</Col>
				</Row>
				<Space xs={10} lg={150} />
			</Container>
			<Mockup />
			<Features />
			<Projects />
			<Space xs={20} lg={80} />
			<Container>
				<Row>
					<Col xs={12} textAlign="center">
						<Link href="/docs" as="/docs" size="big">
							Get Started
						</Link>
						<Space xs={20} lg={80} />
					</Col>
				</Row>
			</Container>
		</Page>
	);
}

export default Index;