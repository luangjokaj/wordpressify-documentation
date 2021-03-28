import React from "react";
import { bigNumberStyles } from "./BigNumber.styles";

function BigNumber({ number, color }) {
	return <span css={(theme) => bigNumberStyles(theme, color)}>{number}</span>;
}

export { BigNumber };
