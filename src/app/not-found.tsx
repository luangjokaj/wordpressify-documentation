import React from "react";
import { Metadata } from "next";
import { OG_IMAGE, PAGE_DESCRIPTION } from "@/app/utils/constants";
import { NotFound } from "@/app/components/pages/404";

export const metadata: Metadata = {
  title: "404 Not Found - WordPressify",
  description: PAGE_DESCRIPTION,
  openGraph: {
    title: "404 Not Found - WordPressify",
    description: PAGE_DESCRIPTION,
    type: "website",
    url: "https://wordpressify.co",
    images: OG_IMAGE,
  },
};

export default function Home() {
  return <NotFound />;
}
