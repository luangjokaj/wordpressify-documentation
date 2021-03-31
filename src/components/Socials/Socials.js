import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Col, Container, H3, Row, Space } from "../Layout";
import { Twitter } from "../../assets/svg/Twitter";
import { GitHub } from "../../assets/svg/GitHub";
import { Dribbble } from "../../assets/svg/Dribbble";
import { Pictogram } from "../../assets/svg/Pictogram";
import { Discord } from "../../assets/svg/Discord";
import { socialStyles } from "./Socials.styles";

function Socials() {
	const router = useRouter();

	return (
		<>
			<hr className="no-margin" />
			<Space xs={20} lg={80} />
			<Container
				css={(theme) => socialStyles(theme)}
				fluid={router.pathname.includes("/docs") ? true : false}
			>
				<Row>
					<Col xs={12} lg={6}>
						<H3 size="h5">Follow the creator</H3>
						<Space xs={20} lg={20} />
						<ul className="socials-list">
							<li className="rounded user">
								<span className="profile">
									<Image
										src="/img/luan.jpg"
										alt="Luan Gjokaj"
										width={40}
										height={40}
									/>
								</span>
								<em className="label">Luan Gjokaj</em>
							</li>
							<li>
								<a
									href="https://twitter.com/LuanGjokaj?ref=wordpressify.co"
									target="_blank"
									rel="noreferrer"
									className="icon-link twitter"
								>
									<span>
										<Twitter />
									</span>
									<em className="label">Twitter</em>
								</a>
							</li>
							<li>
								<a
									href="https://github.com/luangjokaj?ref=wordpressify.co"
									target="_blank"
									rel="noreferrer"
									className="icon-link github"
								>
									<span>
										<GitHub />
									</span>
									<em className="label">GitHub</em>
								</a>
							</li>
							<li>
								<a
									href="https://dribbble.com/luangjokaj?ref=wordpressify.co"
									target="_blank"
									rel="noreferrer"
									className="icon-link dribbble"
								>
									<span>
										<Dribbble />
									</span>
									<em className="label">Dribbble</em>
								</a>
							</li>
						</ul>
					</Col>
					<Col xs={12} lg={6}>
						<Space xs={20} lg="none" />
						<H3 size="h5">Join the community</H3>
						<Space xs={20} lg={20} />
						<ul className="socials-list">
							<li className="rounded user">
								<span className="product">
									<span className="full-width">
										<Pictogram />
									</span>
								</span>
								<em className="label">WordPressify</em>
							</li>
							<li>
								<a
									href="https://discord.com/invite/uQFdMddMZw?ref=wordpressify.co"
									target="_blank"
									rel="noreferrer"
									className="icon-link discord"
								>
									<span>
										<Discord />
									</span>
									<em className="label">Discord</em>
								</a>
							</li>
							<li>
								<a
									href="https://github.com/luangjokaj/wordpressify/discussions/?ref=wordpressify.co"
									target="_blank"
									rel="noreferrer"
									className="icon-link github"
								>
									<span>
										<GitHub />
									</span>
									<em className="label">GitHub</em>
								</a>
							</li>
						</ul>
						<Space xs={20} lg={60} />
					</Col>
				</Row>
			</Container>
		</>
	);
}

export { Socials };
