
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="hero" className="section pt-32 bg-grid">
      <div className="floating-particles">
        {[...Array(8)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-blue-light/20 animate-particle-float"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: 0.2
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto text-center z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
          <span className="text-gradient">Automate</span> Your <br/>
          Commercial Real Estate Workflow
        </h1>
        
        <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-10">
          Our <span className="text-gradient font-medium">AI-powered platform</span> monitors inquiries, finds matching properties, extracts and transforms offering memorandums instantly.
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Button className="btn-primary text-base px-8 py-6">Get Started Now</Button>
          <Button variant="outline" className="text-base border-blue-light/50 text-white hover:bg-blue-light/10 px-8 py-6">
            See How It Works
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-blue-dark to-transparent" />
    </section>
  );
};

export default Hero;
