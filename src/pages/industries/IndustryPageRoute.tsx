import { useParams } from "react-router-dom";
import { IndustryPage } from "@/components/industry/IndustryPage";
import { getIndustryPageConfig } from "@/data/industryPages";
import NotFound from "@/pages/NotFound";

export default function IndustryPageRoute() {
  const { slug } = useParams<{ slug: string }>();
  const config = slug ? getIndustryPageConfig(slug) : undefined;

  if (!config) {
    return <NotFound />;
  }

  return <IndustryPage config={config} />;
}
