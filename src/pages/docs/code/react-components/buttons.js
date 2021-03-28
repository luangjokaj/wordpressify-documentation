import React from "react";
import { Page } from "../../../../components/Pages";
import { Space, H1, Button } from "../../../../components/Layout";
import { CodeBlock } from "../../../../components/CodeBlock";
import { DocNav, DocNavWrapper } from "../../../../components/DocNav";

const buttonPrimaryCode = `<Button>Primary</Button>`;
const buttonPrimaryFrameCode = `<Button frame>Primary Frame</Button>`;
const buttonPrimaryBigCode = `<Button size="big">Primary Big</Button>`;
const buttonPrimaryFrameBigCode = `<Button frame size="big">Primary Frame Big</Button>`;

const buttonSecondaryCode = `<Button variant="secondary">Secondary</Button>`;
const buttonSecondaryFrameCode = `<Button variant="secondary" frame>Secondary Frame</Button>`;
const buttonSecondaryBigCode = `<Button variant="secondary" size="big">Secondary Big</Button>`;
const buttonSecondaryFrameBigCode = `<Button variant="secondary" frame size="big">Secondary Frame Big</Button>`;

const buttonTertiaryCode = `<Button variant="tertiary">Tertiary</Button>`;
const buttonTertiaryFrameCode = `<Button variant="tertiary" frame>Tertiary Frame</Button>`;
const buttonTertiaryBigCode = `<Button variant="tertiary" size="big">Tertiary Big</Button>`;
const buttonTertiaryFrameBigCode = `<Button variant="tertiary" frame size="big">Tertiary Frame Big</Button>`;

const buttonPrimaryDisabledCode = `<Button disabled>Disabled</Button>`;
const buttonPrimaryFrameDisabledCode = `<Button frame disabled>Disabled Frame</Button>`;
const buttonPrimaryBigDisabledCode = `<Button size="big" disabled>Disabled Big</Button>`;
const buttonPrimaryFrameBigDisabledCode = `<Button frame size="big" disabled>Disabled Frame Big</Button>`;

function Index({ posts = [] }) {
	return (
		<Page title="Button Components">
			<Space xs={20} lg={40} />
			<H1 size="hero1">Button Components</H1>
			<Space xs={10} lg={30} />
			<p>
				The button styles are defined in{" "}
				<strong>Button.styles.js</strong>. You can change the variants
				of the buttons by using different props.
			</p>
			<Space size={10} />
			<CodeBlock
				language="html"
				value={buttonPrimaryCode}
				description={<Button>Primary</Button>}
			/>
			<Space size={20} />
			<CodeBlock
				language="html"
				value={buttonPrimaryFrameCode}
				description={<Button frame>Primary Frame</Button>}
			/>
			<Space size={20} />
			<CodeBlock
				language="html"
				value={buttonPrimaryBigCode}
				description={<Button size="big">Primary Big</Button>}
			/>
			<Space size={10} />
			<CodeBlock
				language="html"
				value={buttonPrimaryFrameBigCode}
				description={
					<Button size="big" frame>
						Primary Frame Big
					</Button>
				}
			/>
			<Space size={20} />
			<CodeBlock
				language="html"
				value={buttonSecondaryCode}
				description={<Button variant="secondary">Secondary</Button>}
			/>
			<Space size={20} />
			<CodeBlock
				language="html"
				value={buttonSecondaryFrameCode}
				description={
					<Button variant="secondary" frame>
						Secondary Frame
					</Button>
				}
			/>
			<Space size={20} />
			<CodeBlock
				language="html"
				value={buttonSecondaryBigCode}
				description={
					<Button variant="secondary" size="big">
						Secondary Big
					</Button>
				}
			/>
			<Space size={20} />
			<CodeBlock
				language="html"
				value={buttonSecondaryFrameBigCode}
				description={
					<Button variant="secondary" size="big" frame>
						Secondary Frame Big
					</Button>
				}
			/>
			<Space size={20} />
			<CodeBlock
				language="html"
				value={buttonTertiaryCode}
				description={<Button variant="tertiary">Tertiary</Button>}
			/>
			<Space size={20} />
			<CodeBlock
				language="html"
				value={buttonTertiaryFrameCode}
				description={
					<Button variant="tertiary" frame>
						Tertiary Frame
					</Button>
				}
			/>
			<Space size={20} />
			<CodeBlock
				language="html"
				value={buttonTertiaryBigCode}
				description={
					<Button variant="tertiary" size="big">
						Tertiary Big
					</Button>
				}
			/>
			<Space size={20} />
			<CodeBlock
				language="html"
				value={buttonTertiaryFrameBigCode}
				description={
					<Button variant="tertiary" size="big" frame>
						Tertiary Frame Big
					</Button>
				}
			/>
			<Space size={20} />
			<CodeBlock
				language="html"
				value={buttonPrimaryDisabledCode}
				description={<Button disabled>Disabled</Button>}
			/>
			<Space size={20} />
			<CodeBlock
				language="html"
				value={buttonPrimaryFrameDisabledCode}
				description={
					<Button frame disabled>
						Disabled Frame
					</Button>
				}
			/>
			<Space size={20} />
			<CodeBlock
				language="html"
				value={buttonPrimaryBigDisabledCode}
				description={
					<Button size="big" disabled>
						Disabled Big
					</Button>
				}
			/>
			<Space size={20} />
			<CodeBlock
				language="html"
				value={buttonPrimaryFrameBigDisabledCode}
				description={
					<Button size="big" frame disabled>
						Disabled Frame Big
					</Button>
				}
			/>
			<Space size={20} />
			<DocNavWrapper>
				<DocNav
					href="/docs/code/react-components/typography"
					as="/docs/code/react-components/typography"
					prev
				>
					Typography Components
				</DocNav>
				<DocNav
					href="/docs/code/react-components/inputs"
					as="/docs/code/react-components/inputs"
					next
				>
					Input Components
				</DocNav>
			</DocNavWrapper>
		</Page>
	);
}

export default Index;
