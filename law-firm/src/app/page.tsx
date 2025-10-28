import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Differentiators } from "@/components/Differentiators";
import { PracticeAreas } from "@/components/PracticeAreas";
import { Attorneys } from "@/components/Attorneys";
import { Testimonials } from "@/components/Testimonials";
import { Insights } from "@/components/Insights";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main className="flex flex-col">
        <Hero />
        <Differentiators />
        <PracticeAreas />
        <Attorneys />
        <Testimonials />
        <Insights />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
