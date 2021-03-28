import React from "react";
import { Page } from "../../../../components/Pages";
import {
	Space,
	H1,
	H2,
	TableOverflow,
	H3,
} from "../../../../components/Layout";
import { CodeBlock } from "../../../../components/CodeBlock";
import { DocNav, DocNavWrapper } from "../../../../components/DocNav";

const spaceCode = `<span class="space size-160 xs-hide lg-show"></span>
<span class="space size-24 horizontal xs-show lg-hide"></span>`;

function Index({ posts = [] }) {
	return (
		<Page title="Sass Spacing">
			<Space xs={20} lg={40} />
			<H1 size="hero1">Sass Spacing</H1>
			<Space xs={10} lg={30} />
			<p>
				Spacings are defined in the design system, and for each size
				there is a class name. Assign the desired class name to a div
				element to add the space. Spaces push vertically by default. To
				change it to horizontal (in-line) use the{" "}
				<strong>.horizontal</strong> class name. Spaces can be specified
				to be shown in a specific media query, this allows different
				spacings in different screen resolutions.
			</p>
			<Space size={10} />
			<CodeBlock language="html" value={spaceCode} description={""} />
			<Space size={20} />
			<H2 size="h3">Classes</H2>
			<p>
				Below you can find the class names for all sizes. Make sure your
				element includes both classes as specified.
			</p>
			<TableOverflow>
				<table>
					<thead>
						<tr>
							<th>Class Name</th>
							<th>Size</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>.space.size-2</td>
							<td>2px</td>
						</tr>
						<tr>
							<td>.space.size-4</td>
							<td>4px</td>
						</tr>
						<tr>
							<td>.space.size-8</td>
							<td>8px</td>
						</tr>
						<tr>
							<td>.space.size-12</td>
							<td>12px</td>
						</tr>
						<tr>
							<td>.space.size-16</td>
							<td>16px</td>
						</tr>
						<tr>
							<td>.space.size-24</td>
							<td>24px</td>
						</tr>
						<tr>
							<td>.space.size-32</td>
							<td>32px</td>
						</tr>
						<tr>
							<td>.space.size-48</td>
							<td>48px</td>
						</tr>
						<tr>
							<td>.space.size-56</td>
							<td>56px</td>
						</tr>
						<tr>
							<td>.space.size-64</td>
							<td>64px</td>
						</tr>
						<tr>
							<td>.space.size-96</td>
							<td>96px</td>
						</tr>
						<tr>
							<td>.space.size-128</td>
							<td>128px</td>
						</tr>
						<tr>
							<td>.space.size-180</td>
							<td>180px</td>
						</tr>
					</tbody>
				</table>
			</TableOverflow>
			<Space size={20} />
			<H3 size="h3">Show & Hide Spaces</H3>
			<p>
				Each element can be specified to be shown or hidden in a
				specific media query.
			</p>
			<TableOverflow>
				<table>
					<thead>
						<tr>
							<th>Class Name</th>
							<th>Description</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>.space.horizontal</td>
							<td>Horizontal space (in-line)</td>
						</tr>
						<tr>
							<td>.xs-hide</td>
							<td>Hide on XS media query</td>
						</tr>
						<tr>
							<td>.xs-show</td>
							<td>Show on XS media query</td>
						</tr>
						<tr>
							<td>.sm-hide</td>
							<td>Hide on SM media query</td>
						</tr>
						<tr>
							<td>.sm-show</td>
							<td>Show on SM media query</td>
						</tr>
						<tr>
							<td>.md-hide</td>
							<td>Hide on MD media query</td>
						</tr>
						<tr>
							<td>.md-show</td>
							<td>Show on MD media query</td>
						</tr>
						<tr>
							<td>.lg-hide</td>
							<td>Hide on LG media query</td>
						</tr>
						<tr>
							<td>.lg-show</td>
							<td>Show on LG media query</td>
						</tr>
						<tr>
							<td>.xl-hide</td>
							<td>Hide on XL media query</td>
						</tr>
						<tr>
							<td>.xl-show</td>
							<td>Show on XL media query</td>
						</tr>
						<tr>
							<td>.xxl-hide</td>
							<td>Hide on XXL media query</td>
						</tr>
						<tr>
							<td>.xxl-show</td>
							<td>Show on XXL media query</td>
						</tr>
						<tr>
							<td>.xxxl-hide</td>
							<td>Hide on XXXL media query</td>
						</tr>
						<tr>
							<td>.xxxl-show</td>
							<td>Show on XXXL media query</td>
						</tr>
					</tbody>
				</table>
			</TableOverflow>
			<Space size={20} />
			<DocNavWrapper noTop>
				<DocNav
					href="/docs/code/sass/inputs"
					as="/docs/code/sass/inputs"
					prev
				>
					Sass Inputs
				</DocNav>
				<DocNav
					href="/docs/code/sass/grid"
					as="/docs/code/sass/grid"
					next
				>
					Sass Grid
				</DocNav>
			</DocNavWrapper>
		</Page>
	);
}

export default Index;
