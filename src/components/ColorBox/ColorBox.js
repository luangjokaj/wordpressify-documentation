import React from "react";
import { colorBoxContainerStyles, colorBoxStyles } from "./ColorBox.styles";

function ColorBox({ name, value, border }) {
	return (
		<div
			css={(theme) => colorBoxStyles(theme, value, border)}
			className="color-box"
		>
			<div className="swatch" />
			<div className="color-info">
				<strong>{name}</strong>
				<em>{value}</em>
			</div>
		</div>
	);
}

function ColorBoxContainer({ children, isPushing = true }) {
	return (
		<div css={(theme) => colorBoxContainerStyles(theme, isPushing)}>
			{children}
		</div>
	);
}

export { ColorBox, ColorBoxContainer };
