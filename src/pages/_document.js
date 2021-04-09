import React from "react";
import Document, {
	Html,
	Head,
	Main,
	NextScript,
	DocumentContext,
} from "next/document";

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					{process.env.DISABLE_GTM === "false" && (
						<script
							dangerouslySetInnerHTML={{
								__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
								new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
								j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
								'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
								})(window,document,'script','dataLayer','GTM-5FQZPCC');`,
							}}
						></script>
					)}
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
						media="print"
						onLoad="this.media='all'"
					/>
					<noscript>
						<link
							rel="stylesheet"
							href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
						/>
					</noscript>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
