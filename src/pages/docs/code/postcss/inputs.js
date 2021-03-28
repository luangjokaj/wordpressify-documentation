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

const inputTextCode = `<input type="text" placeholder="Placeholder" />`;
const inputTextErrorCode = `<input type="text" class="error" placeholder="Placeholder" />`;
const inputTextSuccessCode = `<input type="text" class="success" placeholder="Placeholder"/>`;
const inputTextDisabledCode = `<input type="text" placeholder="Placeholder" disabled />`;
const inputTextLabelCode = `<label for="sample">Label</label>
<input type="text" placeholder="Placeholder" id="sample" />`;

const inputTextBigCode = `<input type="text" class="big" placeholder="Placeholder" />`;
const inputTextErrorBigCode = `<input type="text" class="big error" placeholder="Placeholder" />`;
const inputTextSuccessBigCode = `<input type="text" class="big success" placeholder="Placeholder" />`;
const inputTextDisabledBigCode = `<input type="text" class="big" placeholder="Placeholder" disabled />`;
const inputTextLabelBigCode = `<label for="sample">Label</label>
<input type="text" class="big" placeholder="Placeholder" id="sample" />`;

const selectCode = `<select>
	<option value="1">Sample 1</option>
	<option value="2">Sample 2</option>
	<option value="3">Sample 3</option>
</select>`;
const selectErrorCode = `<select class="error">
	<option value="1">Sample 1</option>
	<option value="2">Sample 2</option>
	<option value="3">Sample 3</option>
</select>`;
const selectSuccessCode = `<select class="success">
	<option value="1">Sample 1</option>
	<option value="2">Sample 2</option>
	<option value="3">Sample 3</option>
</select>`;
const selectDisabledCode = `<select disabled>
	<option value="1">Sample 1</option>
	<option value="2">Sample 2</option>
	<option value="3">Sample 3</option>
</select>`;

const selectBigCode = `<select class="big">
	<option value="1">Sample 1</option>
	<option value="2">Sample 2</option>
	<option value="3">Sample 3</option>
</select>`;
const selectErrorBigCode = `<select class="error big">
	<option value="1">Sample 1</option>
	<option value="2">Sample 2</option>
	<option value="3">Sample 3</option>
</select>`;
const selectSuccessBigCode = `<select class="success big">
	<option value="1">Sample 1</option>
	<option value="2">Sample 2</option>
	<option value="3">Sample 3</option>
</select>`;
const selectBigDisabledCode = `<select class="big" disabled>
	<option value="1">Sample 1</option>
	<option value="2">Sample 2</option>
	<option value="3">Sample 3</option>
</select>`;

const textareaCode = `<textarea>Placeholder</textarea>`;
const textareaErrorCode = `<textarea class="error">Placeholder</textarea>`;
const textareaSuccessCode = `<textarea class="success">Placeholder</textarea>`;
const textareaDisabledCode = `<textarea disabled>Placeholder</textarea>`;

const textareaBigCode = `<textarea class="big">Placeholder</textarea>`;
const textareaErrorBigCode = `<textarea class="error big">Placeholder</textarea>`;
const textareaSuccessBigCode = `<textarea class="success big">Placeholder</textarea>`;
const textareaBigDisabledCode = `<textarea class="big">Placeholder</textarea>`;

const checkboxCode = `<input type="checkbox" id="sample-check">
<label for="sample-check">Checkbox</label>`;
const checkboxCheckedCode = `<input type="checkbox" id="sample-check" checked>
<label for="sample-check">Checkbox</label>`;
const checkboxDisabledCode = `<input type="checkbox" id="sample-check" disabled>
<label for="sample-check">Checkbox</label>`;

const checkboxBigCode = `<input type="checkbox" id="sample-check" class="big">
<label for="sample-check">Checkbox</label>`;
const checkboxCheckedBigCode = `<input type="checkbox" id="sample-check" class="big" checked>
<label for="sample-check">Checkbox</label>`;
const checkboxBigDisabledCode = `<input type="checkbox" id="sample-check" class="big" disabled>
<label for="sample-check">Checkbox</label>`;

const radioCode = `<input type="radio" id="sample-radio">
<label for="sample-radio">Radio</label>`;
const radioCheckedCode = `<input type="radio" id="sample-radio" checked>
<label for="sample-radio">Radio</label>`;
const radioDisabledCode = `<input type="radio" id="sample-radio" disabled>
<label for="sample-radio">Radio</label>`;

const radioBigCode = `<input type="radio" id="sample-radio" class="big">
<label for="sample-radio">Radio</label>`;
const radioCheckedBigCode = `<input type="radio" id="sample-radio" class="big" checked>
<label for="sample-radio">Radio</label>`;
const radioBigDisabledCode = `<input type="radio" id="sample-radio" class="big" disabled>
<label for="sample-radio">Radio</label>`;

function Index({ posts = [] }) {
	return (
		<Page title="PostCSS Inputs">
			<Space xs={20} lg={40} />
			<H1 size="hero1">PostCSS Inputs</H1>
			<Space xs={10} lg={30} />
			<p>
				The input styles are defined in <strong>inputs.css</strong>. All
				form inputs take the default style of the Cherry design system.
				You can change the variants of the inputs by using class names.
			</p>
			<Space size={10} />
			<CodeBlock
				language="html"
				value={inputTextCode}
				description={<Input type="text" placeholder="Placeholder" />}
			/>
			<Space size={20} />
			<CodeBlock
				language="html"
				value={inputTextErrorCode}
				description={
					<Input type="text" placeholder="Placeholder" error />
				}
			/>
			<Space size={20} />
			<CodeBlock
				language="html"
				value={inputTextSuccessCode}
				description={
					<Input type="text" placeholder="Placeholder" success />
				}
			/>
			<Space size={20} />
			<CodeBlock
				language="html"
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
				language="html"
				value={inputTextBigCode}
				description={
					<Input type="text" placeholder="Placeholder" size="big" />
				}
			/>
			<Space size={20} />
			<CodeBlock
				language="html"
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
				language="html"
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
				language="html"
				value={inputTextLabelBigCode}
				description={
					<Input
						type="text"
						placeholder="Placeholder"
						label="Label"
						size="big"
						id="label2"
					/>
				}
			/>
			<Space size={20} />
			<CodeBlock
				language="html"
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
				language="html"
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
				language="html"
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
				language="html"
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
				language="html"
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
				language="html"
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
				language="html"
				value={textareaCode}
				description={<Textarea placeholder="Placeholder" />}
			/>
			<Space size={20} />
			<CodeBlock
				language="html"
				value={textareaErrorCode}
				description={<Textarea placeholder="Placeholder" error />}
			/>
			<Space size={20} />
			<CodeBlock
				language="html"
				value={textareaSuccessCode}
				description={<Textarea placeholder="Placeholder" success />}
			/>
			<Space size={20} />
			<CodeBlock
				language="html"
				value={textareaBigCode}
				description={<Textarea placeholder="Placeholder" size="big" />}
			/>
			<Space size={20} />
			<CodeBlock
				language="html"
				value={textareaErrorBigCode}
				description={
					<Textarea placeholder="Placeholder" error size="big" />
				}
			/>
			<Space size={20} />
			<CodeBlock
				language="html"
				value={textareaSuccessBigCode}
				description={
					<Textarea placeholder="Placeholder" success size="big" />
				}
			/>
			<Space size={20} />
			<CodeBlock
				language="html"
				value={checkboxCode}
				description={
					<Input type="checkbox" label="Checkbox" id="sample-2" />
				}
			/>
			<Space size={20} />
			<CodeBlock
				language="html"
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
				language="html"
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
				language="html"
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
				language="html"
				value={radioCode}
				description={
					<Input type="radio" label="Checkbox" id="sample-6" />
				}
			/>
			<Space size={20} />
			<CodeBlock
				language="html"
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
				language="html"
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
				language="html"
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
				language="html"
				value={inputTextDisabledCode}
				description={
					<Input type="text" placeholder="Placeholder" disabled />
				}
			/>
			<Space size={20} />
			<CodeBlock
				language="html"
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
				language="html"
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
				language="html"
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
				language="html"
				value={textareaDisabledCode}
				description={<Textarea placeholder="Placeholder" disabled />}
			/>
			<Space size={20} />
			<CodeBlock
				language="html"
				value={textareaBigDisabledCode}
				description={
					<Textarea placeholder="Placeholder" disabled size="big" />
				}
			/>
			<Space size={20} />
			<CodeBlock
				language="html"
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
				language="html"
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
				language="html"
				value={radioDisabledCode}
				description={
					<Input type="radio" label="Radio" id="sample-xx" disabled />
				}
			/>
			<Space size={20} />
			<CodeBlock
				language="html"
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
					href="/docs/code/postcss/buttons"
					as="/docs/code/postcss/buttons"
					prev
				>
					PostCSS Buttons
				</DocNav>
				<DocNav
					href="/docs/code/postcss/spacing"
					as="/docs/code/postcss/spacing"
					next
				>
					PostCSS Spacing
				</DocNav>
			</DocNavWrapper>
		</Page>
	);
}

export default Index;
