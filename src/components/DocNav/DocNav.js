import { Component } from "react";
import Link from "next/link";
import { FontStyle } from "cherry-components";
import { useTheme } from "@emotion/react";
import { ArrowTail } from "../../assets/svg/ArrowTail";
import { docNavStyles, docNavWrapperStyles } from "./DoNav.styles";

function DocNav({ next, prev, href, as, children }) {
	const theme = useTheme();
	return (
		<Link href={href} as={as}>
			<a css={(theme) => docNavStyles(theme, next, prev)} href={href}>
				{prev && <ArrowTail />}
				<FontStyle theme={theme} variant="button">
					{children}
				</FontStyle>
				{next && <ArrowTail />}
			</a>
		</Link>
	);
}

function DocNavWrapper({ children, noTop }) {
	return (
		<div css={(theme) => docNavWrapperStyles(theme, noTop)}>{children}</div>
	);
}

export { DocNav, DocNavWrapper };
