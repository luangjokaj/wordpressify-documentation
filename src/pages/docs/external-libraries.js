import React from "react";
import { css } from "@emotion/react";
import { Page } from "../../components/Pages";
import { Space, H1 } from "../../components/Layout";
import { DocNav, DocNavWrapper } from "../../components/DocNav";
import { CodeBlock } from "../../components/CodeBlock";

const jsCode = `/* -------------------------------------------------------------------------------------------------
Header & Footer JavaScript Boundles
-------------------------------------------------------------------------------------------------- */
const headerJS = [
    './node_modules/jquery/dist/jquery.js',
    './node_modules/nprogress/nprogress.js',
    './node_modules/aos/dist/aos.js',
    './node_modules/isotope-layout/dist/isotope.pkgd.js',
];

const footerJS = ['./src/js/**'];

/* -------------------------------------------------------------------------------------------------`;

function Index({ posts = [] }) {
	return (
		<Page title="External Libraries">
			<Space xs={20} lg={40} />
			<H1 size="hero1">External Libraries</H1>
			<p>
				Including external JavaScript libraries is as simple as
				installing the npm script and including it in the{" "}
				<strong>gulpfile.js</strong>
			</p>
			<CodeBlock language="js" value={jsCode} />
			<p>
				You can include the scripts in the head of the page before the
				DOM is loaded by placing them in the <strong>headerJS</strong>{" "}
				array or in the footer of the page after the DOM is loaded in
				the <strong>footerJS </strong>array. Only footer scripts are
				processed with Babel thus supporting ES6, however you can change
				this in the configuration if you want to run both header and
				footer scripts with Babel.
			</p>
			<p>A build restart is required for changes to take effect.</p>
			<Space size={10} />
			<DocNavWrapper>
				<DocNav
					href="/docs/es6-javascript"
					as="/docs/es6-javascript"
					prev
				>
					ES6 JavaScript
				</DocNav>
				<DocNav
					href="/docs/change-php-and-docker-settings"
					as="/docs/change-php-and-docker-settings"
					next
				>
					Change PHP and Docker
				</DocNav>
			</DocNavWrapper>
		</Page>
	);
}

export default Index;