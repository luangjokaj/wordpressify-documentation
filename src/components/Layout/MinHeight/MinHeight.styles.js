import { css } from "@emotion/react";
import { Breakpoints, mq } from "../../../assets/styles/mq";

export const minHeightStyles = (theme) => css`
	min-height: calc(100vh - ${theme.spacing.paddingTopBody.mobile});
	max-width: 100%;

	${mq(Breakpoints.lg)} {
		min-height: calc(100vh - ${theme.spacing.paddingTopBody.desktop});
	}
`;
