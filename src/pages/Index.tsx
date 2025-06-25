
import { ArrowRight, Palette, Plane, Star, Users, Zap } from "lucide-react";
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-950 to-slate-800 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Large animated gradients */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-red-500/30 to-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-gradient-to-l from-red-600/25 to-pink-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-gradient-to-t from-red-400/20 to-yellow-500/10 rounded-full blur-2xl animate-pulse delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-red-500/15 via-purple-500/10 to-blue-500/15 rounded-full blur-3xl animate-pulse delay-3000"></div>
        
        {/* Moving geometric shapes */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-red-400/60 rotate-45 animate-bounce delay-300"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-orange-400/50 rounded-full animate-bounce delay-700"></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-yellow-400/60 rotate-45 animate-bounce delay-1000"></div>
        <div className="absolute bottom-20 right-40 w-5 h-5 bg-red-300/50 rounded-full animate-bounce delay-1500"></div>
        <div className="absolute top-60 left-1/2 w-2 h-2 bg-pink-400/70 rounded-full animate-bounce delay-2000"></div>
        
        {/* Floating lines */}
        <div className="absolute top-1/4 left-1/4 w-32 h-0.5 bg-gradient-to-r from-transparent via-red-400/30 to-transparent rotate-45 animate-pulse delay-500"></div>
        <div className="absolute bottom-1/3 right-1/4 w-24 h-0.5 bg-gradient-to-r from-transparent via-orange-400/30 to-transparent -rotate-45 animate-pulse delay-1500"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-red-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-red-400 drop-shadow-lg">Tapzi</div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-slate-300 hover:text-red-400 transition-colors">Home</a>
              <a href="#services" className="text-slate-300 hover:text-red-400 transition-colors">Services</a>
              <a href="#portfolio" className="text-slate-300 hover:text-red-400 transition-colors">Portfolio</a>
              <a href="#about" className="text-slate-300 hover:text-red-400 transition-colors">About</a>
              <a href="#contact" className="text-slate-300 hover:text-red-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center py-20">
            <div className="inline-flex items-center px-4 py-2 bg-red-500/20 backdrop-blur-sm rounded-full text-red-300 text-sm font-medium mb-8 border border-red-400/30">
              <Plane className="w-4 h-4 mr-2" />
              Professional Flight Simulator Liveries
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
              Bringing Aircraft to
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400"> Life</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Specializing in high-quality, realistic liveries for Microsoft Flight Simulator and X-Plane. 
              From authentic airline recreations to fully custom designs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white px-8 py-4 shadow-2xl hover:shadow-red-500/25 transition-all duration-300 border-0">
                View Portfolio
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4 border-red-400/50 text-red-300 hover:bg-red-500/20 backdrop-blur-sm shadow-xl transition-all duration-300">
                Commission a Livery
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Request Livery Section */}
      <section className="py-16 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-black/30 backdrop-blur-md rounded-3xl p-12 border border-red-500/30 shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Aircraft?
            </h2>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Whether you're looking for an exact replica of your favorite airline's livery or want to create something completely unique, 
              I bring years of expertise in flight simulator livery painting to make your vision soar.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-10 text-sm">
              <div className="bg-red-500/10 backdrop-blur-sm rounded-xl p-4 border border-red-400/20">
                <div className="text-red-400 font-semibold mb-2">Fast Turnaround</div>
                <div className="text-slate-400">Most liveries completed within 1-2 weeks</div>
              </div>
              <div className="bg-red-500/10 backdrop-blur-sm rounded-xl p-4 border border-red-400/20">
                <div className="text-red-400 font-semibold mb-2">HD Quality</div>
                <div className="text-slate-400">High-resolution textures for maximum realism</div>
              </div>
              <div className="bg-red-500/10 backdrop-blur-sm rounded-xl p-4 border border-red-400/20">
                <div className="text-red-400 font-semibold mb-2">Custom Work</div>
                <div className="text-slate-400">Tailored to your exact specifications</div>
              </div>
            </div>
            <Button size="lg" className="bg-gradient-to-r from-red-600 via-red-500 to-orange-500 hover:from-red-700 hover:via-red-600 hover:to-orange-600 text-white px-12 py-4 shadow-2xl hover:shadow-red-500/30 transition-all duration-300 text-lg font-semibold">
              Request Your Custom Livery
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Services</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Professional livery painting services tailored to your flight simulation needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-300 border-red-500/20 bg-black/40 backdrop-blur-md hover:bg-black/60">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-red-500/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:bg-red-500 transition-colors duration-300 border border-red-400/30">
                    <service.icon className="w-8 h-8 text-red-400 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-slate-300 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-slate-300">
                        <Star className="w-4 h-4 text-red-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Featured Work</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              A showcase of recent liveries across different aircraft and styles
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolio.map((item, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl bg-slate-800/50 backdrop-blur-sm aspect-[4/3] shadow-xl hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-500 border border-red-500/20">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm text-red-300">{item.category}</p>
                    <h3 className="text-lg font-bold">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">About the Artist</h2>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                With years of experience in flight simulator livery painting, I specialize in creating 
                high-quality, realistic designs that bring virtual aircraft to life. My work spans across 
                Microsoft Flight Simulator and X-Plane platforms.
              </p>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                From meticulously recreating real-world airline liveries to designing completely custom 
                paint schemes, every project receives the same attention to detail and commitment to excellence.
              </p>
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-400 mb-2">500+</div>
                  <p className="text-slate-400">Liveries Created</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-400 mb-2">50+</div>
                  <p className="text-slate-400">Airlines Covered</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-400 mb-2">3+</div>
                  <p className="text-slate-400">Years Experience</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=400&fit=crop" 
                alt="Aircraft livery showcase"
                className="rounded-2xl shadow-2xl border border-red-500/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Commission?</h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Let's bring your vision to life. Whether it's a real airline livery or a completely custom design, 
            I'm here to help create something exceptional.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 border-red-500/20 bg-black/40 backdrop-blur-md shadow-xl hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-300">
              <Users className="w-12 h-12 text-red-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Quick Consultation</h3>
              <p className="text-slate-300">Discuss your project requirements and get a quote</p>
            </Card>
            <Card className="p-8 border-red-500/20 bg-black/40 backdrop-blur-md shadow-xl hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-300">
              <Zap className="w-12 h-12 text-red-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Fast Delivery</h3>
              <p className="text-slate-300">Professional results delivered within agreed timelines</p>
            </Card>
          </div>
          <Button size="lg" className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white px-12 py-4 shadow-2xl hover:shadow-red-500/25 transition-all duration-300">
            Start Your Commission
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 backdrop-blur-md text-white py-12 px-6 relative border-t border-red-500/20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-2xl font-bold mb-4 text-red-400">Tapzi</div>
          <p className="text-slate-400 mb-8">Professional Flight Simulator Liveries</p>
          <div className="border-t border-red-500/20 pt-8">
            <p className="text-slate-400">© 2024 Tapzi. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
