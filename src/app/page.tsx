import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import TestimonialCard from "@/components/TestimonialCard";
import UpcommingWebinar from "@/components/UpcommingWebinar";
import WhyUs from "@/components/WhyUs"


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased  bg-grid-white/[0.02] text-center">
      <HeroSection/>
      <FeaturedCourses/>
      <WhyUs/>
      <TestimonialCard/>
      <UpcommingWebinar/>
      <Instructors/>
    </main>
  );
}
