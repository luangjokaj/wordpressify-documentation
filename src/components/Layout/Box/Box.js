import Link from "next/link";
import React from "react";
import { boxStyles } from "./Box.styles";

function Box({ className, children, href, as, noPadding, isVideo }) {
	if (as) {
		return (
			<Link
				href={href}
				as={as}
				css={(theme) => boxStyles(theme, as, noPadding, isVideo)}
			>
				{children && children}
			</Link>
		);
	}
	return (
		<div
			className={className}
			css={(theme) => boxStyles(theme, as, noPadding, isVideo)}
		>
			{children && children}
		</div>
	);
}

export { Box };
