import { Inter } from "next/font/google";
import { Header } from "@/app/components/header";
import { MinHeight } from "@/app/components/min-height";
import { StyledComponentsRegistry } from "cherry-styled-components/src/lib";
import { theme, themeDark } from "@/app/theme";
import Script from "next/script";
import { CherryThemeProvider } from "@/app/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

const FAVICON_VERSION = 1;

function v(href: string) {
  return `${href}?v=${FAVICON_VERSION}`;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-97SYLMSZTX" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-97SYLMSZTX');`,
          }}
        ></script>
        <link rel="apple-touch-icon" sizes="180x180" href={v("/favicons/apple-touch-icon.png")} />
        <link rel="icon" type="image/png" sizes="32x32" href={v("/favicons/favicon-32x32.png")} />
        <link rel="icon" type="image/png" sizes="16x16" href={v("/favicons/favicon-16x16.png")} />
        <link rel="manifest" href={v("/favicons/site.webmanifest")} />
        <link rel="mask-icon" href={v("/favicons/safari-pinned-tab.svg")} color="#ffffff" />
        <link rel="shortcut icon" href={v("/favicons/favicon.ico")} />
        <meta name="apple-mobile-web-app-title" content="WordPressify" />
        <meta name="application-name" content="WordPressify" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <CherryThemeProvider theme={theme} themeDark={themeDark}>
            <MinHeight>
              <Header />
              {children}
            </MinHeight>
          </CherryThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
