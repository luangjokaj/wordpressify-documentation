"use client";
import React from "react";
import Image from "next/image";
import styled, { css } from "styled-components";
import {
  Theme,
  styledH1,
  styledH3,
  styledHero3,
  styledStrong,
  styledText,
  Container,
  Flex,
  Grid,
  MaxWidth,
  Space,
} from "cherry-styled-components/src/lib";
import { LinkButton } from "@/app/components/link-button";
import Content from "@/app/docs/snippets/demo.mdx";
import { IconLink } from "@/app/components/icon-link";
import { Footer } from "@/app/components/footer";
import { IconDiscord, IconGitHub, IconWordPress } from "@/app/components/icons";

export const gridDecoration = css`
  position: relative;
  display: block;

  &::before {
    content: "";
    display: block;
    position: absolute;
    width: 100vw;
    max-width: 100vw;
    background: url("/grid.svg") no-repeat center center;
    ${({ theme }) => theme.isDark && 'background: url("/grid-w.svg") no-repeat center center;'}

    z-index: 1;
    background-size: 100%;
    height: 357px;
    left: 50%;
    top: 50%;
    aspect-ratio: 1440 / 357;
    transform: translate(-50%, -50%);
    pointer-events: none;
  }
`;

const StyledIntro = styled.h1<{ theme: Theme }>`
  max-width: 900px;
  margin: auto;

  ${({ theme }) => styledHero3(theme)};

  ${gridDecoration};
`;

const GridDecoration = styled.span<{ theme: Theme }>`
  ${gridDecoration};

  &::before {
    transform: translate(-50%, -50%) rotate(180deg);
  }
`;

const StyledParagraph = styled.p<{ theme: Theme }>`
  max-width: 740px;
  margin: auto;
  ${({ theme }) => styledText(theme)};
`;

const StyledH2 = styled.h2<{ theme: Theme }>`
  max-width: 900px;
  margin: auto;
  ${({ theme }) => styledH3(theme)};
`;

interface TileProps {
  theme?: Theme;
  $variant: "primary" | "secondary" | "tertiary";
}

const Tile = styled.div<TileProps>`
  ${({ theme, $variant }) => $variant === "primary" && `background: ${theme.colors.primaryLight};`}
  ${({ theme, $variant }) =>
    $variant === "secondary" && `background: ${theme.colors.secondaryLight};`}
	${({ theme, $variant }) => $variant === "tertiary" && `background: ${theme.colors.tertiaryLight};`}
	padding: 20px;
  border-radius: ${({ theme }) => theme.spacing.radius.lg};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const TileImage = styled.div<{ theme: Theme }>`
  width: 93px;
  height: 93px;
  margin: 20px auto;
`;

const StyledStrong = styled.div<{ theme: Theme }>`
  display: block;
  font-weight: 700;
  ${({ theme }) => styledStrong(theme)};
  color: ${({ theme }) => theme.colors.dark};
`;
const TileContent = styled.div<{ theme: Theme }>`
  background: ${({ theme }) => theme.colors.light};
  padding: 20px;
  border-radius: ${({ theme }) => theme.spacing.radius.lg};
  text-align: left;
  flex-grow: 1;
`;

const StyledH3 = styled.h3<{ theme: Theme }>`
  max-width: 900px;
  margin: auto;
  ${({ theme }) => styledH1(theme)};
`;

const StyledBringOnTop = styled.span<{ theme: Theme }>`
  position: relative;
  z-index: 10;
`;

const StyledIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;

  & svg {
    height: 42px;
    width: auto;

    &:last-of-type {
      height: 46px;
    }
  }
`;

function Home() {
  return (
    <StyledBringOnTop>
      <Container $textAlign="center">
        <Space $size={40} />
        <StyledIntro>Turbocharged WordPress Development</StyledIntro>
        <Space $size={40} />
        <StyledParagraph>
          Your all-in-one solution for seamless WordPress development, providing preconfigured
          servers, auto-reload, and streamlined workflows in a single command.
        </StyledParagraph>
        <Space $size={40} />
        <LinkButton href="/docs">Get Started</LinkButton>
        <Space $size={80} />
        <StyledIconWrapper>
          <IconWordPress />
        </StyledIconWrapper>
        <Space $size={80} />
        <GridDecoration>
          <MaxWidth $xs={600}>
            <Content />
          </MaxWidth>
        </GridDecoration>
        <Space $size={100} />
        <MaxWidth $size={420}>
          <StyledH2>Streamline Your Development Experience</StyledH2>
        </MaxWidth>
        <Space $size={20} />
        <StyledParagraph>
          WordPressify is a robust build system meticulously crafted to automate your WordPress
          theme and plugin development. Our tool simplifies the development experience by seamlessly
          providing a pre-configured web server complete with a database. With zero manual
          configuration required, you can focus on creating exceptional WordPress solutions without
          the hassle of setup.
        </StyledParagraph>
        <Space $size={20} />
        <LinkButton href="/docs" $outline>
          Get Started
        </LinkButton>
        <Space $size={100} />
        <Grid $xsCols={1} $lgCols={3}>
          <Tile $variant="primary">
            <TileImage>
              <Image src="1-dev-server.svg" alt="Dev Serve Icon" width={72} height={72} />
            </TileImage>
            <TileContent>
              <StyledStrong>Development Server</StyledStrong>
              <Space $size={10} />
              <StyledParagraph>
                WordPressify PHP development server comes pre-configured with a database and
                automatic WordPress installation. Get started quickly and efficiently.
              </StyledParagraph>
            </TileContent>
          </Tile>
          <Tile $variant="secondary">
            <TileImage>
              <Image src="2-auto-reload.svg" alt="Auto Reload Icon" width={72} height={72} />
            </TileImage>
            <TileContent>
              <StyledStrong>Auto-Reload</StyledStrong>
              <Space $size={10} />
              <StyledParagraph>
                WordPressify diligently monitors all your modifications and triggers real-time
                browser refreshes. Maintain your focus and enhance productivity.
              </StyledParagraph>
            </TileContent>
          </Tile>
          <Tile $variant="tertiary">
            <TileImage>
              <Image src="3-cross-platform.svg" alt="Cross Platform Icon" width={72} height={72} />
            </TileImage>
            <TileContent>
              <StyledStrong>Cross Platform</StyledStrong>
              <Space $size={10} />
              <StyledParagraph>
                WordPressify relies on a single global dependency, Docker. It is compatible across
                multiple platforms, including macOS, Windows, and Linux.
              </StyledParagraph>
            </TileContent>
          </Tile>
          <Tile $variant="secondary">
            <TileImage>
              <Image src="4-styles.svg" alt="External Libraries Icon" width={72} height={72} />
            </TileImage>
            <TileContent>
              <StyledStrong>CSS Styles and JavaScript</StyledStrong>
              <Space $size={10} />
              <StyledParagraph>
                Process your CSS with PostCSS or Sass. Write modern ES6 JavaScript with Babel and
                use external libraries with ease, even from NPM.
              </StyledParagraph>
            </TileContent>
          </Tile>
          <Tile $variant="tertiary">
            <TileImage>
              <Image src="5-debugging.svg" alt="Debugging Icon" width={72} height={72} />
            </TileImage>
            <TileContent>
              <StyledStrong>Source Maps & Debugging</StyledStrong>
              <Space $size={10} />
              <StyledParagraph>
                WordPressify integrates Source Maps and provides a seamless debugging experience,
                for CSS and JavaScript. For PHP, you can utilize Xdebug to debug your code.
              </StyledParagraph>
            </TileContent>
          </Tile>
          <Tile $variant="primary">
            <TileImage>
              <Image src="6-prod.svg" alt="Production Icon" width={72} height={72} />
            </TileImage>
            <TileContent>
              <StyledStrong>Optimized Distribution Files</StyledStrong>
              <Space $size={10} />
              <StyledParagraph>
                WordPressify generates optimized production files for your WordPress theme. These
                files are minified and can be auto deployed to your WordPress site with GitHub
                Actions.
              </StyledParagraph>
            </TileContent>
          </Tile>
        </Grid>
        <Space $size={100} />
        <StyledH3>Join the community</StyledH3>
        <Space $size={40} />
        <StyledParagraph>
          Ready to be part of something great? Join our vibrant community! Connect with fellow
          designers and developers on Discord, star our GitHub repository, and engage in
          discussions.
        </StyledParagraph>
        <Space $size={100} />
        <Flex $justifyContent="center">
          <IconLink
            href="https://github.com/luangjokaj/wordpressify/?ref=wordpressify.co"
            $bgColor="#000000"
            $label="GitHub"
          >
            <IconGitHub />
          </IconLink>
          <IconLink
            href="https://discord.gg/gm8Mz5Pe8u?ref=wordpressify.co"
            $bgColor="#7289DA"
            $label="Discord"
          >
            <IconDiscord />
          </IconLink>
        </Flex>
        <Space $size={100} />
        <LinkButton href="/docs">Get Started</LinkButton>
        <Space $size={100} />
        <StyledH3>
          Looking for WordPress
          <br /> Web Hosting?
        </StyledH3>
        <Space $size={40} />
        <StyledParagraph>
          Hostbox delivers exceptional WordPress performance through their optimized hosting
          platform. By combining SSD storage, advanced server configurations, and powerful caching
          systems, they ensure websites load at blazing speeds. Their fine-tuned infrastructure is
          specifically designed for WordPress, allowing sites to achieve the rapid load times that
          keep visitors engaged and boost search rankings.
        </StyledParagraph>
        <Space $size={100} />
        <LinkButton href="https://www.hostbox.me/">Hostbox Web Hosting</LinkButton>
      </Container>
      <Footer />
    </StyledBringOnTop>
  );
}

export { Home };
