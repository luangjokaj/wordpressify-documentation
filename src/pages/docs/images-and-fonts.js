import React from "react";
import Image from "next/image";
import { css } from "@emotion/react";
import { Page } from "../../components/Pages";
import { Space, H1, H2, H3, Box, Link } from "../../components/Layout";
import { DocNav, DocNavWrapper } from "../../components/DocNav";
import { CodeBlock } from "../../components/CodeBlock";

const fontCode = `@font-face {
    font-family: 'Helvetica Neue Thin';
    src: url('./fonts/Helvetica-Neue-Thin.eot?#iefix');
    src: url('./fonts/Helvetica-Neue-Thin.eot?#iefix') format('eot'),
    url('./fonts/Helvetica-Neue-Thin.woff2') format('woff2'),
    url('./fonts/Helvetica-Neue-Thin.woff') format('woff'),
    url('./fonts/Helvetica-Neue-Thin.ttf') format('truetype'),
    url('./fonts/Helvetica-Neue-Thin.svg#e3b7d1e7c160') format('svg');
}`;

function Index({ posts = [] }) {
	return (
		<Page title="Images and Fonts">
			<Space xs={20} lg={40} />
			<H1 size="hero1">Images and Fonts</H1>
			<Space xs={10} lg={30} />
			<H2 size="h1">Images</H2>
			<p>
				It is recommended to store template image assets in your theme
				directory:
			</p>
			<CodeBlock language="shell" value={`src/assets/img/`} />
			<p>
				Ideally other images should be managed through the Media Library
				of WordPress. Try to only store SVG or minimal assets in your
				theme directory to keep the template as light as possible.
			</p>
			<p>
				In the production build SVGs and other image assets will go
				through a <strong>minification</strong> process.
			</p>
			<Space size={10} />
			<H3 size="h1">Fonts</H3>
			<p>Fonts are always special. Your fonts should be stored in:</p>
			<CodeBlock language="shell" value={`src/assets/fonts/`} />
			<p>Then you can include them in your CSS:</p>
			<CodeBlock language="css" value={fontCode} />
			<Space size={20} />
			<DocNavWrapper>
				<DocNav
					href="/docs/css-postcss-and-sass"
					as="/docs/css-postcss-and-sass"
					prev
				>
					CSS, PostCSS and Sass
				</DocNav>
				<DocNav
					href="/docs/es6-javascript"
					as="/docs/es6-javascript"
					next
				>
					ES6 JavaScript
				</DocNav>
			</DocNavWrapper>
		</Page>
	);
}

export default Index;
