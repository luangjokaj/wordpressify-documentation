import React from "react";
import { Label } from "../Label";
import { radioCheckWrapperStyles } from "./Input.styles";
import { toggleInputStyles } from "./ToggleInput.styles";

function ToggleInput({
	className,
	children,
	size = "default",
	success,
	error,
	label,
	type = "checkbox",
	fullWidth,
	...props
}) {
	return (
		<div
			css={(theme) =>
				radioCheckWrapperStyles(theme, "toggle-input", size, fullWidth)
			}
		>
			<div
				css={(theme) => toggleInputStyles(theme, size)}
				className="toggle-input-inner"
			>
				<input type="checkbox" className={className} {...props} />
				<div className="toggle-input-slider" />
			</div>
			{label && (
				<Label htmlFor={props.id} error={error} success={success}>
					{label}
				</Label>
			)}
		</div>
	);
}

export { ToggleInput };
