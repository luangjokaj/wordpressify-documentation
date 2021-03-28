import React from "react";
import { Page } from "../../../../components/Pages";
import {
	Space,
	H1,
	Input,
	Select,
	Textarea,
} from "../../../../components/Layout";
import { CodeBlock } from "../../../../components/CodeBlock";
import { DocNav, DocNavWrapper } from "../../../../components/DocNav";

const inputTextCode = `<Input type="text" placeholder="Placeholder" />`;
const inputTextErrorCode = `<Input type="text" placeholder="Placeholder" error />`;
const inputTextSuccessCode = `<Input type="text" placeholder="Placeholder" success />`;
const inputTextDisabledCode = `<Input type="text" placeholder="Placeholder" disabled />`;
const inputTextLabelCode = `<Input type="text" placeholder="Placeholder" label="Label" id="sample" disabled />`;

const inputTextBigCode = `<Input type="text" placeholder="Placeholder" size="big" />`;
const inputTextErrorBigCode = `<Input type="text" placeholder="Placeholder" size="big" error />`;
const inputTextSuccessBigCode = `<Input type="text" placeholder="Placeholder" size="big" success />`;
const inputTextDisabledBigCode = `<Input type="text" placeholder="Placeholder" size="big" disabled />`;
const inputTextLabelBigCode = `<Input type="text" placeholder="Placeholder" label="Label" size="big" id="sample" disabled />`;

const selectCode = `<Select>
	<option value="1">Sample 1</option>
	<option value="2">Sample 2</option>
	<option value="3">Sample 3</option>
</Select>`;
const selectErrorCode = `<Select error>
	<option value="1">Sample 1</option>
	<option value="2">Sample 2</option>
	<option value="3">Sample 3</option>
</Select>`;
const selectSuccessCode = `<Select success>
	<option value="1">Sample 1</option>
	<option value="2">Sample 2</option>
	<option value="3">Sample 3</option>
</Select>`;
const selectDisabledCode = `<Select disabled>
	<option value="1">Sample 1</option>
	<option value="2">Sample 2</option>
	<option value="3">Sample 3</option>
</Select>`;

const selectBigCode = `<Select size="big">
	<option value="1">Sample 1</option>
	<option value="2">Sample 2</option>
	<option value="3">Sample 3</option>
</Select>`;
const selectErrorBigCode = `<Select size="big" error>
	<option value="1">Sample 1</option>
	<option value="2">Sample 2</option>
	<option value="3">Sample 3</option>
</Select>`;
const selectSuccessBigCode = `<Select size="big" success>
	<option value="1">Sample 1</option>
	<option value="2">Sample 2</option>
	<option value="3">Sample 3</option>
</Select>`;
const selectBigDisabledCode = `<Select size="big" disabled>
	<option value="1">Sample 1</option>
	<option value="2">Sample 2</option>
	<option value="3">Sample 3</option>
</Select>`;

const textareaCode = `<Textarea>Placeholder</Textarea>`;
const textareaErrorCode = `<Textarea error>Placeholder</Textarea>`;
const textareaSuccessCode = `<Textarea success>Placeholder</Textarea>`;
const textareaDisabledCode = `<Textarea disabled>Placeholder</Textarea>`;

const textareaBigCode = `<Textarea size="big">Placeholder</Textarea>`;
const textareaErrorBigCode = `<Textarea size="big" error>Placeholder</Textarea>`;
const textareaSuccessBigCode = `<Textarea size="big" success>Placeholder</Textarea>`;
const textareaBigDisabledCode = `<Textarea size="big">Placeholder</Textarea>`;

const checkboxCode = `<Input type="checkbox" id="sample-check" label="Checkbox" />`;
const checkboxCheckedCode = `<Input type="checkbox" id="sample-check" label="Checkbox" checked />`;
const checkboxDisabledCode = `<Input type="checkbox" id="sample-check" label="Checkbox" disabled />`;

const checkboxBigCode = `<Input type="checkbox" id="sample-check" label="Checkbox" size="big">`;
const checkboxCheckedBigCode = `<Input type="checkbox" id="sample-check" label="Checkbox" size="big" checked>`;
const checkboxBigDisabledCode = `<Input type="checkbox" id="sample-check" label="Checkbox" size="big" disabled>`;

const radioCode = `<Input type="radio" id="sample-radio" label="Radio" />;`;
const radioCheckedCode = `<Input type="radio" id="sample-radio" label="Radio" checked />;`;
const radioDisabledCode = `<Input type="radio" id="sample-radio" label="Radio" disabled />`;

const radioBigCode = `<Input type="radio" id="sample-radio" label="Radio" size="big" />`;
const radioCheckedBigCode = `<Input type="radio" id="sample-radio" label="Radio" size="big" checked />`;
const radioBigDisabledCode = `<Input type="radio" id="sample-radio" label="Radio" size="big" disabled />`;

function Index({ posts = [] }) {
	return (
		<Page title="Input Components">
			<Space xs={20} lg={40} />
			<H1 size="hero1">Input Components</H1>
			<Space xs={10} lg={30} />
			<p>
				The input styles are defined in <strong>Input.styles.js</strong>
				. You can change the variants of the inputs by using different
				props.
			</p>
			<Space size={10} />
			<CodeBlock
				language="jsx"
				value={inputTextCode}
				description={<Input type="text" placeholder="Placeholder" />}
			/>
			<Space size={20} />
			<CodeBlock
				language="jsx"
				value={inputTextErrorCode}
				description={
					<Input type="text" placeholder="Placeholder" error />
				}
			/>
			<Space size={20} />
			<CodeBlock
				language="jsx"
				value={inputTextSuccessCode}
				description={
					<Input type="text" placeholder="Placeholder" success />
				}
			/>
			<Space size={20} />
			<CodeBlock
				language="jsx"
				value={inputTextLabelCode}
				description={
					<Input
						type="text"
						placeholder="Placeholder"
						label="Label"
						id="label1"
					/>
				}
			/>
			<Space size={20} />
			<CodeBlock
				language="jsx"
				value={inputTextBigCode}
				description={
					<Input type="text" placeholder="Placeholder" size="big" />
				}
			/>
			<Space size={20} />
			<CodeBlock
				language="jsx"
				value={inputTextErrorBigCode}
				description={
					<Input
						type="text"
						placeholder="Placeholder"
						error
						size="big"
					/>
				}
			/>
			<Space size={20} />
			<CodeBlock
				language="jsx"
				value={inputTextSuccessBigCode}
				description={
					<Input
						type="text"
						placeholder="Placeholder"
						success
						size="big"
					/>
				}
			/>
			<Space size={20} />
			<CodeBlock
				language="jsx"
				value={inputTextLabelBigCode}
				description={
					<Input
						type="text"
						placeholder="Placeholder"
						label="Label"
						id="label2"
						size="big"
					/>
				}
			/>
			<Space size={20} />
			<CodeBlock
				language="jsx"
				value={selectCode}
				description={
					<Select>
						<option value="1">Sample 1</option>
						<option value="2">Sample 2</option>
						<option value="3">Sample 3</option>
					</Select>
				}
			/>
			<Space size={20} />
			<CodeBlock
				language="jsx"
				value={selectErrorCode}
				description={
					<Select error>
						<option value="1">Sample 1</option>
						<option value="2">Sample 2</option>
						<option value="3">Sample 3</option>
					</Select>
				}
			/>
			<Space size={20} />
			<CodeBlock
				language="jsx"
				value={selectSuccessCode}
				description={
					<Select success>
						<option value="1">Sample 1</option>
						<option value="2">Sample 2</option>
						<option value="3">Sample 3</option>
					</Select>
				}
			/>
			<Space size={20} />
			<CodeBlock
				language="jsx"
				value={selectBigCode}
				description={
					<Select size="big">
						<option value="1">Sample 1</option>
						<option value="2">Sample 2</option>
						<option value="3">Sample 3</option>
					</Select>
				}
			/>
			<Space size={20} />
			<CodeBlock
				language="jsx"
				value={selectErrorBigCode}
				description={
					<Select error size="big">
						<option value="1">Sample 1</option>
						<option value="2">Sample 2</option>
						<option value="3">Sample 3</option>
					</Select>
				}
			/>
			<Space size={20} />
			<CodeBlock
				language="jsx"
				value={selectSuccessBigCode}
				description={
					<Select success size="big">
						<option value="1">Sample 1</option>
						<option value="2">Sample 2</option>
						<option value="3">Sample 3</option>
					</Select>
				}
			/>
			<Space size={20} />
			<CodeBlock
				language="jsx"
				value={textareaCode}
				description={<Textarea placeholder="Placeholder" />}
			/>
			<Space size={20} />
			<CodeBlock
				language="jsx"
				value={textareaErrorCode}
				description={<Textarea placeholder="Placeholder" error />}
			/>
			<Space size={20} />
			<CodeBlock
				language="jsx"
				value={textareaSuccessCode}
				description={<Textarea placeholder="Placeholder" success />}
			/>
			<Space size={20} />
			<CodeBlock
				language="jsx"
				value={textareaBigCode}
				description={<Textarea placeholder="Placeholder" size="big" />}
			/>
			<Space size={20} />
			<CodeBlock
				language="jsx"
				value={textareaErrorBigCode}
				description={
					<Textarea placeholder="Placeholder" error size="big" />
				}
			/>
			<Space size={20} />
			<CodeBlock
				language="jsx"
				value={textareaSuccessBigCode}
				description={
					<Textarea placeholder="Placeholder" success size="big" />
				}
			/>
			<Space size={20} />
			<CodeBlock
				language="jsx"
				value={checkboxCode}
				description={
					<Input type="checkbox" label="Checkbox" id="sample-2" />
				}
			/>
			<Space size={20} />
			<CodeBlock
				language="jsx"
				value={checkboxCheckedCode}
				description={
					<Input
						type="checkbox"
						label="Checkbox"
						id="sample-3"
						defaultChecked
					/>
				}
			/>
			<Space size={20} />
			<CodeBlock
				language="jsx"
				value={checkboxBigCode}
				description={
					<Input
						type="checkbox"
						label="Checkbox"
						id="sample-4"
						size="big"
					/>
				}
			/>
			<Space size={20} />
			<CodeBlock
				language="jsx"
				value={checkboxCheckedBigCode}
				description={
					<Input
						type="checkbox"
						label="Checkbox"
						id="sample-5"
						size="big"
						defaultChecked
					/>
				}
			/>
			<Space size={20} />
			<CodeBlock
				language="jsx"
				value={radioCode}
				description={
					<Input type="radio" label="Checkbox" id="sample-6" />
				}
			/>
			<Space size={20} />
			<CodeBlock
				language="jsx"
				value={radioCheckedCode}
				description={
					<Input
						type="radio"
						label="Checkbox"
						id="sample-7"
						defaultChecked
					/>
				}
			/>
			<Space size={20} />
			<CodeBlock
				language="jsx"
				value={radioBigCode}
				description={
					<Input
						type="radio"
						label="Checkbox"
						id="sample-8"
						size="big"
					/>
				}
			/>
			<Space size={20} />
			<CodeBlock
				language="jsx"
				value={radioCheckedBigCode}
				description={
					<Input
						type="radio"
						label="Checkbox"
						id="sample-9"
						size="big"
						defaultChecked
					/>
				}
			/>
			<Space size={20} />
			<CodeBlock
				language="jsx"
				value={inputTextDisabledCode}
				description={
					<Input type="text" placeholder="Placeholder" disabled />
				}
			/>
			<Space size={20} />
			<CodeBlock
				language="jsx"
				value={inputTextDisabledBigCode}
				description={
					<Input
						type="text"
						placeholder="Placeholder"
						disabled
						size="big"
					/>
				}
			/>
			<Space size={20} />
			<CodeBlock
				language="jsx"
				value={selectDisabledCode}
				description={
					<Select disabled>
						<option value="1">Sample 1</option>
						<option value="2">Sample 2</option>
						<option value="3">Sample 3</option>
					</Select>
				}
			/>
			<Space size={20} />
			<CodeBlock
				language="jsx"
				value={selectBigDisabledCode}
				description={
					<Select disabled size="big">
						<option value="1">Sample 1</option>
						<option value="2">Sample 2</option>
						<option value="3">Sample 3</option>
					</Select>
				}
			/>
			<Space size={20} />
			<CodeBlock
				language="jsx"
				value={textareaDisabledCode}
				description={<Textarea placeholder="Placeholder" disabled />}
			/>
			<Space size={20} />
			<CodeBlock
				language="jsx"
				value={textareaBigDisabledCode}
				description={
					<Textarea placeholder="Placeholder" disabled size="big" />
				}
			/>
			<Space size={20} />
			<CodeBlock
				language="jsx"
				value={checkboxDisabledCode}
				description={
					<Input
						type="checkbox"
						label="Checkbox"
						id="sample-x"
						disabled
					/>
				}
			/>
			<Space size={20} />
			<CodeBlock
				language="jsx"
				value={checkboxBigDisabledCode}
				description={
					<Input
						type="checkbox"
						label="Checkbox"
						id="sample-xx"
						disabled
						size="big"
					/>
				}
			/>
			<Space size={20} />
			<CodeBlock
				language="jsx"
				value={radioDisabledCode}
				description={
					<Input type="radio" label="Radio" id="sample-xx" disabled />
				}
			/>
			<Space size={20} />
			<CodeBlock
				language="jsx"
				value={radioBigDisabledCode}
				description={
					<Input
						type="radio"
						label="Radio"
						id="sample-xxx"
						disabled
						size="big"
					/>
				}
			/>
			<Space size={20} />
			<DocNavWrapper>
				<DocNav
					href="/docs/code/react-components/buttons"
					as="/docs/code/react-components/buttons"
					prev
				>
					Button Components
				</DocNav>
				<DocNav
					href="/docs/code/react-components/spacing"
					as="/docs/code/react-components/spacing"
					next
				>
					Spacing Component
				</DocNav>
			</DocNavWrapper>
		</Page>
	);
}

export default Index;
