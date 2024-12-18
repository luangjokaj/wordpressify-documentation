import React from "react";
import { Metadata } from "next";
import { OG_IMAGE, PAGE_DESCRIPTION } from "@/app/utils/constants";
import { Home as HomePage } from "@/app/components/pages/home";

export const metadata: Metadata = {
  title: "WordPressify - Turbocharged WordPress Development",
  description: PAGE_DESCRIPTION,
  openGraph: {
    title: "WordPressify - Turbocharged WordPress Development",
    description: PAGE_DESCRIPTION,
    type: "website",
    url: "https://wordpressify.co/",
    images: OG_IMAGE,
  },
};

export default function Home() {
  return <HomePage />;
}
