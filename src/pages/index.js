import React from "react";
import { useTheme } from "@emotion/react";
import { Col, Container, Input, Row, Space } from "cherry-components";
import Image from "next/image";
import { Page } from "../components/Pages";
import { Button, H1, H2, H3, H4, Link, Flex } from "../components/Layout";
import { Projects } from "../components/Projects";
import { Socials } from "../components/Socials/Socials";
import { Features } from "../components/Features";
import { Mockup } from "../components/Mockup";

function Index() {
	const theme = useTheme();
	return (
		<Page title="A build system designed to automate your WordPress development workflow">
			<Container theme={theme}>
				<Space xs={20} lg={150} />
				<Row
					gutterLg="medium"
					gutterXl="medium"
					gutterXxl="medium"
					gutterXxl="medium"
				>
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
								variant="primary"
								theme={theme}
								value="npx wordpressify"
								fullWidth={false}
								onChange={() => {}}
								onClick={() => {
									const textBox = document.getElementById(
										"npm-package",
									);
									textBox.select();
									document.execCommand("copy");
								}}
								spellCheck="false"
								id="npm-package"
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
			<Container theme={theme}>
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
