import { css } from "@emotion/react";
import { Breakpoints, mq } from "../../assets/styles/mq";

export const logoWrapperStyles = (theme) => css`
	margin: 0 -10px;

	${mq(Breakpoints.lg)} {
		margin: 0 -10px;
	}

	& > div {
		margin: 10px !important;
	}
`;
