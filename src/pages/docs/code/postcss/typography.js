import React from "react";
import { Page } from "../../../../components/Pages";
import {
	Space,
	H1,
	H2,
	H3,
	H4,
	H5,
	H6,
	FontStyle,
} from "../../../../components/Layout";
import { CodeBlock } from "../../../../components/CodeBlock";
import { DocNav, DocNavWrapper } from "../../../../components/DocNav";

const hero1Code = `<h1 class="hero1">Hero1</h1>`;
const hero2Code = `<h1 class="hero2">Hero2</h1>`;
const hero3Code = `<h1 class="hero3">Hero3</h1>`;
const h1Code = `<h1>Heading1</h1>`;
const h2Code = `<h2>Heading2</h2>`;
const h3Code = `<h3>Heading3</h3>`;
const h4Code = `<h4>Heading4</h4>`;
const h5Code = `<h5>Heading5</h5>`;
const h6Code = `<h6>Heading6</h6>`;
const eyebrowCode = `<p class="font-style-eyebrow">Eyebrow</p>`;
const subtitleCode = `<p class="font-style-subtitle">Subtitle</p>`;
const buttonCode = `<span class="font-style-button">Button</span>`;
const buttonBigCode = `<span class="font-style-button-big">Button Big</span>`;
const leadCode = `<span class="font-style-lead">Lead</span>`;
const inputCode = `<span class="font-style-input">Input</span>`;
const inputBigCode = `<span class="font-style-input-big">Input Big</span>`;
const strongCode = `<strong>
	Strong - Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec id elit non mi porta gravida at eget metus.
</strong>`;
const textCode = `<p>
	Text - Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec id elit non mi porta gravida at eget metus.
</p>`;
const smallCode = `<small>
	Small - Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec id elit non mi porta gravida at eget metus.
</small>`;
const blockquoteCode = `<blockquote>
	Blockquote - Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec id elit non mi porta gravida at eget metus.
</blockquote>`;

function Index({ posts = [] }) {
	return (
		<Page title="PostCSS Typography">
			<Space xs={20} lg={40} />
			<H1 size="hero1">PostCSS Typography</H1>
			<Space xs={10} lg={30} />
			<p>
				In this page you can find the PostCSS typography definitions.
				All variations have two sizes, one for mobile and one for
				desktop. The definitions of the classes can be found in the file{" "}
				<strong>typography.css</strong>.
			</p>
			<p>
				If you haven't imported the entire Cherry files (cherry.css),
				please make sure <strong>globals.css</strong> is imported in
				order to apply the typography styles for the HTML tags like
				paragraphs, lists, blockquotes and others global typography
				definitions.
			</p>
			<p>
				The definitions of the variables can be found in the file{" "}
				<strong>theme.css</strong>.
			</p>
			<Space size={10} />
			<CodeBlock
				language="html"
				value={hero1Code}
				description={<H1 size="hero1">Hero1</H1>}
			/>
			<Space size={20} />
			<CodeBlock
				language="html"
				value={hero2Code}
				description={<H1 size="hero2">Hero2</H1>}
			/>
			<Space size={20} />
			<CodeBlock
				language="html"
				value={hero3Code}
				description={<H1 size="hero3">Hero3</H1>}
			/>
			<Space size={20} />
			<CodeBlock
				language="html"
				value={h1Code}
				description={<H1>Heading1</H1>}
			/>
			<Space size={20} />
			<CodeBlock
				language="html"
				value={h2Code}
				description={<H2>Heading2</H2>}
			/>
			<Space size={20} />
			<CodeBlock
				language="html"
				value={h3Code}
				description={<H3>Heading3</H3>}
			/>
			<Space size={20} />
			<CodeBlock
				language="html"
				value={h4Code}
				description={<H4>Heading4</H4>}
			/>
			<Space size={20} />
			<CodeBlock
				language="html"
				value={h5Code}
				description={<H5>Heading5</H5>}
			/>
			<Space size={20} />
			<CodeBlock
				language="html"
				value={h6Code}
				description={<H6>Heading6</H6>}
			/>
			<Space size={20} />
			<CodeBlock
				language="html"
				value={eyebrowCode}
				description={<FontStyle variant="eyebrow">Eyebrow</FontStyle>}
			/>
			<Space size={20} />
			<CodeBlock
				language="html"
				value={subtitleCode}
				description={<FontStyle variant="subtitle">Subtitle</FontStyle>}
			/>
			<Space size={20} />
			<CodeBlock
				language="html"
				value={buttonCode}
				description={<FontStyle variant="button">Button</FontStyle>}
			/>
			<Space size={20} />
			<CodeBlock
				language="html"
				value={buttonBigCode}
				description={
					<FontStyle variant="buttonBig">Button Big</FontStyle>
				}
			/>
			<Space size={20} />
			<CodeBlock
				language="html"
				value={leadCode}
				description={<FontStyle variant="lead">Lead</FontStyle>}
			/>
			<Space size={20} />
			<CodeBlock
				language="html"
				value={inputCode}
				description={<FontStyle variant="input">Input</FontStyle>}
			/>
			<Space size={20} />
			<CodeBlock
				language="html"
				value={inputBigCode}
				description={
					<FontStyle variant="inputBig">Input Big</FontStyle>
				}
			/>
			<Space size={20} />
			<CodeBlock
				language="html"
				value={strongCode}
				description={
					<strong>
						Strong - Fusce dapibus, tellus ac cursus commodo, tortor
						mauris condimentum nibh, ut fermentum massa justo sit
						amet risus. Duis mollis, est non commodo luctus, nisi
						erat porttitor ligula, eget lacinia odio sem nec elit.
						Donec id elit non mi porta gravida at eget metus.
					</strong>
				}
			/>
			<Space size={20} />
			<CodeBlock
				language="html"
				value={textCode}
				description={
					<p>
						Text - Fusce dapibus, tellus ac cursus commodo, tortor
						mauris condimentum nibh, ut fermentum massa justo sit
						amet risus. Duis mollis, est non commodo luctus, nisi
						erat porttitor ligula, eget lacinia odio sem nec elit.
						Donec id elit non mi porta gravida at eget metus.
					</p>
				}
			/>
			<Space size={20} />
			<CodeBlock
				language="html"
				value={smallCode}
				description={
					<p>
						<small>
							Small - Fusce dapibus, tellus ac cursus commodo,
							tortor mauris condimentum nibh, ut fermentum massa
							justo sit amet risus. Duis mollis, est non commodo
							luctus, nisi erat porttitor ligula, eget lacinia
							odio sem nec elit. Donec id elit non mi porta
							gravida at eget metus.
						</small>
					</p>
				}
			/>
			<Space size={20} />
			<CodeBlock
				language="html"
				value={blockquoteCode}
				description={
					<blockquote>
						Small - Fusce dapibus, tellus ac cursus commodo, tortor
						mauris condimentum nibh, ut fermentum massa justo sit
						amet risus. Duis mollis, est non commodo luctus, nisi
						erat porttitor ligula, eget lacinia odio sem nec elit.
						Donec id elit non mi porta gravida at eget metus.
					</blockquote>
				}
			/>
			<Space size={20} />
			<DocNavWrapper>
				<DocNav
					href="/docs/code/postcss/colors"
					as="/docs/code/postcss/colors"
					prev
				>
					PostCSS Colors
				</DocNav>
				<DocNav
					href="/docs/code/postcss/buttons"
					as="/docs/code/postcss/buttons"
					next
				>
					PostCSS Buttons
				</DocNav>
			</DocNavWrapper>
		</Page>
	);
}

export default Index;
