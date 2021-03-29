import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Logo } from "../../assets/svg/Logo";
import { GitHub } from "../../assets/svg/GitHub";
import { Container } from "../Layout";
import { headerStyles } from "./Header.styles";

function Header() {
	const router = useRouter();
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		return setIsLoaded(true);
	}, []);

	return (
		<header css={(theme) => headerStyles(theme, isLoaded)}>
			<Container
				fluid={router.pathname.includes("/docs")}
				className="container"
			>
				<div className="inner-wrapper">
					<Link href="/" as="/">
						<a className="logo">
							<Logo />
						</a>
					</Link>
					<ul>
						<li>
							<Link href="/docs" as="/docs">
								<a>
									<span className="desktop">
										Documentation
									</span>
									<span className="mobile">Docs</span>
								</a>
							</Link>
						</li>
						<li>
							<a
								href="https://github.com/luangjokaj/wordpressify/?ref=wordpressify.co"
								target="_blank"
								rel="noopener noreferrer"
								className="github"
							>
								<GitHub />
							</a>
						</li>
					</ul>
				</div>
			</Container>
		</header>
	);
}

export { Header };