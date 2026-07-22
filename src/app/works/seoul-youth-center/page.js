import CaseStudyPage from "@/components/case-study/CaseStudyPage";
import { caseStudyBySlug } from "@/data/caseStudies";

const study = caseStudyBySlug["seoul-youth-center"];

export const metadata = study.metadata;

export default function SeoulYouthCenterCaseStudy() {
  return <CaseStudyPage study={study} />;
}
