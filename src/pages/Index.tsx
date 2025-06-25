
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-red-50 relative overflow-hidden">
      {/* Animated Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-100/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-100/20 rounded-full blur-2xl animate-pulse delay-2000"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-red-400/40 rounded-full animate-bounce delay-300"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-blue-400/40 rounded-full animate-bounce delay-700"></div>
        <div className="absolute bottom-40 left-20 w-2 h-2 bg-purple-400/40 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-20 right-40 w-4 h-4 bg-red-300/30 rounded-full animate-bounce delay-1500"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-red-600">Tapzi</div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-slate-600 hover:text-red-600 transition-colors">Home</a>
              <a href="#services" className="text-slate-600 hover:text-red-600 transition-colors">Services</a>
              <a href="#portfolio" className="text-slate-600 hover:text-red-600 transition-colors">Portfolio</a>
              <a href="#about" className="text-slate-600 hover:text-red-600 transition-colors">About</a>
              <a href="#contact" className="text-slate-600 hover:text-red-600 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center py-20">
            <div className="inline-flex items-center px-4 py-2 bg-red-50 rounded-full text-red-700 text-sm font-medium mb-8 border border-red-200/50">
              <Plane className="w-4 h-4 mr-2" />
              Professional Flight Simulator Liveries
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6 leading-tight">
              Bringing Aircraft to
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400"> Life</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Specializing in high-quality, realistic liveries for Microsoft Flight Simulator and X-Plane. 
              From authentic airline recreations to fully custom designs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300">
                View Portfolio
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4 border-red-200 text-red-600 hover:bg-red-50 shadow-lg hover:shadow-xl transition-all duration-300">
                Commission a Livery
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-white/50 backdrop-blur-sm relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Services</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Professional livery painting services tailored to your flight simulation needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm hover:bg-white">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-red-600 transition-colors duration-300">
                    <service.icon className="w-8 h-8 text-red-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">{service.title}</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-slate-600">
                        <Star className="w-4 h-4 text-red-600 mr-2" />
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
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Featured Work</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              A showcase of recent liveries across different aircraft and styles
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolio.map((item, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl bg-slate-100 aspect-[4/3] shadow-lg hover:shadow-xl transition-all duration-500">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm text-red-200">{item.category}</p>
                    <h3 className="text-lg font-bold">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white/50 backdrop-blur-sm relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-800 mb-6">About the Artist</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                With years of experience in flight simulator livery painting, I specialize in creating 
                high-quality, realistic designs that bring virtual aircraft to life. My work spans across 
                Microsoft Flight Simulator and X-Plane platforms.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                From meticulously recreating real-world airline liveries to designing completely custom 
                paint schemes, every project receives the same attention to detail and commitment to excellence.
              </p>
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">500+</div>
                  <p className="text-slate-600">Liveries Created</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">50+</div>
                  <p className="text-slate-600">Airlines Covered</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">3+</div>
                  <p className="text-slate-600">Years Experience</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=400&fit=crop" 
                alt="Aircraft livery showcase"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-800 mb-6">Ready to Commission?</h2>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            Let's bring your vision to life. Whether it's a real airline livery or a completely custom design, 
            I'm here to help create something exceptional.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 border-0 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
              <Users className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-800 mb-2">Quick Consultation</h3>
              <p className="text-slate-600">Discuss your project requirements and get a quote</p>
            </Card>
            <Card className="p-8 border-0 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
              <Zap className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-800 mb-2">Fast Delivery</h3>
              <p className="text-slate-600">Professional results delivered within agreed timelines</p>
            </Card>
          </div>
          <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-12 py-4 shadow-lg hover:shadow-xl transition-all duration-300">
            Start Your Commission
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12 px-6 relative">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-2xl font-bold mb-4 text-red-400">Tapzi</div>
          <p className="text-slate-400 mb-8">Professional Flight Simulator Liveries</p>
          <div className="border-t border-slate-700 pt-8">
            <p className="text-slate-400">© 2024 Tapzi. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
