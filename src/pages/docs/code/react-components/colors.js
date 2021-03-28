import React from "react";
import { Page } from "../../../../components/Pages";
import { Space, H1 } from "../../../../components/Layout";
import { CodeBlock } from "../../../../components/CodeBlock";
import { ColorBox, ColorBoxContainer } from "../../../../components/ColorBox";
import { DocNav, DocNavWrapper } from "../../../../components/DocNav";

const primaryCode = `primaryLight: "#FDA4AF",
primary: "#F43F5E",
primaryDark: "#9F1239",`;
const secondaryCode = `secondaryLight: "#7DD3FC",
secondary: "#0EA5E9",
secondaryDark: "#075985",`;
const tertiaryCode = `tertiaryLight: "#D8B4FE",
tertiary: "#A855F7",
tertiaryDark: "#6B21A8",`;
const bwCode = `dark: "#000",
light: "#fff",`;
const grayCode = `grayLight: "#E5E7EB",
gray: "#9CA3AF",
grayDark: "#4B5563",`;
const uiCodes = `success: "#28A745",
error: "#DC3545",
warning: "#FFC107",
info: "#17A2B8",`;

function Index({ posts = [] }) {
	return (
		<Page title="Emotion Colors">
			<Space xs={20} lg={40} />
			<H1 size="hero1">Emotion Colors</H1>
			<Space xs={10} lg={30} />
			<p>
				In this page you can find the Emotion theme for the Cherry color
				palette. All color variables contain a suffix{" "}
				<strong>{"${color}"}</strong>. The definitions of the variables
				can be found in the file <strong>theme.js</strong>.
			</p>
			<Space size={10} />
			<CodeBlock
				language="jsx"
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
				<DocNav
					href="/docs/code/react-components"
					as="/docs/code/react-components"
					prev
				>
					Components Introduction
				</DocNav>
				<DocNav
					href="/docs/code/react-components/typography"
					as="/docs/code/react-components/typography"
					next
				>
					Typography Components
				</DocNav>
			</DocNavWrapper>
		</Page>
	);
}

export default Index;
