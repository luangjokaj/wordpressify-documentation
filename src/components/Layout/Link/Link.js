import React from "react";
import Link from "next/link";
import { buttonStyles } from "./Button.styles";

function CustomLink({
	className,
	children,
	variant = "primary",
	size = "default",
	frame,
	as,
	href,
	external,
	...props
}) {
	if (as) {
		return (
			<Link
				href={href}
				as={as}
				className={className}
				css={(theme) =>
					buttonStyles(theme, variant, size, frame, props.disabled)
				}
				{...props}
			>
				{children}
			</Link>
		);
	}

	return (
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className={className}
			css={(theme) =>
				buttonStyles(theme, variant, size, frame, props.disabled)
			}
			{...props}
		>
			{children}
		</a>
	);
}

export { CustomLink as Link };
