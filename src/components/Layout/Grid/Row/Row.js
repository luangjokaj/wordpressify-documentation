import React from "react";
import { Row as CherryRow } from "cherry-components";
import { useTheme } from "@emotion/react";

function Row({
	id,
	className,
	children,
	alignItems,
	justifyContent,
	gutterXs = "default",
	gutterSm = "default",
	gutterMd = "default",
	gutterLg = "default",
	gutterXl = "default",
	gutterXxl = "default",
	gutterXxxl = "default",
}) {
	const theme = useTheme();
	return (
		<CherryRow
			id={id}
			className={className}
			alignItems={alignItems}
			justifyContent={justifyContent}
			gutterXs={gutterXs}
			gutterSm={gutterSm}
			gutterMd={gutterMd}
			gutterLg={gutterLg}
			gutterXl={gutterXl}
			gutterXxl={gutterXxl}
			gutterXxxl={gutterXxxl}
			theme={theme}
		>
			{children}
		</CherryRow>
	);
}

export { Row };
