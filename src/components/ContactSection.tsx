
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  return (
    <section id="contact" className="section pb-32 bg-grid">
      <div className="container mx-auto z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to <span className="text-gradient">Transform</span> Your Business?
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Get in touch with our team to see how our AI platform can save you hours of work and help you close more deals
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="card-glow p-6 md:p-10">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-white/70">Full Name</label>
                  <Input 
                    placeholder="Your name" 
                    className="bg-secondary/60 border-blue-light/30 focus:border-highlight" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-white/70">Email Address</label>
                  <Input 
                    type="email"
                    placeholder="your@email.com" 
                    className="bg-secondary/60 border-blue-light/30 focus:border-highlight" 
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm text-white/70">Company</label>
                <Input 
                  placeholder="Your company name" 
                  className="bg-secondary/60 border-blue-light/30 focus:border-highlight" 
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm text-white/70">Message</label>
                <Textarea 
                  placeholder="Tell us about your needs..." 
                  className="bg-secondary/60 border-blue-light/30 focus:border-highlight min-h-[120px]" 
                />
              </div>
              
              <Button className="w-full btn-primary py-6">Request a Demo</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
