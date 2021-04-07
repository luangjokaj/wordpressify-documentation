import React from "react";
import { colStyles } from "./Col.styles";

function Col({
	id,
	className,
	children,
	textAlign,
	xs,
	sm,
	md,
	lg,
	xl,
	xxl,
	xxxl,
	first,
	firstXs,
	firstSm,
	firstMd,
	firstLg,
	firstXl,
	firstXxl,
	firstXxxl,
	last,
	lastXs,
	lastSm,
	lastMd,
	lastLg,
	lastXl,
	lastXxl,
	lastXxxl,
	display,
	fullScreen,
	sticky,
}) {
	return (
		<div
			css={(theme) =>
				colStyles(
					theme,
					textAlign,
					xs,
					sm,
					md,
					lg,
					xl,
					xxl,
					xxxl,
					first,
					firstXs,
					firstSm,
					firstMd,
					firstLg,
					firstXl,
					firstXxl,
					firstXxxl,
					last,
					lastXs,
					lastSm,
					lastMd,
					lastLg,
					lastXl,
					lastXxl,
					lastXxxl,
					display,
					fullScreen,
					sticky,
				)
			}
			className={className}
			id={id}
			data-col
		>
			{children}
		</div>
	);
}

export { Col };
