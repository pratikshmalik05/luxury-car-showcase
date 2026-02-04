import { ArrowRight, Zap, Shield, Sparkles, ChevronDown, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef } from "react";
import { motion } from "framer-motion";

const carImageUrls: Record<string, string> = {
  "Porsche 911": "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80",
  "Ferrari F8": "https://images.unsplash.com/photo-1579863537050-37265ba4cab0?auto=format&fit=crop&w=800&q=80",
  "Mustang GT": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
  "BMW M5": "https://images.unsplash.com/photo-1552820728-8ac41f1ce891?auto=format&fit=crop&w=800&q=80",
  "Mercedes-AMG": "https://images.unsplash.com/photo-1626400973514-635e0723ca7e?auto=format&fit=crop&w=800&q=80",
  "Audi R8": "https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&w=800&q=80",
  "Rolls Royce": "https://images.unsplash.com/photo-1553882900-f2b08422371e?auto=format&fit=crop&w=800&q=80",
  "Tesla Model S": "https://images.unsplash.com/photo-1560958089-b8a46dd52291?auto=format&fit=crop&w=800&q=80",
};

export default function Index() {
  const [selectedCar, setSelectedCar] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const cars = [
    { name: "Porsche 911", brand: "Porsche", category: "Sports", image: carImageUrls["Porsche 911"] },
    { name: "Ferrari F8", brand: "Ferrari", category: "Sports", image: carImageUrls["Ferrari F8"] },
    { name: "Mustang GT", brand: "Ford", category: "Sports", image: carImageUrls["Mustang GT"] },
    { name: "BMW M5", brand: "BMW", category: "Sports", image: carImageUrls["BMW M5"] },
    { name: "Mercedes-AMG", brand: "Mercedes", category: "Luxury", image: carImageUrls["Mercedes-AMG"] },
    { name: "Audi R8", brand: "Audi", category: "Sports", image: carImageUrls["Audi R8"] },
    { name: "Rolls Royce", brand: "Rolls Royce", category: "Luxury", image: carImageUrls["Rolls Royce"] },
    { name: "Tesla Model S", brand: "Tesla", category: "Electric", image: carImageUrls["Tesla Model S"] },
  ];

  const filteredCars = selectedCategory
    ? cars.filter(car => car.category === selectedCategory)
    : cars;

  const categories = [
    {
      name: "Sports",
      description: "High-performance vehicles with exceptional acceleration and handling",
      color: "from-red-500 to-orange-500",
    },
    {
      name: "SUV",
      description: "Spacious and powerful, perfect for any adventure",
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Electric",
      description: "Eco-friendly luxury with cutting-edge technology",
      color: "from-green-500 to-emerald-500",
    },
  ];

  const features = [
    {
      icon: Shield,
      title: "Premium Quality",
      description: "Every vehicle undergoes rigorous quality checks and certification",
    },
    {
      icon: Zap,
      title: "High Performance",
      description: "Experience unmatched power and acceleration in every drive",
    },
    {
      icon: Sparkles,
      title: "Luxury Design",
      description: "Meticulously crafted interiors and cutting-edge aesthetics",
    },
  ];

  const featuredCars = [
    {
      name: "Porsche 911 Turbo",
      category: "Sports",
      price: "$200,000",
      specs: ["0-60 in 2.7s", "650 HP", "German Engineering"],
    },
    {
      name: "Ferrari F8 Tributo",
      category: "Sports",
      price: "$280,000",
      specs: ["Twin Turbo V12", "710 HP", "Italian Excellence"],
    },
    {
      name: "Rolls Royce Phantom",
      category: "Luxury",
      price: "$550,000",
      specs: ["12-Cyl Engine", "563 HP", "Ultimate Comfort"],
    },
    {
      name: "Tesla Model Plaid",
      category: "Electric",
      price: "$139,990",
      specs: ["0-60 in 1.99s", "1000 HP", "Future of Mobility"],
    },
  ];

  return (
    <div className="bg-white text-foreground overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">
                🏎️
              </div>
              <span className="font-display text-xl font-bold text-secondary">
                LuxeMotor
              </span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection("cars")}
                className="text-sm font-medium hover:text-primary transition"
              >
                Cars
              </button>
              <button
                onClick={() => scrollToSection("categories")}
                className="text-sm font-medium hover:text-primary transition"
              >
                Categories
              </button>
              <button
                onClick={() => scrollToSection("features")}
                className="text-sm font-medium hover:text-primary transition"
              >
                Why Us
              </button>
              <button
                onClick={() => scrollToSection("cta")}
                className="bg-primary text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-slate-50 -z-10" />
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-primary/20 mb-6">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">
                  Discover Premium Vehicles
                </span>
              </div>
              <h1 className="font-display text-5xl lg:text-6xl font-bold text-secondary mb-6 leading-tight">
                Own the Road. <br />
                <span className="text-primary">Drive Excellence</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Experience the world's most coveted luxury and sports cars. From
                iconic Ferraris to revolutionary Teslas, we bring automotive
                excellence to your doorstep.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection("cars")}
                  className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2 group"
                >
                  Explore Collection
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
                </button>
                <button
                  onClick={() => scrollToSection("cta")}
                  className="border-2 border-secondary text-secondary px-8 py-4 rounded-lg font-semibold hover:bg-secondary hover:text-white transition"
                >
                  Schedule Demo
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-500/20 rounded-3xl blur-3xl" />
              <div className="relative bg-gradient-to-br from-primary to-blue-600 rounded-3xl p-8 text-white text-center">
                <div className="text-9xl mb-6">🏎️</div>
                <div className="text-2xl font-bold mb-2">
                  World's Finest Automobiles
                </div>
                <div className="text-blue-100">Hand-picked luxury collection</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-16 animate-bounce">
          <ChevronDown className="w-6 h-6 text-primary" />
        </div>
      </section>

      {/* Car Categories */}
      <section id="categories" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-secondary mb-4">
              Explore Our Categories
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover vehicles tailored to your lifestyle and preferences
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div
                key={index}
                className="group cursor-pointer"
              >
                <div
                  className={`bg-gradient-to-br ${category.color} rounded-2xl p-8 text-white h-64 flex flex-col justify-between hover:shadow-2xl transition duration-300 transform hover:scale-105`}
                >
                  <div>
                    <h3 className="font-display text-3xl font-bold mb-3">
                      {category.name}
                    </h3>
                    <p className="text-white/90 text-sm leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-white font-semibold">
                    Explore <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Cars Showcase */}
      <section id="cars" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-secondary mb-4">
              Featured Collection
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Handpicked masterpieces from the world's most prestigious
              manufacturers
            </p>
          </div>

          {/* Quick Browse Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-16">
            {cars.map((car, index) => (
              <div
                key={index}
                className="group cursor-pointer bg-white rounded-xl border border-border hover:border-primary transition overflow-hidden hover:shadow-lg"
              >
                <div className="aspect-square bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center text-6xl group-hover:scale-110 transition duration-300">
                  {car.image}
                </div>
                <div className="p-4">
                  <p className="text-xs font-semibold text-primary mb-1 uppercase">
                    {car.category}
                  </p>
                  <h3 className="font-semibold text-secondary text-sm">
                    {car.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Detailed Featured Cars */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredCars.map((car, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-slate-50 to-white rounded-2xl overflow-hidden border border-border hover:border-primary hover:shadow-xl transition duration-300"
              >
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-blue-500/10 flex items-center justify-center text-8xl group-hover:scale-110 transition duration-300">
                  {index === 0
                    ? "🏎️"
                    : index === 1
                      ? "🏁"
                      : index === 2
                        ? "👑"
                        : "⚡"}
                </div>
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <p className="text-sm font-semibold text-primary uppercase mb-2">
                        {car.category}
                      </p>
                      <h3 className="font-display text-2xl font-bold text-secondary">
                        {car.name}
                      </h3>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-bold text-accent">
                        {car.price}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {car.specs.map((spec, i) => (
                      <span
                        key={i}
                        className="inline-block px-3 py-1 bg-blue-50 text-primary text-xs font-medium rounded-full"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                  <button className="mt-6 w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-secondary mb-4">
              Why Choose Us
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're committed to delivering unmatched quality and service
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 border border-border hover:border-primary hover:shadow-lg transition duration-300"
                >
                  <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-secondary mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-secondary to-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6">
            Ready to Drive Your Dream Car?
          </h2>
          <p className="text-lg text-slate-200 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who've found their perfect
            vehicle. Schedule a personalized consultation with our experts today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary text-secondary px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition text-lg flex items-center justify-center gap-2 group">
              Schedule Test Drive
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-secondary transition text-lg">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <button className="hover:text-white transition">About</button>
                </li>
                <li>
                  <button className="hover:text-white transition">Blog</button>
                </li>
                <li>
                  <button className="hover:text-white transition">Careers</button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <button className="hover:text-white transition">
                    Contact
                  </button>
                </li>
                <li>
                  <button className="hover:text-white transition">
                    FAQ
                  </button>
                </li>
                <li>
                  <button className="hover:text-white transition">
                    Service
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <button className="hover:text-white transition">
                    Privacy
                  </button>
                </li>
                <li>
                  <button className="hover:text-white transition">Terms</button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Follow Us</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <button className="hover:text-white transition">Twitter</button>
                </li>
                <li>
                  <button className="hover:text-white transition">
                    Instagram
                  </button>
                </li>
                <li>
                  <button className="hover:text-white transition">
                    LinkedIn
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-lg">
                🏎️
              </div>
              <span className="font-semibold text-white">LuxeMotor</span>
            </div>
            <p className="text-sm text-slate-400">
              © 2024 LuxeMotor. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
