import React from "react";
import { Page } from "../../../../components/Pages";
import { Space, H1 } from "../../../../components/Layout";
import { CodeBlock } from "../../../../components/CodeBlock";
import { ColorBox, ColorBoxContainer } from "../../../../components/ColorBox";
import { DocNav, DocNavWrapper } from "../../../../components/DocNav";

const primaryCode = `--color-primary-light: #FDA4AF;
--color-primary: #F43F5E;
--color-primary-dark: #9F1239;`;
const secondaryCode = `--color-secondary-light: #7DD3FC;
--color-secondary: #0EA5E9;
--color-secondary-dark: #075985;`;
const tertiaryCode = `--color-tertiary-light: #D8B4FE;
--color-tertiary: #A855F7;
--color-tertiary-dark: #6B21A8;`;
const bwCode = `--color-dark: #000;
--color-light: #FFF;`;
const grayCode = `--color-gray-light: #E5E7EB;
--color-gray: #9CA3AF;
--color-gray-dark: #4B5563;`;
const uiCodes = `--color-success: #28A745;
--color-error: #DC3545;
--color-warning: #FFC107;
--color-info: #17A2B8;`;

function Index({ posts = [] }) {
	return (
		<Page title="PostCSS Colors">
			<Space xs={20} lg={40} />
			<H1 size="hero1">PostCSS Colors</H1>
			<Space xs={10} lg={30} />
			<p>
				In this page you can find the PostCSS variables for the Cherry
				color palette. All color variables contain a suffix{" "}
				<strong>$color</strong>. The definitions of the variables can be
				found in the file <strong>theme.css</strong>.
			</p>
			<Space size={10} />
			<CodeBlock
				language="scss"
				value={primaryCode}
				description={
					<ColorBoxContainer isPushing={false}>
						<ColorBox name="Primary Light" value="#FDA4AF" />
						<ColorBox name="Primary" value="#F43F5E" />
						<ColorBox name="Primary Dark" value="#9F1239" />
					</ColorBoxContainer>
				}
			/>
			<Space size={20} />
			<CodeBlock
				language="scss"
				value={secondaryCode}
				description={
					<ColorBoxContainer isPushing={false}>
						<ColorBox name="Secondary Light" value="#7DD3FC" />
						<ColorBox name="Secondary" value="#0EA5E9" />
						<ColorBox name="Secondary Dark" value="#075985" />
					</ColorBoxContainer>
				}
			/>
			<Space size={20} />
			<CodeBlock
				language="scss"
				value={tertiaryCode}
				description={
					<ColorBoxContainer isPushing={false}>
						<ColorBox name="Tertiary Light" value="#D8B4FE" />
						<ColorBox name="Tertiary" value="#A855F7" />
						<ColorBox name="Tertiary Dark" value="#6B21A8" />
					</ColorBoxContainer>
				}
			/>
			<Space size={20} />
			<CodeBlock
				language="scss"
				value={bwCode}
				description={
					<ColorBoxContainer isPushing={false}>
						<ColorBox name="Dark" value="#000000" />
						<ColorBox name="Light" value="#FFFFFF" border />
					</ColorBoxContainer>
				}
			/>
			<Space size={20} />
			<CodeBlock
				language="scss"
				value={grayCode}
				description={
					<ColorBoxContainer isPushing={false}>
						<ColorBox name="Gray Light" value="#E5E7EB" />
						<ColorBox name="Gray" value="#9CA3AF" />
						<ColorBox name="Gray Dark" value="#4B5563" />
					</ColorBoxContainer>
				}
			/>
			<Space size={20} />
			<CodeBlock
				language="scss"
				value={uiCodes}
				description={
					<ColorBoxContainer isPushing={false}>
						<ColorBox name="Success" value="#28A745" />
						<ColorBox name="Error" value="#DC3545" />
						<ColorBox name="Warning" value="#FFC107" />
						<ColorBox name="Info" value="#17A2B8" />
					</ColorBoxContainer>
				}
			/>
			<Space size={20} />
			<DocNavWrapper>
				<DocNav href="/docs/code/postcss" as="/docs/code/postcss" prev>
					PostCSS Introduction
				</DocNav>
				<DocNav
					href="/docs/code/postcss/typography"
					as="/docs/code/postcss/typography"
					next
				>
					PostCSS Typography
				</DocNav>
			</DocNavWrapper>
		</Page>
	);
}

export default Index;
