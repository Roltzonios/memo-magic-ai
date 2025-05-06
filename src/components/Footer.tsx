
const Footer = () => {
  return (
    <footer className="bg-blue-dark py-12 border-t border-blue-light/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-light to-highlight flex items-center justify-center">
                <span className="text-white font-bold">P</span>
              </div>
              <span className="font-bold text-lg text-gradient">PropAI</span>
            </div>
            <p className="text-white/60 text-sm mb-4">
              Automating commercial real estate workflows with powerful AI
            </p>
            <div className="flex space-x-4">
              {["Twitter", "LinkedIn", "Facebook"].map(social => (
                <a key={social} href="#" className="text-white/60 hover:text-highlight text-sm">{social}</a>
              ))}
            </div>
          </div>
          
          {[
            {
              title: "Product",
              links: ["Features", "Pricing", "Case Studies", "API"]
            },
            {
              title: "Company",
              links: ["About", "Team", "Careers", "Press"]
            },
            {
              title: "Resources",
              links: ["Blog", "Documentation", "Support", "Contact"]
            }
          ].map((column, i) => (
            <div key={i}>
              <h3 className="font-semibold mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map(link => (
                  <li key={link}>
                    <a href="#" className="text-white/60 hover:text-highlight text-sm">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-12 pt-6 border-t border-blue-light/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/40 text-sm">© {new Date().getFullYear()} PropAI. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(item => (
              <a key={item} href="#" className="text-white/40 hover:text-highlight text-sm">{item}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
