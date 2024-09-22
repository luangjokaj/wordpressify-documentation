import { Container } from "cherry-styled-components/src/lib";
import { OG_IMAGE } from "../utils/constants";

export const metadata = {
  title: "Error - WordPressify",
  openGraph: {
    title: "Error - WordPressify",
    images: OG_IMAGE,
  },
};

export default function ErrorPage() {
  return <Container>Sorry, something went wrong!</Container>;
}
