import { useEffect } from "react";
import { useRouter, Router } from "next/router";
import NProgress from "nprogress";
import { ThemeProvider, css } from "@emotion/react";
import { globalStyles } from "../assets/styles/globalStyles";
import { theme } from "../assets/styles/theme";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { Col, Container, MinHeight, Row } from "../components/Layout";
import { Sidebar } from "../components/Sidebar";
import { ScrollToTop } from "../components/ScrollToTop";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function App({ Component, pageProps }) {
	const router = useRouter();

	useEffect(() => {
		if (document.getElementById("doc-content")) {
			document.getElementById("doc-content").scroll(0, 0);
			window.scrollTo(0, 0);
		}
	}, [router]);

	return (
		<>
			{globalStyles}
			<ThemeProvider theme={theme}>
				<ScrollToTop>
					<Header />
					<MinHeight>
						{router.pathname.includes("/docs") ? (
							<Container fluid>
								<Row gutterLg="medium">
									<Col xs={12} lg={3} fullScreen>
										<Sidebar />
									</Col>
									<Col
										xs={12}
										lg={9}
										fullScreen
										id="doc-content"
									>
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
		</>
	);
}

export default App;
