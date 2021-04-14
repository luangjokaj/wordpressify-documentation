import React from "react";
import { useTheme } from "@emotion/react";
import { themeSwitcherStyles } from "./ThemeSwitcher.styles";
import { Sun } from "../../assets/svg/Sun";
import { Moon } from "../../assets/svg/Moon";
import { themeDark } from "../../assets/styles/theme-dark";
import { theme as themeLight } from "../../assets/styles/theme";

function ThemeSwitcher({ setTheme }) {
	const theme = useTheme();
	return (
		<button
			css={(theme) => themeSwitcherStyles(theme)}
			onClick={() => {
				if (theme.isDark) {
					setTheme(themeLight);
					localStorage.theme = "light";
				} else {
					setTheme(themeDark);
					localStorage.theme = "dark";
				}
			}}
			title={
				theme.isDark ? "Switch to light mode" : "Switch to dark mode"
			}
		>
			<Sun />
			<Moon />
		</button>
	);
}

export { ThemeSwitcher };
