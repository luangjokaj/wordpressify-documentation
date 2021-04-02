import React from "react";
import { Arrow } from "../../../../assets/svg/Arrow";
import { Label } from "../../Label/Label";
import { selectWrapperStyles, inputStyles } from "../Input.styles";

function Select({
	className,
	children,
	size = "default",
	error,
	success,
	fullWidth = true,
	label,
	...props
}) {
	return (
		<>
			{label && (
				<Label htmlFor={props.id} error={error} success={success}>
					{label}
				</Label>
			)}
			<div
				css={(theme) =>
					selectWrapperStyles(theme, size, success, error, fullWidth)
				}
			>
				<select
					className={className}
					css={(theme) =>
						inputStyles(
							theme,
							"text",
							size,
							props.disabled,
							success,
							error,
							fullWidth,
						)
					}
					{...props}
				>
					{children}
				</select>
				<Arrow />
			</div>
		</>
	);
}

export { Select };
