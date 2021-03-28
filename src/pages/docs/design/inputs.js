import React from "react";
import { Page } from "../../../components/Pages";
import {
	Space,
	H1,
	Link,
	Box,
	Row,
	Col,
	Input,
	Select,
	Textarea,
} from "../../../components/Layout";
import { DocNav, DocNavWrapper } from "../../../components/DocNav";

function Index({ posts = [] }) {
	return (
		<Page
			title="Design Inputs"
			description="Cherry includes form styles for all the default HTML inputs. Input text, phone, number, email, password, checkbox, radio, select and textarea. The input texts, textareas and selects include 2 different statuses: error and success."
		>
			<Space xs={20} lg={40} />
			<H1 size="hero1">Design Inputs</H1>
			<Space xs={10} lg={30} />
			<p>
				Cherry includes form styles for all the default HTML inputs.
				Input text, phone, number, email, password, checkbox, radio,
				select and textarea. The input texts, textareas and selects
				include 2 different statuses: error and success.
			</p>
			<Space size={10} />
			<Row>
				<Col xs={12} lg={4}>
					<Input type="text" placeholder="Placeholder" />
					<Space size={20} />
				</Col>
				<Col xs={12} lg={4}>
					<Input type="text" placeholder="Placeholder" error />
					<Space size={20} />
				</Col>
				<Col xs={12} lg={4}>
					<Input type="text" placeholder="Placeholder" success />
					<Space size={20} />
				</Col>
				<Col xs={12} lg={4}>
					<Input type="text" placeholder="Placeholder" size="big" />
					<Space size={20} />
				</Col>
				<Col xs={12} lg={4}>
					<Input
						type="text"
						placeholder="Placeholder"
						error
						size="big"
					/>
					<Space size={20} />
				</Col>
				<Col xs={12} lg={4}>
					<Input
						type="text"
						placeholder="Placeholder"
						success
						size="big"
					/>
					<Space size={20} />
				</Col>
				<Col xs={12} lg={4}>
					<Select>
						<option value="1">Sample 1</option>
						<option value="2">Sample 2</option>
						<option value="3">Sample 3</option>
					</Select>
					<Space size={20} />
				</Col>
				<Col xs={12} lg={4}>
					<Select error>
						<option value="1">Sample 1</option>
						<option value="2">Sample 2</option>
						<option value="3">Sample 3</option>
					</Select>
					<Space size={20} />
				</Col>
				<Col xs={12} lg={4}>
					<Select success>
						<option value="1">Sample 1</option>
						<option value="2">Sample 2</option>
						<option value="3">Sample 3</option>
					</Select>
					<Space size={20} />
				</Col>
				<Col xs={12} lg={4}>
					<Select size="big">
						<option value="1">Sample 1</option>
						<option value="2">Sample 2</option>
						<option value="3">Sample 3</option>
					</Select>
					<Space size={20} />
				</Col>
				<Col xs={12} lg={4}>
					<Select error size="big">
						<option value="1">Sample 1</option>
						<option value="2">Sample 2</option>
						<option value="3">Sample 3</option>
					</Select>
					<Space size={20} />
				</Col>
				<Col xs={12} lg={4}>
					<Select success size="big">
						<option value="1">Sample 1</option>
						<option value="2">Sample 2</option>
						<option value="3">Sample 3</option>
					</Select>
					<Space size={20} />
				</Col>
				<Col xs={12} lg={4}>
					<Textarea type="text" placeholder="Placeholder" />
					<Space size={20} />
				</Col>
				<Col xs={12} lg={4}>
					<Textarea type="text" placeholder="Placeholder" error />
					<Space size={20} />
				</Col>
				<Col xs={12} lg={4}>
					<Textarea type="text" placeholder="Placeholder" success />
					<Space size={20} />
				</Col>
				<Col xs={12} lg={4}>
					<Textarea
						type="text"
						placeholder="Placeholder"
						size="big"
					/>
					<Space size={20} />
				</Col>
				<Col xs={12} lg={4}>
					<Textarea
						type="text"
						placeholder="Placeholder"
						error
						size="big"
					/>
					<Space size={20} />
				</Col>
				<Col xs={12} lg={4}>
					<Textarea
						type="text"
						placeholder="Placeholder"
						success
						size="big"
					/>
					<Space size={20} />
				</Col>

				<Col xs={12} lg={4}>
					<Input
						type="checkbox"
						placeholder="Placeholder"
						label="Checkbox"
						id="check-1"
					/>
					<Space size={20} />
				</Col>
				<Col xs={12} lg={4}>
					<Input
						type="checkbox"
						placeholder="Placeholder"
						label="Checkbox"
						id="check-2"
						defaultChecked
					/>
					<Space size={20} />
				</Col>
				<Col xs={12} lg={4}>
					<Input
						type="checkbox"
						placeholder="Placeholder"
						label="Checkbox"
						id="check-3"
						disabled
					/>
					<Space size={20} />
				</Col>
				<Col xs={12} lg={4}>
					<Input
						type="radio"
						name="test1"
						placeholder="Placeholder"
						label="Radio"
						id="radio-1"
					/>
					<Space size={20} />
				</Col>
				<Col xs={12} lg={4}>
					<Input
						type="radio"
						name="test1"
						placeholder="Placeholder"
						label="Radio"
						id="radio-2"
						defaultChecked
					/>
					<Space size={20} />
				</Col>
				<Col xs={12} lg={4}>
					<Input
						type="radio"
						name="test2"
						placeholder="Placeholder"
						label="Radio"
						id="radio-3"
						disabled
					/>
					<Space size={20} />
				</Col>
				<Col xs={12} lg={4}>
					<Input
						type="checkbox"
						placeholder="Placeholder"
						label="Checkbox"
						id="check-4"
						size="big"
					/>
					<Space size={20} />
				</Col>
				<Col xs={12} lg={4}>
					<Input
						type="checkbox"
						placeholder="Placeholder"
						label="Checkbox"
						id="check-5"
						defaultChecked
						size="big"
					/>
					<Space size={20} />
				</Col>
				<Col xs={12} lg={4}>
					<Input
						type="checkbox"
						placeholder="Placeholder"
						label="Checkbox"
						id="check-6"
						disabled
						size="big"
					/>
					<Space size={20} />
				</Col>
				<Col xs={12} lg={4}>
					<Input
						type="radio"
						name="test2"
						placeholder="Placeholder"
						label="Radio"
						id="radio-4"
						size="big"
					/>
					<Space size={20} />
				</Col>
				<Col xs={12} lg={4}>
					<Input
						type="radio"
						name="test2"
						placeholder="Placeholder"
						label="Radio"
						id="radio-5"
						defaultChecked
						size="big"
					/>
					<Space size={20} />
				</Col>
				<Col xs={12} lg={4}>
					<Input
						type="radio"
						name="radio-6"
						id="radio-6"
						placeholder="Placeholder"
						label="Radio"
						disabled
						size="big"
					/>
					<Space size={20} />
				</Col>

				<Col xs={12} lg={4}>
					<Input type="text" placeholder="Placeholder" disabled />
					<Space size={20} />
				</Col>
				<Col xs={12} lg={4}>
					<Select disabled>
						<option value="1">Sample 1</option>
						<option value="2">Sample 2</option>
						<option value="3">Sample 3</option>
					</Select>
					<Space size={20} />
				</Col>
				<Col xs={12} lg={4}>
					<Textarea type="text" placeholder="Placeholder" disabled />
					<Space size={20} />
				</Col>
				<Col xs={12} lg={4}>
					<Input
						type="text"
						placeholder="Placeholder"
						size="big"
						disabled
					/>
					<Space size={20} />
				</Col>
				<Col xs={12} lg={4}>
					<Select size="big" disabled>
						<option value="1">Sample 1</option>
						<option value="2">Sample 2</option>
						<option value="3">Sample 3</option>
					</Select>
					<Space size={20} />
				</Col>
				<Col xs={12} lg={4}>
					<Textarea
						type="text"
						placeholder="Placeholder"
						size="big"
						disabled
					/>
					<Space size={10} />
				</Col>
			</Row>
			<hr />
			<Space size={10} />
			<Link
				external
				href="https://www.figma.com/file/oumA2pAqhEDMpTAtDgarxr/Cherry-Design-System?node-id=17%3A0"
			>
				Inputs in Figma
			</Link>
			<Space size={20} />
			<DocNavWrapper>
				<DocNav
					href="/docs/design/buttons"
					as="/docs/design/buttons"
					prev
				>
					Design Buttons
				</DocNav>
				<DocNav
					href="/docs/design/spacing"
					as="/docs/design/spacing"
					next
				>
					Design Spacing
				</DocNav>
			</DocNavWrapper>
		</Page>
	);
}

export default Index;
