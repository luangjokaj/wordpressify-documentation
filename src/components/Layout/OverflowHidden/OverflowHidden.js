import React from "react";
import { overflowHiddenStyles } from "./OverflowHidden.styles";

function OverflowHidden({ children }) {
	return <div css={(theme) => overflowHiddenStyles(theme)}>{children}</div>;
}

export { OverflowHidden };
