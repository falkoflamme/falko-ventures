import Nav from "@/components/layout/Nav";
import Hero from "@/components/features/Hero";
import About from "@/components/features/About";
import AIThesis from "@/components/features/AIThesis";
import Ventures from "@/components/features/Ventures";
import SocialProof from "@/components/features/SocialProof";
import Numbers from "@/components/features/Numbers";
import Calculator from "@/components/features/Calculator";
import ShippedFeed from "@/components/features/ShippedFeed";
import Pipeline from "@/components/features/Pipeline";
import Vision from "@/components/features/Vision";
import Contact from "@/components/features/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <About />
      <AIThesis />
      <Ventures />
      <SocialProof />
      <Numbers />
      <Calculator />
      <ShippedFeed />
      <Pipeline />
      <Vision />
      <Contact />
      <Footer />
    </main>
  );
}
