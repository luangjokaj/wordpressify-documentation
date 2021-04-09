import { useRouter, Router } from "next/router";
import NProgress from "nprogress";
import { ThemeProvider } from "@emotion/react";
import { Col, Container, MinHeight, Row } from "cherry-components";
import { globalStyles } from "../assets/styles/globalStyles";
import { theme } from "../assets/styles/theme";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { Sidebar } from "../components/Sidebar";
import { ScrollToTop } from "../components/ScrollToTop";

NProgress.configure({ parent: "#header-inner" });
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function App({ Component, pageProps }) {
	const router = useRouter();
	return (
		<>
			{globalStyles}
			<ThemeProvider theme={theme}>
				<ScrollToTop>
					<Header />
					<MinHeight theme={theme}>
						{router.pathname.includes("/docs") ? (
							<Container theme={theme} fluid>
								<Row
									alignItems="flex-start"
									gutterLg="medium"
									gutterXl="medium"
									gutterXxl="medium"
									gutterXxl="medium"
									gutterXxxl="medium"
								>
									<Col xs={12} lg={3} sticky theme={theme}>
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
		</>
	);
}

export default App;
