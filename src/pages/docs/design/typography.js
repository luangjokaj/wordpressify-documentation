import React from "react";
import { Page } from "../../../components/Pages";
import {
	Space,
	H1,
	H2,
	H3,
	H4,
	H5,
	H6,
	Link,
	Col,
	Row,
	TableOverflow,
} from "../../../components/Layout";
import { ColorBox, ColorBoxContainer } from "../../../components/ColorBox";
import {
	buttonBigFontStyles,
	buttonFontStyles,
	eyebrowFontStyles,
	subTitleFontStyles,
	leadFontStyles,
	inputFontStyles,
	inputBigFontStyles,
} from "../../../assets/styles/helperStyles";
import { DocNav, DocNavWrapper } from "../../../components/DocNav";

function Index({ posts = [] }) {
	return (
		<Page
			title="Design Typography"
			description="Cherry covers a wide range of typography variations, covering the most common web patterns like headings, subtitles, paragraphs and so on. There are 2 types of typography definitions, one for mobile and one for desktop."
		>
			<Space xs={20} lg={40} />
			<H1 size="hero1">Design Typography</H1>
			<Space xs={10} lg={30} />
			<p>
				Cherry covers a wide range of typography variations, covering
				the most common web patterns like headings, subtitles,
				paragraphs and so on. There are 2 types of typography
				definitions, one for mobile and one for desktop.
			</p>
			<Space size={10} />
			<TableOverflow>
				<table>
					<thead>
						<tr>
							<th>Name</th>
							<th>Font-Family</th>
							<th>🖥&nbsp;&nbsp; Font-Size</th>
							<th>🖥&nbsp;&nbsp; Line-Height</th>
							<th>📱&nbsp; Font-Size</th>
							<th>📱&nbsp; Line-Height</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Hero1</td>
							<td>Inter, sans-serif</td>
							<td>62px</td>
							<td>1.15</td>
							<td>52px</td>
							<td>1.15</td>
						</tr>
						<tr>
							<td>Hero2</td>
							<td>Inter, sans-serif</td>
							<td>52px</td>
							<td>1.15</td>
							<td>42px</td>
							<td>1.15</td>
						</tr>
						<tr>
							<td>Hero3</td>
							<td>Inter, sans-serif</td>
							<td>42px</td>
							<td>1.15</td>
							<td>32px</td>
							<td>1.15</td>
						</tr>
						<tr>
							<td>Heading1</td>
							<td>Inter, sans-serif</td>
							<td>40px</td>
							<td>1.2</td>
							<td>38px</td>
							<td>1.2</td>
						</tr>
						<tr>
							<td>Heading2</td>
							<td>Inter, sans-serif</td>
							<td>32px</td>
							<td>1.2</td>
							<td>28px</td>
							<td>1.2</td>
						</tr>
						<tr>
							<td>Heading3</td>
							<td>Inter, sans-serif</td>
							<td>28px</td>
							<td>1.2</td>
							<td>24px</td>
							<td>1.2</td>
						</tr>
						<tr>
							<td>Heading4</td>
							<td>Inter, sans-serif</td>
							<td>24px</td>
							<td>1.3</td>
							<td>22px</td>
							<td>1.3</td>
						</tr>
						<tr>
							<td>Heading5</td>
							<td>Inter, sans-serif</td>
							<td>20px</td>
							<td>1.4</td>
							<td>18px</td>
							<td>1.4</td>
						</tr>
						<tr>
							<td>Heading6</td>
							<td>Inter, sans-serif</td>
							<td>18px</td>
							<td>1.4</td>
							<td>16px</td>
							<td>1.4</td>
						</tr>
						<tr>
							<td>Eyebrow</td>
							<td>Inter, sans-serif</td>
							<td>18px</td>
							<td>1.15</td>
							<td>16px</td>
							<td>1.35</td>
						</tr>
						<tr>
							<td>Subtitle</td>
							<td>Inter, sans-serif</td>
							<td>20px</td>
							<td>1.35</td>
							<td>18px</td>
							<td>1.35</td>
						</tr>
						<tr>
							<td>Button</td>
							<td>Inter, sans-serif</td>
							<td>14px</td>
							<td>1</td>
							<td>12px</td>
							<td>1</td>
						</tr>
						<tr>
							<td>Button Big</td>
							<td>Inter, sans-serif</td>
							<td>18px</td>
							<td>1</td>
							<td>16px</td>
							<td>1</td>
						</tr>
						<tr>
							<td>Lead</td>
							<td>Inter, sans-serif</td>
							<td>18px</td>
							<td>1.35</td>
							<td>16px</td>
							<td>1.35</td>
						</tr>
						<tr>
							<td>Input</td>
							<td>Inter, sans-serif</td>
							<td>14px</td>
							<td>1</td>
							<td>12px</td>
							<td>1</td>
						</tr>
						<tr>
							<td>Input Big</td>
							<td>Inter, sans-serif</td>
							<td>18px</td>
							<td>1</td>
							<td>16px</td>
							<td>1</td>
						</tr>
						<tr>
							<td>Strong</td>
							<td>Inter, sans-serif</td>
							<td>16px</td>
							<td>1.5</td>
							<td>14px</td>
							<td>1.5</td>
						</tr>
						<tr>
							<td>Text</td>
							<td>Inter, sans-serif</td>
							<td>16px</td>
							<td>1.5</td>
							<td>14px</td>
							<td>1.5</td>
						</tr>
						<tr>
							<td>Small</td>
							<td>Inter, sans-serif</td>
							<td>14px</td>
							<td>1.3</td>
							<td>12px</td>
							<td>1.3</td>
						</tr>
						<tr>
							<td>Blockquote</td>
							<td>Inter, sans-serif</td>
							<td>18px</td>
							<td>1.5</td>
							<td>16px</td>
							<td>1.5</td>
						</tr>
					</tbody>
				</table>
			</TableOverflow>
			<Space size={20} />
			<H2>Demo</H2>
			<Space size={10} />
			<hr />
			<Space size={10} />
			<Row>
				<Col xs={12} lg={6}>
					<H1 size="hero1">Hero1</H1>
					<Space size={10} />
					<H1 size="hero2">Hero2</H1>
					<Space size={10} />
					<H1 size="hero3">Hero3</H1>
					<Space size={20} />
				</Col>
				<Col xs={12} lg={6}>
					<H1>Heading1</H1>
					<Space size={10} />
					<H2>Heading2</H2>
					<Space size={10} />
					<H3>Heading3</H3>
					<Space size={10} />
					<H4>Heading4</H4>
					<Space size={10} />
					<H5>Heading5</H5>
					<Space size={10} />
					<H6>Heading6</H6>
					<Space size={20} />
				</Col>
			</Row>
			<span css={(theme) => eyebrowFontStyles(theme)}>Eyebrow</span>
			<Space horizontal size={20} />
			<span css={(theme) => subTitleFontStyles(theme)}>Subtitle</span>
			<Space horizontal size={20} />
			<span css={(theme) => buttonFontStyles(theme)}>Button</span>
			<Space horizontal size={20} />
			<span css={(theme) => buttonBigFontStyles(theme)}>Button Big</span>
			<Space size={20} />
			<span css={(theme) => leadFontStyles(theme)}>Lead</span>
			<Space horizontal size={20} />
			<span css={(theme) => inputFontStyles(theme)}>Input</span>
			<Space horizontal size={20} />
			<span css={(theme) => inputBigFontStyles(theme)}>Input Big</span>
			<Space size={10} />
			<p>
				<strong>
					Strong - Fusce dapibus, tellus ac cursus commodo, tortor
					mauris condimentum nibh, ut fermentum massa justo sit amet
					risus. Duis mollis, est non commodo luctus, nisi erat
					porttitor ligula, eget lacinia odio sem nec elit. Donec id
					elit non mi porta gravida at eget metus.
				</strong>
			</p>
			<p>
				Text - Fusce dapibus, tellus ac cursus commodo, tortor mauris
				condimentum nibh, ut fermentum massa justo sit amet risus. Duis
				mollis, est non commodo luctus, nisi erat porttitor ligula, eget
				lacinia odio sem nec elit. Donec id elit non mi porta gravida at
				eget metus.
			</p>
			<p>
				<small>
					Small - Fusce dapibus, tellus ac cursus commodo, tortor
					mauris condimentum nibh, ut fermentum massa justo sit amet
					risus. Duis mollis, est non commodo luctus, nisi erat
					porttitor ligula, eget lacinia odio sem nec elit. Donec id
					elit non mi porta gravida at eget metus.
				</small>
			</p>
			<blockquote>
				Blockquote - Fusce dapibus, tellus ac cursus commodo, tortor
				mauris condimentum nibh, ut fermentum massa justo sit amet
				risus. Duis mollis, est non commodo luctus, nisi erat porttitor
				ligula, eget lacinia odio sem nec elit. Donec id elit non mi
				porta gravida at eget metus.
			</blockquote>
			<Space size={10} />
			<hr />
			<Space size={10} />
			<Link
				external
				href="https://www.figma.com/file/oumA2pAqhEDMpTAtDgarxr/Cherry-Design-System?node-id=0%3A1"
			>
				Typography in Figma
			</Link>
			<Space size={20} />
			<DocNavWrapper>
				<DocNav
					href="/docs/design/colors"
					as="/docs/design/colors"
					prev
				>
					Design Colors
				</DocNav>
				<DocNav
					href="/docs/design/buttons"
					as="/docs/design/buttons"
					next
				>
					Design Buttons
				</DocNav>
			</DocNavWrapper>
		</Page>
	);
}

export default Index;
