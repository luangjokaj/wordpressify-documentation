import React from "react";
import { burgerStyles } from "./Burger.styles";

function Burger({ className, isOpen, ...props }) {
	return (
		<button
			css={(theme) => burgerStyles(theme, isOpen)}
			aria-label="Burger Menu"
			{...props}
		>
			<span />
		</button>
	);
}

export { Burger };
