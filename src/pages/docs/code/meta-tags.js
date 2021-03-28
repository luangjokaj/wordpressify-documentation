import React from "react";
import { Page } from "../../../components/Pages";
import { Space, H1 } from "../../../components/Layout";
import { CodeBlock } from "../../../components/CodeBlock";
import { DocNav, DocNavWrapper } from "../../../components/DocNav";

const viewportCode = `<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />`;
const descriptionCode = `<meta name="description" content="Cherry is the foundation for your design system, from design to code. With examples of implementations in modern front-end technologies. Customizable and scalable, ready to be used out-of-the-box." />`;
const manifestCode = `<link rel="manifest" href="/site.webmanifest" />
<meta name="theme-color" content="#F43F5E" />`;
const openGraphCode = `<meta property="og:title" content="Meta Tags - Cherry" />
<meta property="og:description" content="Cherry is the foundation for your design system, from design to code. With examples of implementations in modern front-end technologies. Customizable and scalable, ready to be used out-of-the-box." />
<meta property="og:image" content="https://cherry-documentation.s3-eu-west-1.amazonaws.com/img/meta/preview.png" />`;
const twitterMetaCode = `<meta name="twitter:description" content="Cherry is the foundation for your design system, from design to code. With examples of implementations in modern front-end technologies. Customizable and scalable, ready to be used out-of-the-box." />
<meta name="twitter:title" content="Meta Tags - Cherry" />
<meta name="twitter:image" content="https://cherry-documentation.s3-eu-west-1.amazonaws.com/img/meta/preview.png" />`;
const appleIconsCode = `<link rel="apple-touch-icon" sizes="180x180" href="https://cherry-documentation.s3-eu-west-1.amazonaws.com/img/meta/180.png" />
<link rel="mask-icon" href="https://cherry-documentation.s3-eu-west-1.amazonaws.com/img/meta/512.svg" color="#F43F5E" />`;
const favIconCode = `<link rel="icon" type="image/png" sizes="32x32" href="https://cherry-documentation.s3-eu-west-1.amazonaws.com/img/meta/32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="https://cherry-documentation.s3-eu-west-1.amazonaws.com/img/meta/16.png" />
<link rel="shortcut icon" href="https://cherry-documentation.s3-eu-west-1.amazonaws.com/img/meta/favicon.ico" />`;

function Index({ posts = [] }) {
	return (
		<Page title="Meta Tags">
			<Space xs={20} lg={40} />
			<H1 size="hero1">Meta Tags</H1>
			<Space xs={10} lg={30} />
			<p>
				Meta tags have been one of the most basic elements of SEO.
				Please ensure you have a minimum set of tags in the head of your
				HTML. This will ensure your website will always have a
				description, an icon for the browser, web-app manifest icons and
				icons for Apple devices.
			</p>
			<Space size={10} />
			<CodeBlock
				language="html"
				value={viewportCode}
				description="The viewport meta tag tells the browser that the width of the screen should be considered the 'full width' of the page."
			/>
			<Space size={20} />
			<CodeBlock
				language="html"
				value={descriptionCode}
				description="Defines a description for your website."
			/>
			<Space size={20} />
			<CodeBlock
				language="html"
				value={manifestCode}
				description="The web app manifest provides informations about a web application in a JSON text file. Used also for Android home screen icons."
			/>
			<Space size={20} />
			<CodeBlock
				language="html"
				value={openGraphCode}
				description="Define the open-graph informations for the website. Used by Facebook and others."
			/>
			<Space size={20} />
			<CodeBlock
				language="html"
				value={twitterMetaCode}
				description="Define the Twitter card images and meta-data."
			/>
			<Space size={20} />
			<CodeBlock
				language="html"
				value={appleIconsCode}
				description="Define the icons for Apple devices."
			/>
			<Space size={20} />
			<CodeBlock
				language="html"
				value={favIconCode}
				description="Define the favicons for your website."
			/>
			<Space size={20} />
			<DocNavWrapper>
				<DocNav href="/docs/code" as="/docs/code" prev>
					Code Introduction
				</DocNav>
				<DocNav href="/docs/code/sass" as="/docs/code/sass" next>
					Sass Introduction
				</DocNav>
			</DocNavWrapper>
		</Page>
	);
}
export default Index;
