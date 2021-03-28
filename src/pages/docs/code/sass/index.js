import React from "react";
import { Page } from "../../../../components/Pages";
import { Space, H1, H2, H3 } from "../../../../components/Layout";
import { CodeBlock } from "../../../../components/CodeBlock";
import { DocNav, DocNavWrapper } from "../../../../components/DocNav";

const installCode = `npm install cherry-sass`;
const importCode = `@import "cherry-sass/src/cherry.scss";`;
const cherryScssCode = `@import "cherry-sass/src/theme";
@import "cherry-sass/src/helpers";
@import "cherry-sass/src/globals";
@import "cherry-sass/src/typography";
@import "cherry-sass/src/buttons";
@import "cherry-sass/src/inputs";
@import "cherry-sass/src/grid";
@import "cherry-sass/src/spacing";`;
const importDistCode = `@import "cherry-sass/dist/cherry.css";`;
const importHtmlCode = `<link rel="stylesheet" href="cherry-sass/dist/cherry.css">`;

function Index({ posts = [] }) {
	return (
		<Page title="Install Cherry for Sass">
			<Space xs={20} lg={40} />
			<H1 size="hero1">Install Cherry for Sass</H1>
			<Space xs={10} lg={30} />
			<p>
				Cherry is compiled in Sass, each element of the design system
				can be imported independently. You can import .scss files to
				your Sass project or import the minified version from the
				distribution files. To install Cherry for Sass, run the command:
			</p>
			<Space size={10} />
			<CodeBlock language="shell" value={installCode} />
			<Space size={20} />
			<H2>Import Scss</H2>
			<p>
				To import all Cherry elements, include the{" "}
				<strong>cherry.scss</strong> file in your entry point style
				file:
			</p>
			<Space size={10} />
			<CodeBlock language="scss" value={importCode} />
			<Space size={10} />
			<CodeBlock
				language="scss"
				value={cherryScssCode}
				description="Cherry.scss includes all the elements from the design system."
			/>
			<Space size={10} />
			<p>
				If you don't need all the elements, import only what you use,
				and make sure you have <strong>autoprefixer</strong> installed.
			</p>
			<p>
				To change the default theme configuration, check out{" "}
				<strong>theme.scss</strong>
			</p>
			<Space size={10} />
			<H3 size="h2">Import Minified CSS</H3>
			<p>
				To import all Cherry elements from the minified CSS. Import the{" "}
				<strong>cherry.css</strong> file from the <strong>dist</strong>{" "}
				directory. Include it it in your main css file or directly in
				the head of the HTML.
			</p>
			<Space size={10} />
			<CodeBlock language="css" value={importDistCode} />
			<p>or</p>
			<CodeBlock language="css" value={importHtmlCode} />
			<Space size={10} />
			<p>That's it 🎉 you are ready to use Cherry.</p>
			<Space size={10} />
			<DocNavWrapper>
				<DocNav
					href="/docs/code/meta-tags"
					as="/docs/code/meta-tags"
					prev
				>
					Meta Tags
				</DocNav>
				<DocNav
					href="/docs/code/sass/colors"
					as="/docs/code/sass/colors"
					next
				>
					Sass Colors
				</DocNav>
			</DocNavWrapper>
		</Page>
	);
}

export default Index;
