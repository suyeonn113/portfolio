import CaseStudyPage from "@/components/case-study/CaseStudyPage";
import { caseStudyBySlug } from "@/data/caseStudies";

const study = caseStudyBySlug["air-seoul"];

export const metadata = study.metadata;

export default function AirSeoulCaseStudy() {
  return <CaseStudyPage study={study} />;
}
