import React from "react";
import { logoWrapperStyles } from "./LogoWrapper.styles";

function LogoWrapper({ className, children }) {
	return (
		<div className={className} css={(theme) => logoWrapperStyles(theme)}>
			{children}
		</div>
	);
}

export { LogoWrapper };
