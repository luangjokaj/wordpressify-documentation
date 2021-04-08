import React from "react";
import { Space } from "cherry-components";
import { Page } from "../../components/Pages";
import { H1 } from "../../components/Layout";
import { DocNav, DocNavWrapper } from "../../components/DocNav";
import { CodeBlock } from "../../components/CodeBlock";

function Index() {
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
			<p>Your JavaScript code should be located in:</p>
			<CodeBlock language="shell" value={`src/assets/js/`} />
			<p>
				WordPressify will watch for changes under the{" "}
				<strong>js/</strong> directory and bundle the code in a single
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
