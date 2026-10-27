import { CategoryPath } from "@/components/category-path";
import { ContactSection } from "@/components/contact-section";
import { ExpertTeam } from "@/components/expert-team";
import { FeaturedCourses } from "@/components/featured-courses";
import { FreeLessons } from "@/components/free-lessons";
import { Hero } from "@/components/hero";
import { NoticeBoard } from "@/components/notice-board";
import { PlatformLoop } from "@/components/platform-loop";
import { Results } from "@/components/results";
import { StepsSection } from "@/components/steps-section";
import { Testimonials } from "@/components/testimonials";
import { StackScroller } from "@/components/stack-scroller";

export default function HomePage() {
  return (
    <StackScroller>
      <Hero />
      <StepsSection />
      <CategoryPath />
      <NoticeBoard />
      <PlatformLoop />
      <FeaturedCourses />
      <Results />
      <ExpertTeam />
      <Testimonials />
      <FreeLessons />
      <ContactSection />
    </StackScroller>
  );
}
