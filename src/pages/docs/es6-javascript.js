import React from "react";
import Image from "next/image";
import { css } from "@emotion/react";
import { Page } from "../../components/Pages";
import { Space, H1, H2, H3, Box, Link } from "../../components/Layout";
import { DocNav, DocNavWrapper } from "../../components/DocNav";
import { CodeBlock } from "../../components/CodeBlock";

function Index({ posts = [] }) {
	return (
		<Page title="ES6 JavaScript">
			<Space xs={20} lg={40} />
			<H1 size="hero1">ES6 JavaScript</H1>
			<p>
				WordPressify supports ES6 JavaScript with Babel. Babel has
				support for the latest version of JavaScript through syntax
				transformers. These plugins allow you to use new syntax, right
				now without waiting for browser support.
			</p>
			<H2 size="h1">Write ES6 JavaScript</H2>
			<p>Your JavaScript code should be located in:</p>
			<CodeBlock language="shell" value={`src/assets/js/`} />
			<p>
				WordPressify will watch for changes under the{" "}
				<strong>js</strong> directory and bundle the code in a single
				file, which will be included in the footer of the page as:
			</p>
			<CodeBlock language="shell" value={`footer-bundle.js`} />
			<p>
				Check the gulp configuration to learn more about how JavaScript
				is generated.
			</p>
			<Space size={10} />
			<DocNavWrapper>
				<DocNav
					href="/docs/images-and-fonts"
					as="/docs/images-and-fonts"
					prev
				>
					Images and Fonts
				</DocNav>
				<DocNav
					href="/docs/external-libraries"
					as="/docs/external-libraries"
					next
				>
					External Libraries
				</DocNav>
			</DocNavWrapper>
		</Page>
	);
}

export default Index;
