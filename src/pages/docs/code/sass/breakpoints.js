import React from "react";
import { Page } from "../../../../components/Pages";
import { Space, H1, H2 } from "../../../../components/Layout";
import { CodeBlock } from "../../../../components/CodeBlock";
import { DocNav, DocNavWrapper } from "../../../../components/DocNav";

const xsCode = `@media (min-width: $screen-xs) {
	// Media query for the Extra Small size = 0px
}`;

const smCode = `@media (min-width: $screen-sm) {
	// Media query for the Small size = 576px
}`;

const mdCode = `@media (min-width: $screen-md) {
	// Media query for the Medium size = 768px
}`;

const lgCode = `@media (min-width: $screen-lg) {
	// Media query for the Large size = 992px
}`;

const xlCode = `@media (min-width: $screen-xl) {
	// Media query for the XL Large size = 1200px
}`;

const xxlCode = `@media (min-width: $screen-xxl) {
	// Media query for the XXL Large size = 1440px
}`;

const xxxlCode = `@media (min-width: $screen-xxxl) {
	// Media query for the XXXL Large size = 1920px
}`;

function Index({ posts = [] }) {
	return (
		<Page title="Sass Breakpoints">
			<Space xs={20} lg={40} />
			<H1 size="hero1">Sass Breakpoints</H1>
			<Space xs={10} lg={30} />
			<p>
				Responsive web design is a web design method that enables the
				website to fit the screens of different devices automatically.
				Breakpoints define the screen size of the device. Cherry is
				built with the mobile first approach.
			</p>
			<Space size={10} />
			<CodeBlock language="scss" value={xsCode} />
			<Space size={10} />
			<CodeBlock language="scss" value={smCode} />
			<Space size={10} />
			<CodeBlock language="scss" value={mdCode} />
			<Space size={10} />
			<CodeBlock
				language="scss"
				value={lgCode}
				description={<H2 size="h6">🖥 Desktop starts here</H2>}
			/>
			<Space size={10} />
			<CodeBlock language="scss" value={xlCode} />
			<Space size={10} />
			<CodeBlock language="scss" value={xxlCode} />
			<Space size={10} />
			<CodeBlock language="scss" value={xxxlCode} />
			<Space size={20} />
			<DocNavWrapper>
				<DocNav
					href="/docs/code/sass/grid"
					as="/docs/code/sass/grid"
					prev
				>
					Sass Grid
				</DocNav>
				<DocNav
					href="/docs/code/sass/theme"
					as="/docs/code/sass/theme"
					next
				>
					Sass Theme
				</DocNav>
			</DocNavWrapper>
		</Page>
	);
}

export default Index;
