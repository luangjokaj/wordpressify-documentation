import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialOceanic } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { boxDescriptionStyles } from "./CodeBlock.styles";

function CodeBlock({ language, value, description }) {
	return (
		<>
			<SyntaxHighlighter language={language} style={materialOceanic}>
				{value}
			</SyntaxHighlighter>
			{description && (
				<div css={(theme) => boxDescriptionStyles(theme)}>
					{description}
				</div>
			)}
		</>
	);
}

export { CodeBlock };
