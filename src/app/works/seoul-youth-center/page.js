import CaseStudyPage from "@/components/case-study/CaseStudyPage";
import SeoulYouthCenterContent, {
  SeoulYouthCenterHero,
} from "@/components/case-study/SeoulYouthCenterCaseStudy";
import { caseStudyBySlug } from "@/data/caseStudies";

const study = caseStudyBySlug["seoul-youth-center"];

export const metadata = study.metadata;

export default function SeoulYouthCenterCaseStudy() {
  return (
    <CaseStudyPage study={study} heroContent={<SeoulYouthCenterHero />}>
      <SeoulYouthCenterContent />
    </CaseStudyPage>
  );
}
