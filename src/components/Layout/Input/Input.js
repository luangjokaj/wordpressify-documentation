import React from "react";
import { inputStyles, radioCheckWrapperStyles } from "./Input.styles";
import { Check } from "../../../assets/svg/Check";
import { Label } from "../Label";

function Input({
	className,
	children,
	size = "default",
	type = "text",
	success,
	error,
	label,
	fullWidth,
	...props
}) {
	if ((type === "checkbox") | (type === "radio")) {
		return (
			<div
				css={(theme) =>
					radioCheckWrapperStyles(theme, type, size, fullWidth)
				}
			>
				<input
					type={type}
					className={className}
					css={(theme) =>
						inputStyles(
							theme,
							type,
							size,
							props.disabled,
							success,
							error,
							fullWidth,
						)
					}
					{...props}
				/>
				{type === "checkbox" ? <Check /> : <em />}
				{label && (
					<Label htmlFor={props.id} error={error} success={success}>
						{label}
					</Label>
				)}
			</div>
		);
	}

	return (
		<>
			{label && (
				<Label
					htmlFor={props.id}
					error={error}
					success={success}
					fullWidth={fullWidth}
				>
					{label}
				</Label>
			)}
			<input
				type={type}
				className={className}
				css={(theme) =>
					inputStyles(
						theme,
						type,
						size,
						props.disabled,
						success,
						error,
						fullWidth,
					)
				}
				{...props}
			/>
		</>
	);
}

export { Input };
