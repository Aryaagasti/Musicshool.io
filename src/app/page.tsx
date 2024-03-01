import HeroSection from "@/components/HeroSection";
import FeaturedCourses from "@/components/FeaturedCourses";
import Image from "next/image";
import WhyChooseUs from "@/components/WhyChooseUs";
import MovingCards from "@/components/MovingCards";
import UpcomingWebinars from "../components/UpcomingWebinars";
import Instructor from "@/components/Instructor";
import Footer from "@/components/Footer";


export default function Home() {
  return (
   <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
    <HeroSection/>
    <FeaturedCourses/>
    <WhyChooseUs />
    <MovingCards />
    <UpcomingWebinars />
    <Instructor/>
    <Footer/>
   </main>
  );
}
