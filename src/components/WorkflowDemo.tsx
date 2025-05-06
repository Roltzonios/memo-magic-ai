
import { useState, useEffect } from 'react';

const Step = ({ 
  step, 
  title, 
  description, 
  active, 
  completed 
}: { 
  step: number, 
  title: string, 
  description: string, 
  active: boolean, 
  completed: boolean 
}) => {
  return (
    <div className={`relative flex items-start mb-8 ${active ? 'opacity-100' : 'opacity-60'}`}>
      <div className="mr-4 flex flex-col items-center">
        <div className={`h-10 w-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
          completed ? 'bg-highlight border-highlight' : active ? 'border-highlight' : 'border-white/30'
        }`}>
          <span className={`font-semibold ${completed ? 'text-blue-dark' : 'text-white'}`}>{step}</span>
        </div>
        {step < 4 && (
          <div className="w-0.5 h-16 bg-gradient-to-b from-highlight/80 to-transparent"></div>
        )}
      </div>
      <div className="flex-1">
        <h3 className="text-gradient font-semibold text-xl">{title}</h3>
        <p className="text-white/70">{description}</p>
      </div>
    </div>
  );
};

const WorkflowDemo = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const steps = [
    {
      title: "Receive Property Inquiry",
      description: "Client sends an email inquiry about properties like 123 Main Street"
    },
    {
      title: "Find Similar Properties",
      description: "AI automatically searches and identifies properties with similar characteristics"
    },
    {
      title: "Extract Property OMs",
      description: "System extracts offering memorandums from the matched properties"
    },
    {
      title: "Generate Branded Response",
      description: "Creates a professional response with your branded template and sends to client"
    }
  ];

  useEffect(() => {
    // Auto-progress through the demo
    const timer = setTimeout(() => {
      if (activeStep < steps.length) {
        setActiveStep(prev => prev + 1);
        if (activeStep > 0) {
          setCompletedSteps(prev => [...prev, activeStep - 1]);
        }
      } else {
        setActiveStep(0);
        setCompletedSteps([]);
      }
    }, 3000);
    
    return () => clearTimeout(timer);
  }, [activeStep, steps.length]);
  
  return (
    <section id="workflow" className="section bg-grid">
      <div className="container mx-auto z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Our <span className="text-gradient">AI Workflow</span> In Action
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            See how our powerful AI automates your entire commercial real estate response process
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="w-full lg:w-1/2">
            <div className="card-glow p-6 md:p-10">
              {steps.map((step, index) => (
                <Step
                  key={index}
                  step={index + 1}
                  title={step.title}
                  description={step.description}
                  active={index <= activeStep}
                  completed={completedSteps.includes(index)}
                />
              ))}
              
              <div className="w-full bg-white/10 h-3 rounded-full mt-6">
                <div 
                  className="h-full rounded-full bg-gradient-to-r from-blue to-highlight"
                  style={{ 
                    width: `${(activeStep / steps.length) * 100}%`,
                    transition: 'width 1s ease-out'
                  }}
                ></div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="card-glow p-6 md:p-10 h-full">
              <div className="relative">
                <div className="mb-6 text-left">
                  <div className="flex items-center mb-4">
                    <div className="h-10 w-10 rounded-full bg-blue-light/20 mr-3"></div>
                    <div>
                      <h3 className="font-medium text-white">Alex Thompson</h3>
                      <p className="text-sm text-white/60">Client</p>
                    </div>
                  </div>
                  <div className="bg-secondary/60 p-4 rounded-lg rounded-tl-none max-w-[80%]">
                    <p className="text-white/80">
                      I'm interested in commercial properties similar to 123 Main Street. Do you have anything with comparable square footage and location?
                    </p>
                  </div>
                </div>
                
                {activeStep >= 1 && (
                  <div className="mb-6 text-right">
                    <div className="bg-gradient-to-r from-blue/40 to-highlight/40 p-4 rounded-lg rounded-tr-none ml-auto max-w-[80%]">
                      <p className="text-white/80">
                        <span className="font-semibold text-gradient">AI Assistant:</span> Searching for properties similar to 123 Main Street...
                        {activeStep >= 2 && (
                          <>
                            <br /><br />
                            <span className="text-gradient">Found 3 matching properties!</span>
                          </>
                        )}
                      </p>
                    </div>
                  </div>
                )}
                
                {activeStep >= 3 && (
                  <div className="mb-6 text-right">
                    <div className="bg-gradient-to-r from-blue/40 to-highlight/40 p-4 rounded-lg rounded-tr-none ml-auto max-w-[80%]">
                      <p className="text-white/80">
                        <span className="font-semibold text-gradient">AI Assistant:</span> Extracting offering memorandums...
                        <br /><br />
                        <span className="text-gradient">Converting to branded templates...</span>
                      </p>
                    </div>
                  </div>
                )}
                
                {activeStep >= 4 && (
                  <div className="text-right">
                    <div className="bg-gradient-to-r from-blue/40 to-highlight/40 p-4 rounded-lg rounded-tr-none ml-auto max-w-[80%]">
                      <p className="text-white/80">
                        <span className="font-semibold text-gradient">Draft Email Ready:</span>
                        <br /><br />
                        Dear Alex,
                        <br /><br />
                        Thank you for your inquiry. Based on your interest in 123 Main Street, I've found these comparable properties:
                        <br /><br />
                        1. 456 Market Avenue - 12,000 sq ft office space<br />
                        2. 789 Commerce Blvd - 10,500 sq ft retail space<br />
                        3. 321 Business Park - 15,000 sq ft mixed-use building
                        <br /><br />
                        I've attached the detailed offering memorandums for your review.
                      </p>
                      <div className="flex justify-end mt-3">
                        <span className="bg-highlight/20 text-highlight text-xs rounded px-2 py-1 border border-highlight/30">3 OMs Attached</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowDemo;
