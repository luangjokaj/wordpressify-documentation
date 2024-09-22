import { Inter } from "next/font/google";
import { StyledComponentsRegistry } from "cherry-styled-components/src/lib";
import { Header } from "@/app/components/header";
import { MinHeight } from "@/app/components/min-height";
import { theme, themeDark } from "@/app/theme";
import { CherryThemeProvider } from "@/app/components/theme-provider";
import { CSPostHogProvider } from "@/app/components/posthost-provider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <CherryThemeProvider theme={theme} themeDark={themeDark}>
            <CSPostHogProvider>
              <MinHeight>
                <Header />
                {children}
              </MinHeight>
            </CSPostHogProvider>
          </CherryThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
