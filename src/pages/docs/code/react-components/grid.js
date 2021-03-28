import React from "react";
import { Page } from "../../../../components/Pages";
import {
	Space,
	H1,
	H2,
	TableOverflow,
	H3,
	Row,
	Col,
	Box,
	H4,
} from "../../../../components/Layout";
import { CodeBlock } from "../../../../components/CodeBlock";
import { DocNav, DocNavWrapper } from "../../../../components/DocNav";

const gridCode = `<Container>
	<Row>
		<Col xs={6} lg={4}>
			<div>Child 1</div>
		</Col>
		<Col xs={6} lg={4}>
			<div>Child 2</div>
		</Col>
		<Col xs={12} lg={4}>
			<div>Child 3</div>
		</Col>
	</Row>
</Container>`;

function Index({ posts = [] }) {
	return (
		<Page title="Grid Components">
			<Space xs={20} lg={40} />
			<H1 size="hero1">Grid Components</H1>
			<Space xs={10} lg={30} />
			<p>
				Cherry grid system uses a series of containers, rows, and
				columns to layout and align content. It’s built with flexbox and
				is fully responsive. Below is an example and an in-depth look at
				how the grid comes together.
			</p>
			<Space size={10} />
			<CodeBlock
				language="jsx"
				value={gridCode}
				description={
					<>
						<H3 size="h6">🖥 Desktop</H3>
						<Space size={20} />
						<Row>
							<Col xs={4}>
								<Box>
									<p>
										<small>Child 1</small>
									</p>
								</Box>
							</Col>
							<Col xs={4}>
								<Box>
									<p>
										<small>Child 2</small>
									</p>
								</Box>
							</Col>
							<Col xs={4}>
								<Box>
									<p>
										<small>Child 3</small>
									</p>
								</Box>
							</Col>
						</Row>
						<Space size={20} />
						<H4 size="h6">📱 Mobile</H4>
						<Space size={20} />
						<Row>
							<Col xs={6}>
								<Box>
									<p>
										<small>Child 1</small>
									</p>
								</Box>
							</Col>
							<Col xs={6}>
								<Box>
									<p>
										<small>Child 2</small>
									</p>
								</Box>
								<Space size={20} />
							</Col>
							<Col xs={12}>
								<Box>
									<p>
										<small>Child 3</small>
									</p>
								</Box>
							</Col>
						</Row>
					</>
				}
			/>
			<Space size={20} />
			<H2 size="h3">Container Props</H2>
			<p>
				Below you can find all the available props for the container
				component.
			</p>
			<TableOverflow>
				<table>
					<thead>
						<tr>
							<th>Property</th>
							<th>Description</th>
							<th>Type</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>id</td>
							<td>Defines element id</td>
							<td>String</td>
						</tr>
						<tr>
							<td>className</td>
							<td>Defines element class name</td>
							<td>String</td>
						</tr>
						<tr>
							<td>children</td>
							<td>Children elements</td>
							<td>ReactNode</td>
						</tr>
						<tr>
							<td>fluid</td>
							<td>Extend container width to max allowed</td>
							<td>Boolean</td>
						</tr>
						<tr>
							<td>textAlign</td>
							<td>Align text</td>
							<td>"right" | "left" | "center"</td>
						</tr>
						<tr>
							<td>theme</td>
							<td>Emotion theme configuration</td>
							<td>Object</td>
						</tr>
					</tbody>
				</table>
			</TableOverflow>
			<Space size={20} />
			<H2 size="h3">Row classes</H2>
			<p>
				Below you can find all the available props for the row
				component.
			</p>
			<TableOverflow>
				<table>
					<thead>
						<tr>
							<th>Property</th>
							<th>Description</th>
							<th>Type</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>id</td>
							<td>Defines element id</td>
							<td>String</td>
						</tr>
						<tr>
							<td>className</td>
							<td>Defines element class name</td>
							<td>String</td>
						</tr>
						<tr>
							<td>children</td>
							<td>Children elements</td>
							<td>ReactNode</td>
						</tr>
						<tr>
							<td>alignItems</td>
							<td>Flex align-items property</td>
							<td>
								"stretch" | "center" | "flex-start" | "flex-end"
								| "baseline" | "initial"
							</td>
						</tr>
						<tr>
							<td>justifyContent</td>
							<td>Flex justify-content property</td>
							<td>
								"flex-start" | "flex-end" | "center" |
								"space-between" | "space-around" | "initial"
							</td>
						</tr>
						<tr>
							<td>gutterXs</td>
							<td>Defines the gutter for XL media query</td>
							<td>"default" | "medium" | "big"</td>
						</tr>
						<tr>
							<td>gutterSm</td>
							<td>Defines the gutter for SM media query</td>
							<td>"default" | "medium" | "big"</td>
						</tr>
						<tr>
							<td>gutterMd</td>
							<td>Defines the gutter for MD media query</td>
							<td>"default" | "medium" | "big"</td>
						</tr>
						<tr>
							<td>gutterLg</td>
							<td>Defines the gutter for LG media query</td>
							<td>"default" | "medium" | "big"</td>
						</tr>
						<tr>
							<td>gutterXl</td>
							<td>Defines the gutter for XL media query</td>
							<td>"default" | "medium" | "big"</td>
						</tr>
						<tr>
							<td>gutterXxl</td>
							<td>Defines the gutter for XXL media query</td>
							<td>"default" | "medium" | "big"</td>
						</tr>
						<tr>
							<td>gutterXxxl</td>
							<td>Defines the gutter for XXXL media query</td>
							<td>"default" | "medium" | "big"</td>
						</tr>
						<tr>
							<td>theme</td>
							<td>Emotion theme configuration</td>
							<td>Object</td>
						</tr>
					</tbody>
				</table>
			</TableOverflow>
			<Space size={20} />
			<H2 size="h3">Columns classes</H2>
			<p>
				Below you can find all the available props for the column
				component.
			</p>
			<TableOverflow>
				<table>
					<thead>
						<tr>
							<th>Property</th>
							<th>Description</th>
							<th>Type</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>id</td>
							<td>Defines element id</td>
							<td>String</td>
						</tr>
						<tr>
							<td>className</td>
							<td>Defines element class name</td>
							<td>String</td>
						</tr>
						<tr>
							<td>children</td>
							<td>Children elements</td>
							<td>ReactNode</td>
						</tr>
						<tr>
							<td>textAlign</td>
							<td>Align text</td>
							<td>"right" | "left" | "center"</td>
						</tr>
						<tr>
							<td>xs</td>
							<td>
								Defines the columns layout for SM media query
							</td>
							<td>Number | "auto"</td>
						</tr>
						<tr>
							<td>sm</td>
							<td>
								Defines the columns layout for SM media query
							</td>
							<td>Number | "auto"</td>
						</tr>
						<tr>
							<td>md</td>
							<td>
								Defines the columns layout for MD media query
							</td>
							<td>Number | "auto"</td>
						</tr>
						<tr>
							<td>lg</td>
							<td>
								Defines the columns layout for LG media query
							</td>
							<td>Number | "auto"</td>
						</tr>
						<tr>
							<td>xl</td>
							<td>
								Defines the columns layout for XL media query
							</td>
							<td>Number | "auto"</td>
						</tr>
						<tr>
							<td>xxl</td>
							<td>
								Defines the columns layout for XXL media query
							</td>
							<td>Number | "auto"</td>
						</tr>
						<tr>
							<td>xxxl</td>
							<td>
								Defines the columns layout for XXXL media query
							</td>
							<td>Number | "auto"</td>
						</tr>
						<tr>
							<td>firstXs</td>
							<td>Order column as first on XS</td>
							<td>Boolean</td>
						</tr>
						<tr>
							<td>firstSm</td>
							<td>Order column as first on SM</td>
							<td>Boolean</td>
						</tr>
						<tr>
							<td>firstMd</td>
							<td>Order column as first on MD</td>
							<td>Boolean</td>
						</tr>
						<tr>
							<td>firstLg</td>
							<td>Order column as first on LG</td>
							<td>Boolean</td>
						</tr>
						<tr>
							<td>firstXl</td>
							<td>Order column as first on XL</td>
							<td>Boolean</td>
						</tr>
						<tr>
							<td>firstXxl</td>
							<td>Order column as first on XXL</td>
							<td>Boolean</td>
						</tr>
						<tr>
							<td>firstXxxl</td>
							<td>Order column as first on XXXL</td>
							<td>Boolean</td>
						</tr>
						<tr>
							<td>lastXs</td>
							<td>Order column as last on XS</td>
							<td>Boolean</td>
						</tr>
						<tr>
							<td>lastSm</td>
							<td>Order column as last on SM</td>
							<td>Boolean</td>
						</tr>
						<tr>
							<td>lastMd</td>
							<td>Order column as last on MD</td>
							<td>Boolean</td>
						</tr>
						<tr>
							<td>lastLg</td>
							<td>Order column as last on LG</td>
							<td>Boolean</td>
						</tr>
						<tr>
							<td>lastXl</td>
							<td>Order column as last on XL</td>
							<td>Boolean</td>
						</tr>
						<tr>
							<td>lastXxl</td>
							<td>Order column as last on XXL</td>
							<td>Boolean</td>
						</tr>
						<tr>
							<td>lastXxxl</td>
							<td>Order column as last on XXXL</td>
							<td>Boolean</td>
						</tr>
						<tr>
							<td>display</td>
							<td>Display property</td>
							<td>
								"block" | "inline" | "inline-block" | "flex" |
								"inline-flex" | "none"
							</td>
						</tr>
						<tr>
							<td>fullScreen</td>
							<td>Make element full height</td>
							<td>Boolean</td>
						</tr>
						<tr>
							<td>theme</td>
							<td>Emotion theme configuration</td>
							<td>Object</td>
						</tr>
					</tbody>
				</table>
			</TableOverflow>
			<Space size={20} />
			<DocNavWrapper noTop>
				<DocNav
					href="/docs/code/react-components/spacing"
					as="/docs/code/react-components/spacing"
					prev
				>
					Spacing Component
				</DocNav>
				<DocNav
					href="/docs/code/react-components/breakpoints"
					as="/docs/code/react-components/breakpoints"
					next
				>
					Emotion Breakpoints
				</DocNav>
			</DocNavWrapper>
		</Page>
	);
}

export default Index;
