import CaseStudyPage from "@/components/case-study/CaseStudyPage";
import DaisomallContent, {
  DaisomallHero,
} from "@/components/case-study/DaisomallCaseStudy";
import { caseStudyBySlug } from "@/data/caseStudies";

const study = caseStudyBySlug.daisomall;

export const metadata = study.metadata;

export default function DaisomallCaseStudy() {
  return (
    <CaseStudyPage study={study} heroContent={<DaisomallHero />}>
      <DaisomallContent />
    </CaseStudyPage>
  );
}
