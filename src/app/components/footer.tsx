"use client";
import React from "react";
import styled from "styled-components";
import { rgba } from "polished";
import Link from "next/link";
import {
  mq,
  styledSmall,
  styledText,
  Col,
  Container,
  Flex,
  Grid,
  Space,
} from "cherry-styled-components/src/lib";
import { IconLink } from "@/app/components/icon-link";
import { usePathname } from "next/navigation";
import { IconWordPressify, IconDribbble, IconThreads } from "./icons";
import { Theme } from "cherry-styled-components/src/lib";

const StyledFooter = styled.footer<{ theme: Theme }>`
  background: ${({ theme }) =>
    theme.isDark ? rgba(theme.colors.grayLight, 0.5) : rgba(theme.colors.grayLight, 0.3)};
  margin-top: 60px;
`;

const StyledParagraph = styled.p<{
  theme: Theme;
  $align: "left" | "right" | "center";
}>`
  margin: auto 0;
  color: ${({ theme }) => theme.colors.grayDark};
  text-align: center;
  ${({ theme }) => styledText(theme)};

  ${mq("lg")} {
    text-align: ${({ $align }) => $align};
  }

  & a {
    color: ${({ theme }) => theme.colors.primary};
    transition: all 0.3s ease;
    text-decoration: none;
    font-weight: 700;

    @media (hover: hover) {
      &:hover {
        color: ${({ theme }) =>
          theme.isDark ? theme.colors.primaryLight : theme.colors.primaryDark};
      }
    }
  }
`;

const StyledLinkWrapper = styled.span<{ theme: Theme }>`
  margin: auto;

  ${mq("lg")} {
    margin: 0;
  }
`;

const StyledLink = styled(Link)<{ theme: Theme }>`
  transition: all 0.3s ease;
  display: inline-block;
  margin: auto;
  color: ${({ theme }) => theme.colors.primary};

  ${mq("lg")} {
    margin: auto 0;
  }

  & .logo {
    width: 208px;
    height: auto;
  }

  & img,
  & svg path {
    transition: all 0.3s ease;
  }

  &:active {
    & svg,
    & img {
      transform: scale(0.95);
    }
  }
`;

const StyledHr = styled.hr<{ theme: Theme }>`
  margin: 0;
  border: none;
  height: 1px;
  width: 100%;
  background: ${({ theme }) =>
    theme.isDark ? theme.colors.grayLight : rgba(theme.colors.grayLight, 1)};
`;

function Footer() {
  const year = new Date().getFullYear();
  return (
    <StyledFooter>
      <Container $lgPadding={20}>
        <Space $size={40} />
        <Grid $xsCols={1} $lgCols={2}>
          <StyledParagraph $align="left">
            Designed and developed by{" "}
            <a href="https://www.riangle.com/?ref=wordpressify.co" target="_blank">
              Riangle
            </a>
            <br />
            WordPress hosting by{" "}
            <a href="https://www.hostbox.me/?ref=wordpressify.co" target="_blank">
              Hostbox
            </a>
            .<br />
            Created by{" "}
            <a href="https://www.threads.net/@luangjokaj?ref=wordpressify.co" target="_blank">
              Luan Gjokaj
            </a>
            .
          </StyledParagraph>
          <Flex $xsJustifyContent="center" $lgJustifyContent="flex-end">
            <Space $xs={20} $lg="none" />
            <IconLink
              href="https://www.threads.net/@luangjokaj?ref=wordpressify.co"
              $bgColor="#000000"
              $label="Threads"
            >
              <IconThreads />
            </IconLink>
            <IconLink
              href="https://dribbble.com/luangjokaj?ref=wordpressify.co"
              $bgColor="#EA4C89"
              $label="Dribbble"
            >
              <IconDribbble />
            </IconLink>
          </Flex>
        </Grid>
        <Space $size={40} />
        <StyledHr />
        <Space $size={40} />
        <Grid $xsCols={1} $lgCols={2}>
          <StyledLinkWrapper>
            <StyledLink href="/" aria-label="WordPressify Logo">
              <IconWordPressify className="logo" />
            </StyledLink>
          </StyledLinkWrapper>
          <StyledParagraph $align="right">
            Copyright © {year} WordPressify. All rights reserved.
          </StyledParagraph>
        </Grid>
        <Space $size={40} />
      </Container>
    </StyledFooter>
  );
}

function DocsFooter() {
  const year = new Date().getFullYear();
  const StyledFooter = styled.footer<{ theme: Theme }>`
    border-top: 1px solid ${({ theme }) => theme.colors.grayLight};
    margin-top: 20px;
    padding: 20px 0 0;
    position: relative;
    z-index: 1;
    ${({ theme }) => styledSmall(theme)};

    ${mq("lg")} {
      margin-top: 40px;
      padding: 40px 0 0;
    }
  `;
  const StyledParagraph = styled.p<{ theme: Theme }>`
    color: ${({ theme }) => (theme.isDark ? theme.colors.grayDark : theme.colors.gray)};
  `;
  const StyledLink = styled.a<{ theme: Theme }>`
    font-weight: 500;
    text-decoration: none;
    color: ${({ theme }) => (theme.isDark ? theme.colors.dark : theme.colors.primary)};
    transition: all 0.3s ease;

    @media (hover: hover) {
      &:hover {
        color: ${({ theme }) =>
          theme.isDark ? theme.colors.primaryLight : theme.colors.primaryDark};
      }
    }

    ${mq("lg")} {
      text-align: right;
    }
  `;

  return (
    <StyledFooter>
      <Grid $xsCols={1} $lgCols={3}>
        <Col $lgSpan={2}>
          <StyledParagraph>Copyright © {year} WordPressify. All rights reserved.</StyledParagraph>
        </Col>
        <StyledLink
          href={`https://github.com/luangjokaj/wordpressify-documentation/edit/main/src/app${usePathname()}/page.mdx`}
          target="_blank"
        >
          Edit this page on GitHub
        </StyledLink>
      </Grid>
    </StyledFooter>
  );
}

export { Footer, DocsFooter };
