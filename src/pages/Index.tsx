
import { ArrowRight, Palette, Plane, Star, Users, Zap, Triangle, Circle, Square } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const services = [
    {
      icon: Plane,
      title: "Real Airline Liveries",
      description: "Authentic recreations of existing airline liveries with meticulous attention to detail and accuracy.",
      features: ["Historical accuracy", "HD textures", "Multiple variants"]
    },
    {
      icon: Palette,
      title: "Modified Base Liveries",
      description: "Pre-designed templates in Eurowhite, cheatline, or full-color styles that you can customize.",
      features: ["Template variety", "Easy customization", "Quick turnaround"]
    },
    {
      icon: Zap,
      title: "Fully Custom Liveries",
      description: "Completely original designs created from scratch based on your vision and branding.",
      features: ["Unique designs", "Brand integration", "Unlimited revisions"]
    }
  ];

  const portfolio = [
    {
      title: "Lufthansa A350-900",
      category: "Real Airline Livery",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=400&fit=crop"
    },
    {
      title: "Custom Corporate Jet",
      category: "Fully Custom Design",
      image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=600&h=400&fit=crop"
    },
    {
      title: "Emirates Boeing 777",
      category: "Real Airline Livery",
      image: "https://images.unsplash.com/photo-1583500178516-e9ddb9be5014?w=600&h=400&fit=crop"
    },
    {
      title: "Eurowhite Base Template",
      category: "Modified Base Livery",
      image: "https://images.unsplash.com/photo-1569629186997-d749c6d8c3f4?w=600&h=400&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Chaotic Geometric Background */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Rotating geometric shapes */}
        <div className="absolute top-[10%] left-[5%] w-32 h-32 border-2 border-red-500/30 rotate-45 animate-spin origin-center" style={{animationDuration: '20s'}}></div>
        <div className="absolute top-[60%] right-[10%] w-24 h-24 bg-red-600/20 rounded-full animate-bounce"></div>
        <div className="absolute bottom-[20%] left-[15%] w-16 h-16 bg-gradient-to-r from-red-500/40 to-orange-500/40 transform skew-x-12 animate-pulse"></div>
        
        {/* Scattered triangles */}
        <div className="absolute top-[30%] right-[30%] w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[30px] border-b-red-400/50 animate-pulse delay-1000"></div>
        <div className="absolute bottom-[40%] right-[20%] w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[25px] border-b-orange-400/40 animate-bounce delay-2000"></div>
        
        {/* Diagonal lines */}
        <div className="absolute top-[25%] left-[50%] w-64 h-0.5 bg-gradient-to-r from-transparent via-red-500/60 to-transparent transform rotate-45 animate-pulse"></div>
        <div className="absolute bottom-[35%] right-[40%] w-48 h-0.5 bg-gradient-to-r from-transparent via-orange-500/50 to-transparent transform -rotate-45 animate-pulse delay-1500"></div>
        
        {/* Floating dots */}
        <div className="absolute top-[15%] right-[15%] w-3 h-3 bg-red-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-[25%] left-[25%] w-2 h-2 bg-orange-400 rounded-full animate-ping delay-700"></div>
        <div className="absolute top-[70%] left-[70%] w-4 h-4 bg-red-300 rounded-full animate-ping delay-1400"></div>
      </div>

      {/* Broken Grid Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 p-6">
        <div className="relative">
          {/* Logo in unconventional position */}
          <div className="absolute -top-2 left-8 text-6xl font-black text-red-500 transform -rotate-12 drop-shadow-2xl">
            T
          </div>
          <div className="absolute top-4 left-12 text-4xl font-black text-white transform rotate-6">
            APZI
          </div>
          
          {/* Scattered navigation */}
          <div className="flex justify-end space-x-12 mt-8">
            <a href="#work" className="text-white hover:text-red-400 transition-colors transform hover:rotate-3">WORK</a>
            <a href="#about" className="text-white hover:text-red-400 transition-colors transform hover:-rotate-2">ABOUT</a>
            <a href="#contact" className="text-white hover:text-red-400 transition-colors transform hover:rotate-1">CONTACT</a>
          </div>
        </div>
      </nav>

      {/* Asymmetric Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative pt-32">
        <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-6">
          {/* Title breaking out of grid */}
          <div className="col-span-8 col-start-3 relative">
            <h1 className="text-8xl md:text-9xl font-black leading-none">
              <span className="block text-white transform -rotate-2">FLIGHT</span>
              <span className="block text-red-500 transform rotate-1 ml-16">SIM</span>
              <span className="block text-white transform -rotate-1 ml-8">LIVERIES</span>
            </h1>
            
            {/* Overlapping elements */}
            <div className="absolute -top-8 -right-16 w-32 h-32 border-4 border-red-500/30 transform rotate-45"></div>
            <div className="absolute top-24 -left-12 w-24 h-24 bg-red-600/20 rounded-full"></div>
          </div>
          
          {/* Broken text positioning */}
          <div className="col-span-4 col-start-9 mt-32">
            <p className="text-xl text-gray-300 transform rotate-2 bg-red-900/20 p-6 backdrop-blur-sm">
              Creating impossible realities in virtual skies. Each livery is a rebellion against the ordinary.
            </p>
          </div>
          
          {/* Floating CTA */}
          <div className="col-span-6 col-start-2 mt-16">
            <Button 
              size="lg" 
              className="bg-red-600 hover:bg-red-700 text-white px-12 py-6 text-xl font-bold transform -rotate-1 hover:rotate-0 transition-all duration-300 shadow-2xl"
            >
              COMMISSION NOW
              <ArrowRight className="ml-4 w-6 h-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* Brutalist Request Section */}
      <section className="py-32 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-3 gap-8 items-stretch">
            {/* Asymmetric content blocks */}
            <div className="bg-red-600 p-12 transform -rotate-2 shadow-2xl">
              <h2 className="text-4xl font-black text-white mb-6 transform rotate-1">
                READY TO FLY?
              </h2>
              <p className="text-red-100 text-lg leading-relaxed">
                Transform your aircraft into a masterpiece that defies convention.
              </p>
            </div>
            
            <div className="bg-white text-black p-12 transform rotate-1 shadow-2xl">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-red-600"></div>
                  <span className="font-bold">FAST DELIVERY</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-black"></div>
                  <span className="font-bold">HD QUALITY</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-red-600"></div>
                  <span className="font-bold">UNIQUE VISION</span>
                </div>
              </div>
            </div>
            
            <div className="bg-black border-4 border-red-500 p-12 transform -rotate-1 shadow-2xl">
              <Button 
                size="lg" 
                className="w-full bg-red-600 hover:bg-red-700 text-white py-8 text-xl font-black transform hover:scale-105 transition-all"
              >
                START PROJECT
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Deconstructed Services */}
      <section id="services" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-6xl font-black text-center mb-20 transform -rotate-1">
            <span className="text-white">WHAT I</span>
            <span className="text-red-500 ml-4">CREATE</span>
          </h2>
          
          <div className="space-y-32">
            {services.map((service, index) => (
              <div key={index} className={`grid grid-cols-12 gap-8 items-center ${index % 2 === 1 ? 'direction-rtl' : ''}`}>
                <div className={`col-span-6 ${index % 2 === 1 ? 'col-start-7' : 'col-start-1'}`}>
                  <div className={`transform ${index % 2 === 0 ? 'rotate-2' : '-rotate-2'} bg-red-900/20 p-12 backdrop-blur-sm border-l-8 border-red-500`}>
                    <div className="flex items-center mb-6">
                      <service.icon className="w-12 h-12 text-red-400 mr-6" />
                      <h3 className="text-3xl font-black text-white">{service.title}</h3>
                    </div>
                    <p className="text-gray-300 text-lg mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-red-300 font-bold">→ {feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className={`col-span-4 ${index % 2 === 1 ? 'col-start-2' : 'col-start-8'}`}>
                  <div className={`w-32 h-32 bg-red-600 transform ${index % 2 === 0 ? '-rotate-12' : 'rotate-12'} shadow-2xl`}></div>
                  <div className={`w-24 h-24 bg-white mt-8 transform ${index % 2 === 0 ? 'rotate-6' : '-rotate-6'} ml-8`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chaotic Portfolio Grid */}
      <section id="work" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-6xl font-black mb-20 transform rotate-1">
            <span className="text-red-500">PORTFOLIO</span>
            <span className="text-white ml-4">CHAOS</span>
          </h2>
          
          <div className="grid grid-cols-8 gap-4 h-[800px]">
            {portfolio.map((item, index) => (
              <div 
                key={index} 
                className={`relative overflow-hidden group cursor-pointer transform hover:scale-105 transition-all duration-500 ${
                  index === 0 ? 'col-span-3 row-span-2 rotate-2' :
                  index === 1 ? 'col-span-2 row-span-1 -rotate-1 col-start-4' :
                  index === 2 ? 'col-span-3 row-span-2 rotate-1 col-start-6' :
                  'col-span-2 row-span-1 -rotate-2 col-start-4 row-start-2'
                }`}
                style={{
                  backgroundColor: index % 2 === 0 ? '#dc2626' : '#000',
                }}
              >
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover mix-blend-multiply group-hover:mix-blend-normal transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform rotate-1">
                  <p className="text-sm text-red-300 font-bold">{item.category}</p>
                  <h3 className="text-xl font-black">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experimental About Section */}
      <section id="about" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 gap-16 items-center">
            <div className="transform -rotate-1">
              <h2 className="text-6xl font-black text-white mb-8">
                THE
                <span className="text-red-500 block transform rotate-2 ml-8">ARTIST</span>
              </h2>
              <div className="space-y-6 text-lg text-gray-300">
                <p className="bg-red-900/20 p-6 transform rotate-1 backdrop-blur-sm">
                  Years of breaking the rules of virtual aviation design. Each livery challenges what's possible.
                </p>
                <p className="bg-white/10 p-6 transform -rotate-1 backdrop-blur-sm">
                  From precise recreations to impossible dreams - if it can fly, I can paint it.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-2 gap-8">
                <div className="bg-red-600 p-8 transform rotate-3 text-center">
                  <div className="text-4xl font-black text-white">500+</div>
                  <p className="text-red-100 font-bold">LIVERIES</p>
                </div>
                <div className="bg-white p-8 transform -rotate-2 text-center">
                  <div className="text-4xl font-black text-black">50+</div>
                  <p className="text-gray-700 font-bold">AIRLINES</p>
                </div>
                <div className="bg-black border-4 border-red-500 p-8 transform rotate-1 text-center">
                  <div className="text-4xl font-black text-white">3+</div>
                  <p className="text-red-400 font-bold">YEARS</p>
                </div>
                <div className="bg-red-900 p-8 transform -rotate-3 text-center">
                  <div className="text-4xl font-black text-white">∞</div>
                  <p className="text-red-200 font-bold">POSSIBILITIES</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Radical Contact Section */}
      <section id="contact" className="py-32 relative">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="bg-red-600 p-16 transform -rotate-1 shadow-2xl mb-16">
            <h2 className="text-6xl font-black text-white mb-8 transform rotate-1">
              LET'S CREATE
              <span className="block text-black">CHAOS</span>
            </h2>
            <p className="text-2xl text-red-100 mb-12 transform -rotate-1">
              Ready to break the rules of aviation design?
            </p>
            <Button 
              size="lg" 
              className="bg-black hover:bg-gray-900 text-white px-16 py-8 text-2xl font-black transform rotate-2 hover:rotate-0 transition-all duration-300"
            >
              START THE MADNESS
              <ArrowRight className="ml-4 w-8 h-8" />
            </Button>
          </div>
        </div>
      </section>

      {/* Deconstructed Footer */}
      <footer className="bg-red-600 text-white py-16 transform -rotate-1 origin-bottom-left">
        <div className="max-w-7xl mx-auto px-6 text-center transform rotate-1">
          <div className="text-6xl font-black mb-8">TAPZI</div>
          <p className="text-red-200 text-xl mb-8">DISRUPTING VIRTUAL SKIES SINCE 2021</p>
          <div className="border-t-4 border-black pt-8">
            <p className="text-red-100">© 2024 TAPZI. CHAOS GUARANTEED.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
