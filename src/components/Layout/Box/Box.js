import Link from "next/link";
import React from "react";
import { boxStyles } from "./Box.styles";

function Box({ className, children, href, as, noPadding }) {
	if (as) {
		return (
			<Link href={href} as={as}>
				<a css={(theme) => boxStyles(theme, as, noPadding)} href={href}>
					{children && children}
				</a>
			</Link>
		);
	}
	return (
		<div
			className={className}
			css={(theme) => boxStyles(theme, as, noPadding)}
		>
			{children && children}
		</div>
	);
}

export { Box };
