"use client";

import React from "react";
import styled, { css, useTheme } from "styled-components";
import { Theme, styledHero2, styledText, Container, Space } from "cherry-styled-components/src/lib";
import { LinkButton } from "@/app/components/link-button";
import { gridDecoration } from "./home";

const StyledIntro = styled.h1<{ theme: Theme }>`
  max-width: 900px;
  margin: auto;

  ${({ theme }) => styledHero2(theme)};

  ${gridDecoration};
`;

const StyledParagraph = styled.p<{ theme: Theme }>`
  max-width: 700px;
  margin: auto;
  ${({ theme }) => styledText(theme)};
`;

const StyledBringOnTop = styled.span<{ theme: Theme }>`
  position: relative;
  z-index: 10;
`;

function NotFound() {
  const theme: Theme = useTheme() as Theme;
  return (
    <StyledBringOnTop>
      <Container $textAlign="center">
        <Space $size={40} />
        <StyledIntro>404 Not Found</StyledIntro>
        <Space $size={40} />
        <StyledParagraph>
          The page you are looking for is currently exploring a black hole. While we wait for it to
          return, why not enjoy some cosmic tunes or explore our docs like a star chart?
        </StyledParagraph>
        <Space $size={40} />
        <LinkButton href="/docs">Docs</LinkButton>
        <Space $size={100} />
      </Container>
    </StyledBringOnTop>
  );
}

export { NotFound };
