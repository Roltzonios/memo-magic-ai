
import { Card, CardContent } from "@/components/ui/card";

const FeatureCard = ({ icon, title, description }: { icon: string, title: string, description: string }) => (
  <Card className="card-glow h-full">
    <CardContent className="p-6 flex flex-col items-center text-center h-full">
      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue to-highlight/50 flex items-center justify-center mb-6 animate-bounce-light">
        <span className="text-3xl text-white">{icon}</span>
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gradient">{title}</h3>
      <p className="text-white/70">{description}</p>
    </CardContent>
  </Card>
);

const Features = () => {
  const features = [
    {
      icon: "🔍",
      title: "Smart Property Matching",
      description: "AI monitors inquiries and instantly matches properties based on specific requirements and preferences."
    },
    {
      icon: "📄",
      title: "Automated OM Extraction",
      description: "Extract offering memorandums from various sources with our intelligent document parsing technology."
    },
    {
      icon: "✨",
      title: "Brand Transformation",
      description: "Seamlessly convert external OMs to your branded templates without manual formatting."
    },
    {
      icon: "📊",
      title: "Data Intelligence",
      description: "Analyze property data and create meaningful insights to help close deals faster."
    }
  ];
  
  return (
    <section id="features" className="section bg-grid">
      <div className="container mx-auto z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Revolutionize Your <span className="text-gradient">Real Estate</span> Business
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Our suite of AI-powered features saves you hours of manual work and helps you focus on what matters most - closing deals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="opacity-0 animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
      </div>
      
      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-blue-dark to-transparent" />
    </section>
  );
};

export default Features;
