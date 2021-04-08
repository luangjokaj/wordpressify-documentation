import React from "react";
import {
	H1 as CherryH1,
	H2 as CherryH2,
	H3 as CherryH3,
	H4 as CherryH4,
	H5 as CherryH5,
	H6 as CherryH6,
} from "cherry-components";
import { useTheme } from "@emotion/react";

function H1({ children, id, className, size }) {
	const theme = useTheme();
	return (
		<CherryH1 id={id} className={className} size={size} theme={theme}>
			{children}
		</CherryH1>
	);
}

function H2({ children, id, className, size }) {
	const theme = useTheme();
	return (
		<CherryH2 id={id} className={className} size={size} theme={theme}>
			{children}
		</CherryH2>
	);
}

function H3({ children, id, className, size }) {
	const theme = useTheme();
	return (
		<CherryH3 id={id} className={className} size={size} theme={theme}>
			{children}
		</CherryH3>
	);
}

function H4({ children, id, className, size }) {
	const theme = useTheme();
	return (
		<CherryH4 id={id} className={className} size={size} theme={theme}>
			{children}
		</CherryH4>
	);
}

function H5({ children, id, className, size }) {
	const theme = useTheme();
	return (
		<CherryH5 id={id} className={className} size={size} theme={theme}>
			{children}
		</CherryH5>
	);
}

function H6({ children, id, className, size }) {
	const theme = useTheme();
	return (
		<CherryH6 id={id} className={className} size={size} theme={theme}>
			{children}
		</CherryH6>
	);
}

export { H1, H2, H3, H4, H5, H6 };
