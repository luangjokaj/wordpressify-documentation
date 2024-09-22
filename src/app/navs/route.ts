import {
  docsOtherNav,
  docsProductionNav,
  docsBuildUtilitiesNav,
  docsCustomizationNav,
  docsIntroNav,
} from "./documentation";

export async function GET(request: Request) {
  const docsNav = [
    ...docsIntroNav,
    ...docsCustomizationNav,
    ...docsBuildUtilitiesNav,
    ...docsProductionNav,
    ...docsOtherNav,
  ];
  return Response.json(docsNav);
}
