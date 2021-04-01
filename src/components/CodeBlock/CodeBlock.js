import React from "react";
import Head from "next/head";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialOceanic } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { syntaxWrapperStyles, boxDescriptionStyles } from "./CodeBlock.styles";

function CodeBlock({ language, value, description }) {
	return (
		<>
			<div css={(theme) => syntaxWrapperStyles(theme)}>
				<SyntaxHighlighter language={language} style={materialOceanic}>
					{value}
				</SyntaxHighlighter>
			</div>
			{description && (
				<div css={(theme) => boxDescriptionStyles(theme)}>
					{description}
				</div>
			)}
		</>
	);
}

export { CodeBlock };
