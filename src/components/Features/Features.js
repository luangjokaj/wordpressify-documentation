import React from "react";
import Image from "next/image";
import { Col, Container, Row, Space } from "cherry-components";
import { useTheme } from "@emotion/react";
import { H2 } from "../Layout";
import { featuresStyles } from "./Features.styles";

function Features() {
	const theme = useTheme();
	return (
		<Container theme={theme} css={(theme) => featuresStyles(theme)}>
			<Row gutterLg="big" gutterXl="big" gutterXxl="big" gutterXxxl="big">
				<Col xs={12} lg={12} textAlign="center">
					<Space xs={40} lg={80} />
					<H2 size="hero3">Features</H2>
					<Space xs={40} lg={80} />
				</Col>
				<Col xs={6} lg={4} textAlign="center">
					<Image
						src="/img/icons/server.svg"
						alt="Dev Server"
						width={32}
						height={32}
					/>
					<strong>Dev Server</strong>
					<p>
						A development server for PHP and MariaDB database out of
						the box.
					</p>
					<Space xs={20} lg={40} />
				</Col>
				<Col xs={6} lg={4} textAlign="center">
					<Image
						src="/img/icons/reload.svg"
						alt="Auto-Reload"
						width={32}
						height={32}
					/>
					<strong>Auto-Reload</strong>
					<p>
						Watches for all your changes and reloads in real-time.
					</p>
					<Space xs={20} lg={40} />
				</Col>
				<Col xs={6} lg={4} textAlign="center">
					<Image
						src="/img/icons/color-palette.svg"
						alt="CSS"
						width={32}
						height={32}
					/>
					<strong>CSS</strong>
					<p>Preprocessors: PostCSS or Sass with source maps.</p>
					<Space xs={20} lg={40} />
				</Col>
				<Col xs={6} lg={4} textAlign="center">
					<Image
						src="/img/icons/code-slash.svg"
						alt="JavaScript ES6"
						width={32}
						height={32}
					/>
					<strong>JavaScript ES6</strong>
					<p>
						Babel compiler for writing next generation JavaScript.
					</p>
					<Space xs={20} lg="none" />
				</Col>
				<Col xs={6} lg={4} textAlign="center">
					<Image
						src="/img/icons/extension-puzzle.svg"
						alt="External Libraries"
						width={32}
						height={32}
					/>
					<strong>External Libraries</strong>
					<p>
						Easy import for external JavaScript libraries and npm
						scripts.
					</p>
				</Col>
				<Col xs={6} lg={4} textAlign="center">
					<Image
						src="/img/icons/accessibility.svg"
						alt="Customizable"
						width={32}
						height={32}
					/>
					<strong>Customizable</strong>
					<p>Flexible build customization, managed by gulp tasks.</p>
				</Col>
			</Row>
			<Space xs={20} lg={80} />
		</Container>
	);
}

export { Features };
