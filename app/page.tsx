import Nav from "@/components/layout/Nav";
import Hero from "@/components/features/Hero";
import About from "@/components/features/About";
import Ventures from "@/components/features/Ventures";
import PitchDecks from "@/components/features/PitchDecks";
import SocialProof from "@/components/features/SocialProof";
import Vision from "@/components/features/Vision";
import Contact from "@/components/features/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <About />
      <Ventures />
      <PitchDecks />
      <SocialProof />
      <Vision />
      <Contact />
      <Footer />
    </main>
  );
}
