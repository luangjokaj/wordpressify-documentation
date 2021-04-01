import React from "react";
import { mockupStyles } from "./Mockup.styles";
import { MockupDots } from "../../assets/svg/MockupDots";
import { Space } from "../Layout";

function Mockup() {
	return (
		<div css={(theme) => mockupStyles(theme)}>
			<Space xs={20} lg={80} />
			<div className="window">
				<div className="top">
					<MockupDots />
				</div>
				<code className="content">
					// <span className="soft">Step 1:</span> Create a directory
					for the new WordPress website and from there <br />
					// run WordPressify to generate the file structure *
					<br />
					<span className="light">$</span>{" "}
					<span className="highlight">npx wordpressify</span>
					<br />
					<br />
					// <span className="soft">Step 2:</span> Run development
					environment
					<br />
					<span className="light">$</span>{" "}
					<span className="highlight">npm run dev</span>
					<br />
					<br />
					// <span className="soft">Step 3:</span> Generate
					distribution files
					<br />
					<span className="light">$</span>{" "}
					<span className="highlight">npm run prod</span>
					<br />
					<br />
					<span className="light">🚀</span>
					<br />
					<br />
					// * WordPressify requires Node v12+ and Docker Compose.
				</code>
			</div>
		</div>
	);
}

export { Mockup };
