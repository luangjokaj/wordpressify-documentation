import { Component } from "react";
import Link from "next/link";
import { ArrowTail } from "../../assets/svg/ArrowTail";
import { FontStyle } from "../Layout";
import { docNavStyles, docNavWrapperStyles } from "./DoNav.styles";

function DocNav({ next, prev, href, as, children }) {
	return (
		<Link href={href} as={as}>
			<a css={(theme) => docNavStyles(theme, next, prev)} href={href}>
				{prev && <ArrowTail />}
				<FontStyle variant="button">{children}</FontStyle>
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
