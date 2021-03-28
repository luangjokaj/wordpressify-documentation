import React from "react";
import { Page } from "../../../../components/Pages";
import { Space, H1, H2, H3, H4 } from "../../../../components/Layout";
import { CodeBlock } from "../../../../components/CodeBlock";
import { DocNav, DocNavWrapper } from "../../../../components/DocNav";

const installCode = `npm install cherry-postcss`;
const importCode = `@import "cherry-postcss/src/cherry.css";`;
const cherryCssCode = `@import "cherry-postcss/src/theme";
@import "cherry-postcss/src/helpers";
@import "cherry-postcss/src/globals";
@import "cherry-postcss/src/typography";
@import "cherry-postcss/src/buttons";
@import "cherry-postcss/src/inputs";
@import "cherry-postcss/src/grid";
@import "cherry-postcss/src/spacing";`;
const postcssPluginsCode = `module.exports = {
	plugins: [
		require("postcss-import"),
		require("postcss-preset-env")({
			stage: 0,
			features: {
				"nesting-rules": true,
				"color-mod-function": true,
				"custom-media": true,
			},
		}),
		require("postcss-mixins"),
		require("autoprefixer"),
		require("cssnano")(),
	],
};`;
const importDistCode = `@import "cherry-postcss/dist/cherry.css";`;
const importHtmlCode = `<link rel="stylesheet" href="cherry-postcss/dist/cherry.css">`;

function Index({ posts = [] }) {
	return (
		<Page title="Install Cherry for PostCSS">
			<Space xs={20} lg={40} />
			<H1 size="hero1">Install Cherry for PostCSS</H1>
			<Space xs={10} lg={30} />
			<p>
				Cherry is compiled in PostCSS, each element of the design system
				can be imported independently. You can import .css files to your
				PostCSS project or import the minified version from the
				distribution files. To install Cherry for PostCSS, run the
				command:
			</p>
			<Space size={10} />
			<CodeBlock language="shell" value={installCode} />
			<Space size={20} />
			<H2>Import CSS</H2>
			<p>
				To import all Cherry elements, include the{" "}
				<strong>cherry.css</strong> file in your entry point style file:
			</p>
			<Space size={10} />
			<CodeBlock language="css" value={importCode} />
			<Space size={10} />
			<CodeBlock
				language="css"
				value={cherryCssCode}
				description="Cherry.css includes all the elements from the design system."
			/>
			<Space size={10} />
			<p>If you don't need all the elements, import only what you use.</p>
			<p>
				To change the default theme configuration, check out{" "}
				<strong>theme.css</strong>
			</p>
			<Space size={10} />
			<H3 size="h3">PostCSS Plugins</H3>
			<Space size={20} />
			<CodeBlock
				language="js"
				value={postcssPluginsCode}
				description="postcss.config.js"
			/>
			<Space size={20} />
			<H4 size="h2">Import Minified CSS</H4>
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
					href="/docs/code/sass/theme"
					as="/docs/code/sass/theme"
					prev
				>
					Sass Theme
				</DocNav>
				<DocNav
					href="/docs/code/postcss/colors"
					as="/docs/code/postcss/colors"
					next
				>
					PostCSS Colors
				</DocNav>
			</DocNavWrapper>
		</Page>
	);
}

export default Index;
