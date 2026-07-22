import CaseStudyPage from "@/components/case-study/CaseStudyPage";
import { caseStudyBySlug } from "@/data/caseStudies";

const study = caseStudyBySlug.fragfarm;

export const metadata = study.metadata;

export default function FragfarmCaseStudy() {
  return <CaseStudyPage study={study} />;
}
