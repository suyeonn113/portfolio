import Footer from "@/components/layout/Footer/Footer";
import Header from "@/components/layout/Header/Header";
import Hero from "@/components/sections/Hero/Hero";
import ProjectSlider from "@/components/sections/ProjectSlider/ProjectSlider";
import SelectedWorks from "@/components/sections/SelectedWorks/SelectedWorks";
import Strengths from "@/components/sections/Strengths/Strengths";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <ProjectSlider />
        <Strengths />
        <SelectedWorks />
      </main>
      <Footer />
    </>
  );
}
