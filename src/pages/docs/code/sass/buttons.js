import React from "react";
import { Page } from "../../../../components/Pages";
import { Space, H1, Button } from "../../../../components/Layout";
import { CodeBlock } from "../../../../components/CodeBlock";
import { DocNav, DocNavWrapper } from "../../../../components/DocNav";

const buttonPrimaryCode = `<a class="button">Primary</a>`;
const buttonPrimaryFrameCode = `<a class="button frame">Primary Frame</a>`;
const buttonPrimaryBigCode = `<a class="button big">Primary Big</a>`;
const buttonPrimaryFrameBigCode = `<a class="button frame big">Primary Frame Big</a>`;

const buttonSecondaryCode = `<a class="button secondary">Secondary</a>`;
const buttonSecondaryFrameCode = `<a class="button frame secondary">Secondary Frame</a>`;
const buttonSecondaryBigCode = `<a class="button secondary big">Secondary Big</a>`;
const buttonSecondaryFrameBigCode = `<a class="button frame secondary big">Secondary Frame Big</a>`;

const buttonTertiaryCode = `<a class="button tertiary">Tertiary</a>`;
const buttonTertiaryFrameCode = `<a class="button frame tertiary">Tertiary Frame</a>`;
const buttonTertiaryBigCode = `<a class="button tertiary big">Tertiary Big</a>`;
const buttonTertiaryFrameBigCode = `<a class="button frame tertiary big">Tertiary Frame Big</a>`;

const buttonPrimaryDisabledCode = `<a class="button" disabled>Primary</a>`;
const buttonPrimaryFrameDisabledCode = `<a class="button frame" disabled>Disabled Frame</a>`;
const buttonPrimaryBigDisabledCode = `<a class="button big" disabled>Disabled Big</a>`;
const buttonPrimaryFrameBigDisabledCode = `<a class="button frame big" disabled>Disabled Frame Big</a>`;

function Index({ posts = [] }) {
	return (
		<Page title="Sass Buttons">
			<Space xs={20} lg={40} />
			<H1 size="hero1">Sass Buttons</H1>
			<Space xs={10} lg={30} />
			<p>
				The button styles are defined in <strong>buttons.scss</strong>.
				All form buttons take the default style of the Cherry button.
				You can change the variants of the buttons by using classes.
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
					href="/docs/code/sass/typography"
					as="/docs/code/sass/typography"
					prev
				>
					Sass Typography
				</DocNav>
				<DocNav
					href="/docs/code/sass/inputs"
					as="/docs/code/sass/inputs"
					next
				>
					Sass Inputs
				</DocNav>
			</DocNavWrapper>
		</Page>
	);
}

export default Index;
