import React from "react";
import Image from "next/image";
import { Page } from "../../../components/Pages";
import {
	Space,
	H1,
	Row,
	Col,
	Box,
	TableOverflow,
	Link,
} from "../../../components/Layout";
import { DocNavWrapper, DocNav } from "../../../components/DocNav";

function Index({ posts = [] }) {
	return (
		<Page
			title="Design Meta Images"
			description="In the Cherry template you can find all the various sizes for your website favicon, manifest icons and other metadata requirements."
		>
			<Space xs={20} lg={40} />
			<H1 size="hero1">Design Meta Images</H1>
			<Space xs={10} lg={30} />
			<p>
				In the Cherry template you can find all the various sizes for
				your website favicon, manifest icons and other metadata
				requirements.
			</p>
			<Space size={10} />
			<TableOverflow>
				<table>
					<thead>
						<tr>
							<th>Size</th>
							<th>Description</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>16px • 16px</td>
							<td>Favicon</td>
						</tr>
						<tr>
							<td>32px • 32px</td>
							<td>Favicon</td>
						</tr>
						<tr>
							<td>48px • 48px</td>
							<td>Favicon</td>
						</tr>
						<tr>
							<td>128px • 128px</td>
							<td>Favicon</td>
						</tr>
						<tr>
							<td>256px • 256px</td>
							<td>Favicon</td>
						</tr>
						<tr>
							<td>72px • 72px</td>
							<td>Manifest</td>
						</tr>
						<tr>
							<td>96px • 96px</td>
							<td>Manifest</td>
						</tr>
						<tr>
							<td>120px • 120px</td>
							<td>Manifest</td>
						</tr>
						<tr>
							<td>128px • 128px</td>
							<td>Manifest</td>
						</tr>
						<tr>
							<td>144px • 144px</td>
							<td>Manifest</td>
						</tr>
						<tr>
							<td>152px • 152px</td>
							<td>Manifest</td>
						</tr>
						<tr>
							<td>180px • 180px</td>
							<td>Manifest / Apple Touch Icon</td>
						</tr>
						<tr>
							<td>192px • 192px</td>
							<td>Manifest</td>
						</tr>
						<tr>
							<td>384px • 384px</td>
							<td>Manifest</td>
						</tr>
						<tr>
							<td>512px • 512px</td>
							<td>Manifest / Mask Icon</td>
						</tr>
						<tr>
							<td>1280px • 670px</td>
							<td>Open Graph / Twitter Card</td>
						</tr>
					</tbody>
				</table>
			</TableOverflow>
			<Space size={20} />
			<Link
				external
				href="https://www.figma.com/file/oumA2pAqhEDMpTAtDgarxr/Cherry-Design-System?node-id=154%3A510"
			>
				Meta Images in Figma
			</Link>
			<Space size={20} />
			<DocNavWrapper>
				<DocNav href="/docs/design/grid" as="/docs/design/grid" prev>
					Design Grid
				</DocNav>
				<DocNav href="/docs/code" as="/docs/code" next>
					Code Introduction
				</DocNav>
			</DocNavWrapper>
		</Page>
	);
}

export default Index;
