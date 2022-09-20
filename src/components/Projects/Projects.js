import React from "react";
import Image from "next/image";
import { Container, Space, H3 } from "cherry-components";
import { useTheme } from "@emotion/react";
import { projectStyles } from "./Projects.styles";

function Projects() {
	const theme = useTheme();
	return (
		<>
			<Container theme={theme} textAlign="center">
				<hr className="no-margin" />
				<Space xs={40} lg={80} />
				<H3 size="hero3">Open Source Projects</H3>
				<Space xs={40} lg={80} />
			</Container>
			<div css={(theme) => projectStyles(theme)}>
				<a
					href="https://cherry.design/?ref=wordpressify.co"
					target="_blank"
					rel="noreferrer"
					className="cherry"
				>
					<span>
						<Image
							src="/img/projects/cherry.svg"
							alt="Cherry Logo"
							width={250.65}
							height={65}
						/>
						<p>A design system to build the web.</p>
					</span>
				</a>
				<a
					href="https://www.gopablo.co/?ref=wordpressify.co"
					target="_blank"
					rel="noreferrer"
					className="gopablo"
				>
					<span>
						<Image
							src="/img/projects/gopablo.svg"
							alt="GoPablo Logo"
							width={293.9}
							height={110}
						/>
						<p>Create optimized static websites.</p>
					</span>
				</a>
				<a
					href="https://www.nextify.me/?ref=wordpressify.co"
					target="_blank"
					rel="noreferrer"
					className="nextify"
				>
					<span>
						<Image
							src="/img/projects/nextify.svg"
							alt="Nextify Logo"
							width={302.5}
							height={40}
						/>
						<p>React apps using Next.js and Emotion.</p>
					</span>
				</a>
				<a
					href="https://www.fuzzymail.co/?ref=wordpressify.co"
					target="_blank"
					rel="noreferrer"
					className="fuzzymail"
				>
					<span>
						<Image
							src="/img/projects/fuzzymail.svg"
							alt="FuzzyMail Logo"
							width={242.44}
							height={65}
						/>
						<p>Responsive email template generator.</p>
					</span>
				</a>
			</div>
		</>
	);
}

export { Projects };
