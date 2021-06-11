import React, { useEffect, useState } from "react";
import { Col, Container, Row, Space } from "cherry-components";
import { Logo } from "../../assets/svg/Logo";
import { Riangle } from "../../assets/svg/Riangle";
import { Star } from "../../assets/svg/Star";
import {
	footerStyles,
	footerLeftColStyles,
	footerRightColStyles,
} from "./Footer.styles";
import { Socials } from "../Socials/Socials";
import { GitHub } from "../../assets/svg/GitHub";

function Footer({ className }) {
	const [stars, setStars] = useState(null);

	const fetchGitHubStars = async () => {
		await fetch("https://api.github.com/repos/luangjokaj/wordpressify")
			.then((response) => response.json())
			.then((data) => {
				setStars(data.stargazers_count);
			});
	};

	useEffect(() => {
		return fetchGitHubStars();
	}, []);

	return (
		<>
			<Socials />
			<footer className={className} css={(theme) => footerStyles(theme)}>
				<Container>
					<Space xs={40} lg={80} />
					<Row gutterLg="default" className="first-row">
						<Col xs={12} lg={6}>
							<a
								href="https://github.com/luangjokaj/wordpressify/?ref=wordpressify.co"
								target="_blank"
								rel="noreferrer"
								className="github-stars"
							>
								<GitHub /> <span>GitHub</span>{" "}
								{stars && (
									<small>
										{stars} <Star />
									</small>
								)}
							</a>
						</Col>
						<Col xs={12} lg={6}>
							<ul>
								<li>
									<a
										href="https://cherry.design/?ref=wordpressify.co"
										target="_blank"
										rel="noreferrer"
									>
										Cherry
									</a>
								</li>
								<li>
									<a
										href="https://www.gopablo.co/?ref=wordpressify.co"
										target="_blank"
										rel="noreferrer"
									>
										GoPablo
									</a>
								</li>
								<li>
									<a
										href="https://www.wordpressify.co/?ref=wordpressify.co"
										target="_blank"
										rel="noreferrer"
									>
										WordPressify
									</a>
								</li>
								<li>
									<a
										href="https://www.nextify.me/?ref=wordpressify.co"
										target="_blank"
										rel="noreferrer"
									>
										Nextify
									</a>
								</li>
								<li>
									<a
										href="https://www.fuzzymail.co/?ref=wordpressify.co"
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
					<Row gutterLg="default">
						<Col xs={12} lg={6} className="left-col">
							<Space xs={40} lg={100} />
							<a
								href="https://www.riangle.com/?ref=wordpressify.co"
								target="_blank"
								rel="noopener noreferrer"
								className="icon-link"
							>
								<Riangle />
							</a>
							<p>
								Powered by{" "}
								<a
									href="https://www.riangle.com/?ref=wordpressify.co"
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
							<a href="#">
								<Logo />
							</a>
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
