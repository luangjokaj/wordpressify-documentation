import React from "react";
import { Page } from "../../../../components/Pages";
import { Space, H1, H2 } from "../../../../components/Layout";
import { CodeBlock } from "../../../../components/CodeBlock";
import { DocNav, DocNavWrapper } from "../../../../components/DocNav";

const xsCode = `@media (--screen-xs) {
	// Media query for the Extra Small size = 0px
}`;

const smCode = `@media (--screen-sm) {
	// Media query for the Small size = 576px
}`;

const mdCode = `@media (--screen-md) {
	// Media query for the Medium size = 768px
}`;

const lgCode = `@media (--screen-lg) {
	// Media query for the Large size = 992px
}`;

const xlCode = `@media (--screen-xl) {
	// Media query for the XL Large size = 1200px
}`;

const xxlCode = `@media (--screen-xxl) {
	// Media query for the XXL Large size = 1440px
}`;

const xxxlCode = `@media (--screen-xxxl) {
	// Media query for the XXXL Large size = 1920px
}`;

function Index({ posts = [] }) {
	return (
		<Page title="PostCSS Breakpoints">
			<Space xs={20} lg={40} />
			<H1 size="hero1">PostCSS Breakpoints</H1>
			<Space xs={10} lg={30} />
			<p>
				Responsive web design is a web design method that enables the
				website to fit the screens of different devices automatically.
				Breakpoints define the screen size of the device. Cherry is
				built with the mobile first approach.
			</p>
			<Space size={10} />
			<CodeBlock language="css" value={xsCode} />
			<Space size={10} />
			<CodeBlock language="css" value={smCode} />
			<Space size={10} />
			<CodeBlock language="css" value={mdCode} />
			<Space size={10} />
			<CodeBlock
				language="css"
				value={lgCode}
				description={<H2 size="h6">🖥 Desktop starts here</H2>}
			/>
			<Space size={10} />
			<CodeBlock language="css" value={xlCode} />
			<Space size={10} />
			<CodeBlock language="css" value={xxlCode} />
			<Space size={10} />
			<CodeBlock language="css" value={xxxlCode} />
			<Space size={20} />
			<DocNavWrapper>
				<DocNav
					href="/docs/code/postcss/grid"
					as="/docs/code/postcss/grid"
					prev
				>
					PostCSS Grid
				</DocNav>
				<DocNav
					href="/docs/code/postcss/theme"
					as="/docs/code/postcss/theme"
					next
				>
					PostCSS Theme
				</DocNav>
			</DocNavWrapper>
		</Page>
	);
}

export default Index;
