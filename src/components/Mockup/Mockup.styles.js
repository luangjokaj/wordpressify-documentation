import { css } from "@emotion/react";
import { rgba } from "polished";

export const mockupStyles = (theme) => css`
	width: 100%;
	position: relative;
	padding: 0 20px;

	&:before {
		content: "";
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 300px;
		background: ${theme.colors.secondaryDark};
		z-index: 0;
	}

	& .window {
		position: relative;
		max-width: 800px;
		margin: auto;

		& .top {
			background: ${theme.colors.secondaryLight};
			border-top-left-radius: 12px;
			border-top-right-radius: 12px;
			display: flex;
			padding: 15px;
		}

		& .content {
			display: block;
			background: ${theme.colors.secondaryDark};
			color: ${rgba(theme.colors.light, 0.5)};
			padding: 20px;
			box-shadow: 0px 0px 100px rgba(0, 0, 0, 0.15),
				0px 10px 30px rgba(0, 0, 0, 0.3);
			border-bottom-left-radius: 12px;
			border-bottom-right-radius: 12px;

			${mq(Breakpoints.lg)} {
				padding: 40px;
			}

			& .light {
				color: ${theme.colors.light};
			}

			& .soft {
				color: ${rgba(theme.colors.light, 0.8)};
			}

			& .highlight {
				color: ${theme.colors.primaryLight};
			}
		}
	}
`;
