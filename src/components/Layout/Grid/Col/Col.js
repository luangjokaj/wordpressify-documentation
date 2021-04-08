import React from "react";
import { Col as CherryCol } from "cherry-components";
import { useTheme } from "@emotion/react";

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
	const theme = useTheme();
	return (
		<CherryCol
			id={id}
			className={className}
			textAlign={textAlign}
			xs={xs}
			sm={sm}
			md={md}
			lg={lg}
			xl={xl}
			xxl={xxl}
			xxxl={xxxl}
			first={first}
			firstXs={firstXs}
			firstSm={firstSm}
			firstMd={firstMd}
			firstLg={firstLg}
			firstXl={firstXl}
			firstXxl={firstXxl}
			firstXxxl={firstXxxl}
			last={last}
			lastXs={lastXs}
			lastSm={lastSm}
			lastMd={lastMd}
			lastLg={lastLg}
			lastXl={lastXl}
			lastXxl={lastXxl}
			lastXxxl={lastXxxl}
			display={display}
			fullScreen={fullScreen}
			sticky={sticky}
			theme={theme}
		>
			{children}
		</CherryCol>
	);
}

export { Col };
