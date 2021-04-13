import { useEffect, useState } from "react";
import { useRouter, Router } from "next/router";
import Head from "next/head";
import NProgress from "nprogress";
import { ThemeProvider } from "@emotion/react";
import { Col, Container, MinHeight, Row } from "cherry-components";
import { globalStyles } from "../assets/styles/globalStyles";
import { themeDark } from "../assets/styles/theme-dark";
import { theme } from "../assets/styles/theme";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { Sidebar } from "../components/Sidebar";
import { ScrollToTop } from "../components/ScrollToTop";
import { ThemeSwitcher } from "../components/ThemeSwitcher/ThemeSwitcher";

NProgress.configure({ parent: "#header-inner" });
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function App({ Component, pageProps }) {
	const router = useRouter();
	const [isLoaded, setIsLoaded] = useState(false);
	const [currentTheme, setCurrentTheme] = useState(theme);

	useEffect(() => {
		setIsLoaded(true);
		if (
			localStorage.theme === "dark" ||
			(!("theme" in localStorage) &&
				window.matchMedia("(prefers-color-scheme: dark)").matches)
		) {
			document.documentElement.classList.add("dark");
			setCurrentTheme(themeDark);
		} else {
			document.documentElement.classList.remove("dark");
			setCurrentTheme(theme);
		}
	}, []);
	return (
		<ThemeProvider theme={currentTheme}>
			{globalStyles}
			<Head>
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="true"
				/>
				<link
					rel="preload"
					as="style"
					href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
				/>
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
					media={isLoaded ? "all" : "print"}
				/>
				<noscript>
					<link
						rel="stylesheet"
						href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
					/>
				</noscript>
			</Head>
			<ScrollToTop>
				<Header
					themeSwitcher={<ThemeSwitcher setTheme={setCurrentTheme} />}
				/>
				<MinHeight theme={currentTheme}>
					{router.pathname.includes("/docs") ? (
						<Container theme={currentTheme} fluid>
							<Row alignItems="flex-start" gutterLg="medium">
								<Col xs={12} lg={3} sticky theme={currentTheme}>
									<Sidebar />
								</Col>
								<Col xs={12} lg={9} id="doc-content">
									<Component {...pageProps} />
								</Col>
							</Row>
						</Container>
					) : (
						<Component {...pageProps} />
					)}
				</MinHeight>
				<Footer />
			</ScrollToTop>
		</ThemeProvider>
	);
}

export default App;
