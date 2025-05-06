
import { useState, useEffect } from 'react';

const PropertyGrid = () => {
  const properties = [
    { id: 1, name: "Gateway Office Tower", type: "Office", sqft: "12,500", price: "$4,250,000" },
    { id: 2, name: "Riverfront Retail", type: "Retail", sqft: "8,200", price: "$2,100,000" },
    { id: 3, name: "Industrial Park Warehouse", type: "Industrial", sqft: "25,000", price: "$3,800,000" },
    { id: 4, name: "Downtown Mixed-Use", type: "Mixed-Use", sqft: "18,750", price: "$6,500,000" },
    { id: 5, name: "Westside Office Plaza", type: "Office", sqft: "15,300", price: "$5,100,000" },
    { id: 6, name: "Eastgate Shopping Center", type: "Retail", sqft: "22,400", price: "$7,200,000" }
  ];
  
  const [selectedProperty, setSelectedProperty] = useState<number | null>(null);
  const [showOM, setShowOM] = useState(false);
  const [showTransformedOM, setShowTransformedOM] = useState(false);
  
  useEffect(() => {
    // Auto-run the demo
    const demoSequence = async () => {
      // Step 1: Select property
      await new Promise(r => setTimeout(r, 1500));
      setSelectedProperty(4); // Select Downtown Mixed-Use
      
      // Step 2: Show original OM
      await new Promise(r => setTimeout(r, 1500));
      setShowOM(true);
      
      // Step 3: Transform the OM
      await new Promise(r => setTimeout(r, 2000));
      setShowTransformedOM(true);
      
      // Reset after delay
      await new Promise(r => setTimeout(r, 4000));
      setSelectedProperty(null);
      setShowOM(false);
      setShowTransformedOM(false);
    };
    
    demoSequence();
    
    // Loop the demo
    const interval = setInterval(() => {
      demoSequence();
    }, 10000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="min-h-[500px] w-full relative">
      <div className="mb-6 flex justify-between items-center">
        <h3 className="font-semibold text-lg text-white">Available Properties</h3>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-white/60">Filter:</span>
          <select className="bg-secondary/60 text-white text-sm rounded px-2 py-1 border border-blue-light/30">
            <option>All Property Types</option>
            <option>Office</option>
            <option>Retail</option>
            <option>Industrial</option>
            <option>Mixed-Use</option>
          </select>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {properties.map(property => (
          <div
            key={property.id}
            className={`border rounded-lg overflow-hidden transition-all duration-300 cursor-pointer ${
              selectedProperty === property.id 
                ? 'border-highlight shadow-lg shadow-highlight/20 scale-105 bg-secondary/60' 
                : 'border-secondary bg-secondary/20 hover:border-blue-light/50'
            }`}
            onClick={() => setSelectedProperty(property.id)}
          >
            <div className="p-4">
              <div className="flex justify-between mb-2">
                <span className={`text-xs px-2 py-1 rounded ${
                  property.type === 'Office' ? 'bg-blue-light/20 text-blue-light' :
                  property.type === 'Retail' ? 'bg-green-500/20 text-green-400' :
                  property.type === 'Industrial' ? 'bg-amber-500/20 text-amber-400' :
                  'bg-purple-500/20 text-purple-400'
                }`}>
                  {property.type}
                </span>
                <span className="text-white/60 text-sm">{property.sqft} sqft</span>
              </div>
              <h4 className="font-medium mb-2">{property.name}</h4>
              <p className="text-gradient font-semibold">{property.price}</p>
            </div>
          </div>
        ))}
      </div>
      
      {showOM && (
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[70%] h-[60%] bg-white/10 backdrop-blur-lg rounded-lg shadow-xl border border-white/20 p-6 transition-opacity duration-500 ${showOM ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="font-bold text-xl">Offering Memorandum</h3>
              <p className="text-white/60">Downtown Mixed-Use Property</p>
            </div>
            <div className="px-3 py-1 bg-gray-600/50 text-white/80 text-sm rounded">Generic Template</div>
          </div>
          
          <div className="bg-secondary/40 h-[calc(100%-60px)] overflow-hidden rounded relative">
            <div className="absolute inset-0 flex items-center justify-center">
              {showTransformedOM ? (
                <div className="text-center transform scale-100 transition-all duration-700 ease-out">
                  <div className="animate-pulse-blue w-20 h-20 rounded-full bg-highlight/20 mx-auto mb-4 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-highlight flex items-center justify-center">
                      <span className="text-blue-dark font-bold">✓</span>
                    </div>
                  </div>
                  <h3 className="text-gradient font-bold text-2xl mb-2">Transformation Complete</h3>
                  <p className="text-white/70">Your branded OM is ready to send</p>
                </div>
              ) : (
                <div className="text-center transform scale-100">
                  <div className="relative w-20 h-20 mx-auto mb-6">
                    <div className="absolute inset-0 rounded-full border-4 border-blue-light/30"></div>
                    <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-highlight animate-spin"></div>
                  </div>
                  <p className="text-white/70">Transforming document to your brand...</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const PropertySearchDemo = () => {
  return (
    <section id="demo" className="section bg-grid">
      <div className="container mx-auto z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gradient">Property Search</span> & Transformation
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            See how our AI finds the perfect property matches and transforms generic documents into your branded materials
          </p>
        </div>
        
        <div className="card-glow p-6 md:p-10">
          <PropertyGrid />
        </div>
      </div>
    </section>
  );
};

export default PropertySearchDemo;
