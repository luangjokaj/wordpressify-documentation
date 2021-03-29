import React from "react";
import { useRouter } from "next/router";
import { Col, Container, Row, Space } from "../Layout";
import { Logo } from "../../assets/svg/Logo";
import { Riangle } from "../../assets/svg/Riangle";
import {
	footerStyles,
	footerLeftColStyles,
	footerRightColStyles,
} from "./Footer.styles";
import { Socials } from "../Socials/Socials";
import { GitHub } from "../../assets/svg/GitHub";

function Footer({ className }) {
	const router = useRouter();

	return (
		<>
			<Socials />
			<footer className={className} css={(theme) => footerStyles(theme)}>
				<Container fluid={router.pathname.includes("/docs")}>
					<Space xs={40} lg={80} />
					<Row className="first-row">
						<Col xs={12} lg={6}>
							<a
								href="https://github.com/cherry-design-system/?ref=cherry.design"
								target="_blank"
								rel="noreferrer"
							>
								<GitHub /> <span>GitHub</span>
							</a>
						</Col>
						<Col xs={12} lg={6}>
							<ul>
								<li>
									<a
										href="https://cherry.design/?ref=cherry.design"
										target="_blank"
										rel="noreferrer"
									>
										Cherry
									</a>
								</li>
								<li>
									<a
										href="https://www.gopablo.co/?ref=cherry.design"
										target="_blank"
										rel="noreferrer"
									>
										GoPablo
									</a>
								</li>
								<li>
									<a
										href="https://www.wordpressify.co/?ref=cherry.design"
										target="_blank"
										rel="noreferrer"
									>
										WordPressify
									</a>
								</li>
								<li>
									<a
										href="https://www.nextify.me/?ref=cherry.design"
										target="_blank"
										rel="noreferrer"
									>
										Nextify
									</a>
								</li>
								<li>
									<a
										href="https://www.fuzzymail.co/?ref=cherry.design"
										target="_blank"
										rel="noreferrer"
									>
										FuzzyMail
									</a>
								</li>
							</ul>
						</Col>
					</Row>
					<Space xs={40} lg={80} />
					<hr />
					<Row>
						<Col xs={12} lg={6} className="left-col">
							<Space xs={40} lg={100} />
							<a
								href="https://www.riangle.com/?ref=cherry.design"
								target="_blank"
								rel="noopener noreferrer"
								className="icon-link"
							>
								<Riangle />
							</a>
							<p>
								Powered by{" "}
								<a
									href="https://www.riangle.com/?ref=cherry.design"
									target="_blank"
									rel="noopener noreferrer"
								>
									Riangle
								</a>
								.
							</p>
							<Space xs="none" lg={20} />
						</Col>
						<Col xs={12} lg={6} className="right-col">
							<Space xs={30} lg={80} />
							<Logo />
							<p>© Copyright 2021 - All rights reserved. </p>
							<Space xs={30} lg={70} />
						</Col>
					</Row>
				</Container>
			</footer>
		</>
	);
}

export { Footer };