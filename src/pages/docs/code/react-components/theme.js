import React from "react";
import { Page } from "../../../../components/Pages";
import { Space, H1 } from "../../../../components/Layout";
import { CodeBlock } from "../../../../components/CodeBlock";
import { DocNav, DocNavWrapper } from "../../../../components/DocNav";

const themeCode = `const theme = {
	spacing: {
		maxWidth: "1280px",
		maxWidthLimit: "1440px",
		paddingTopBody: { mobile: "76px", desktop: "76px" },
		marginContainer: { mobile: "20px", desktop: "20px" },
		marginRow: { default: "-10px", medium: "-30px", big: "-50px" },
		gutterCol: { default: "10px", medium: "30px", big: "50px" },
	},
	colors: {
		primaryLight: "#FDA4AF",
		primary: "#F43F5E",
		primaryDark: "#9F1239",

		secondaryLight: "#7DD3FC",
		secondary: "#0EA5E9",
		secondaryDark: "#075985",

		tertiaryLight: "#D8B4FE",
		tertiary: "#A855F7",
		tertiaryDark: "#6B21A8",

		dark: "#000",
		light: "#fff",

		grayLight: "#E5E7EB",
		gray: "#9CA3AF",
		grayDark: "#4B5563",

		success: "#28A745",
		error: "#DC3545",
		warning: "#FFC107",
		info: "#17A2B8",
	},
	fonts: {
		text: "'Inter', sans-serif",
		head: "'Inter', sans-serif",
		special: "'Inter', sans-serif",
		mono: "'Inter', monospace",
	},
	sizes: {
		hero1: {
			size: {
				mobile: "52px",
				desktop: "62px",
			},
			lineheight: {
				mobile: "1.15",
				desktop: "1.15",
			},
		},
		hero2: {
			size: {
				mobile: "42px",
				desktop: "52px",
			},
			lineheight: {
				mobile: "1.15",
				desktop: "1.15",
			},
		},
		hero3: {
			size: {
				mobile: "32px",
				desktop: "42px",
			},
			lineheight: {
				mobile: "1.15",
				desktop: "1.15",
			},
		},
		h1: {
			size: {
				mobile: "38px",
				desktop: "40px",
			},
			lineheight: {
				mobile: "1.2",
				desktop: "1.2",
			},
		},
		h2: {
			size: {
				mobile: "28px",
				desktop: "32px",
			},
			lineheight: {
				mobile: "1.2",
				desktop: "1.2",
			},
		},
		h3: {
			size: {
				mobile: "24px",
				desktop: "28px",
			},
			lineheight: {
				mobile: "1.2",
				desktop: "1.2",
			},
		},
		h4: {
			size: {
				mobile: "22px",
				desktop: "24px",
			},
			lineheight: {
				mobile: "1.3",
				desktop: "1.3",
			},
		},
		h5: {
			size: {
				mobile: "18px",
				desktop: "20px",
			},
			lineheight: {
				mobile: "1.4",
				desktop: "1.4",
			},
		},
		h6: {
			size: {
				mobile: "16px",
				desktop: "18px",
			},
			lineheight: {
				mobile: "1.4",
				desktop: "1.4",
			},
		},
		eyebrow: {
			size: {
				mobile: "16px",
				desktop: "18px",
			},
			lineheight: {
				mobile: "1.35",
				desktop: "1.15",
			},
		},
		subtitle: {
			size: {
				mobile: "18px",
				desktop: "20px",
			},
			lineheight: {
				mobile: "1.35",
				desktop: "1.35",
			},
		},
		button: {
			size: {
				mobile: "12px",
				desktop: "14px",
			},
			lineheight: {
				mobile: "1",
				desktop: "1",
			},
		},
		buttonBig: {
			size: {
				mobile: "16px",
				desktop: "18px",
			},
			lineheight: {
				mobile: "1",
				desktop: "1",
			},
		},
		lead: {
			size: {
				mobile: "16px",
				desktop: "18px",
			},
			lineheight: {
				mobile: "1.35",
				desktop: "1.35",
			},
		},
		input: {
			size: {
				mobile: "12px",
				desktop: "14px",
			},
			lineheight: {
				mobile: "1",
				desktop: "1",
			},
		},
		inputBig: {
			size: {
				mobile: "16px",
				desktop: "18px",
			},
			lineheight: {
				mobile: "1",
				desktop: "1",
			},
		},
		strong: {
			size: {
				mobile: "14px",
				desktop: "16px",
			},
			lineheight: {
				mobile: "1.5",
				desktop: "1.5",
			},
		},
		text: {
			size: {
				mobile: "14px",
				desktop: "16px",
			},
			lineheight: {
				mobile: "1.5",
				desktop: "1.5",
			},
		},
		small: {
			size: {
				mobile: "12px",
				desktop: "14px",
			},
			lineheight: {
				mobile: "1.3",
				desktop: "1.3",
			},
		},
		blockquote: {
			size: {
				mobile: "16px",
				desktop: "18px",
			},
			lineheight: {
				mobile: "1.5",
				desktop: "1.5",
			},
		},
	},
};

export { theme };`;

function Index({ posts = [] }) {
	return (
		<Page title="Emotion Theme">
			<Space xs={20} lg={40} />
			<H1 size="hero1">Emotion Theme</H1>
			<Space xs={10} lg={30} />
			<p>
				The theme is where all the main values of the design system are
				defined. You can find your Emotion Theme in{" "}
				<strong>theme.js</strong>.
			</p>
			<Space size={10} />
			<CodeBlock language="jsx" value={themeCode} />
			<Space size={20} />
			<DocNavWrapper>
				<DocNav
					href="/docs/code/react-components/breakpoints"
					as="/docs/code/react-components/breakpoints"
					prev
				>
					Emotion Breakpoints
				</DocNav>
				<DocNav href="/docs/scale" as="/docs/scale" next>
					Scale Introduction
				</DocNav>
			</DocNavWrapper>
		</Page>
	);
}

export default Index;
