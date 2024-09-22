"use client";
import { DocSearch } from "@docsearch/react";
import "@docsearch/css";

function Search() {
  return (
    <DocSearch
      appId="U06HTN08M5"
      indexName="wordpressify"
      apiKey="ba578a752d4a5fd93c5aefba378d6a9d"
    />
  );
}

export { Search };
