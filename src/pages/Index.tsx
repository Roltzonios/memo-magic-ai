
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import WorkflowDemo from "@/components/WorkflowDemo";
import PropertySearchDemo from "@/components/PropertySearchDemo";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import BackgroundParticles from "@/components/BackgroundParticles";

const Index = () => {
  return (
    <div className="min-h-screen bg-blue-dark text-white overflow-hidden">
      <BackgroundParticles />
      <Navbar />
      
      <main>
        <Hero />
        <Features />
        <WorkflowDemo />
        <PropertySearchDemo />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
