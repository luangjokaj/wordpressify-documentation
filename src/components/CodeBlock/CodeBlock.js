import React from "react";
import Head from "next/head";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialOceanic } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { syntaxWrapperStyles, boxDescriptionStyles } from "./CodeBlock.styles";

function CodeBlock({ language, value, description }) {
	return (
		<>
			<Head>
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap"
					rel="preload"
					as="style"
				/>
			</Head>
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
