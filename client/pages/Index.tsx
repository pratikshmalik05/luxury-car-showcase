import { ArrowRight, Zap, Shield, Sparkles, ChevronDown, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

// Beautiful gradient colors for each car with aura aesthetic
const carGradients: Record<string, { gradient: string; glow: string; emoji: string }> = {
  "Porsche 911": { gradient: "from-yellow-400 via-orange-500 to-red-600", glow: "via-orange-500/50", emoji: "🏎️" },
  "Ferrari F8": { gradient: "from-red-500 via-rose-600 to-red-900", glow: "via-red-600/50", emoji: "🏁" },
  "Mustang GT": { gradient: "from-amber-400 via-orange-500 to-amber-900", glow: "via-orange-500/50", emoji: "🐴" },
  "BMW M5": { gradient: "from-blue-400 via-blue-600 to-blue-900", glow: "via-blue-600/50", emoji: "⚡" },
  "Mercedes-AMG": { gradient: "from-slate-300 via-slate-400 to-slate-900", glow: "via-slate-400/50", emoji: "👑" },
  "Audi R8": { gradient: "from-cyan-400 via-blue-500 to-blue-900", glow: "via-blue-500/50", emoji: "🎯" },
  "Rolls Royce": { gradient: "from-purple-300 via-purple-500 to-purple-900", glow: "via-purple-500/50", emoji: "✨" },
  "Tesla Model S": { gradient: "from-emerald-400 via-green-500 to-green-900", glow: "via-green-500/50", emoji: "⚙️" },
};

const CarGradientCard = ({ carName }: { carName: string }) => {
  const { gradient, glow } = carGradients[carName] || carGradients["Porsche 911"];
  return (
    <div className={`relative w-full h-full bg-gradient-to-br ${gradient} overflow-hidden`}>
      <div className={`absolute inset-0 bg-gradient-to-br ${glow} blur-3xl opacity-60 animate-pulse`} />
      <div className="absolute inset-0 flex items-center justify-center text-8xl drop-shadow-lg">
        {carGradients[carName]?.emoji || "🏎️"}
      </div>
    </div>
  );
};

export default function Index() {
  const [selectedCar, setSelectedCar] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(true);

  // Ensure dark mode is applied
  if (typeof document !== 'undefined' && isMounted) {
    document.documentElement.classList.add('dark');
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const cars = [
    { name: "Porsche 911", brand: "Porsche", category: "Sports" },
    { name: "Ferrari F8", brand: "Ferrari", category: "Sports" },
    { name: "Mustang GT", brand: "Ford", category: "Sports" },
    { name: "BMW M5", brand: "BMW", category: "Sports" },
    { name: "Mercedes-AMG", brand: "Mercedes", category: "Luxury" },
    { name: "Audi R8", brand: "Audi", category: "Sports" },
    { name: "Rolls Royce", brand: "Rolls Royce", category: "Luxury" },
    { name: "Tesla Model S", brand: "Tesla", category: "Electric" },
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
      name: "Luxury",
      description: "Spacious and luxurious, perfect for refined driving",
      color: "from-purple-500 to-pink-500",
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
      baseName: "Porsche 911",
      category: "Sports",
      price: "$200,000",
      specs: ["0-60 in 2.7s", "650 HP", "German Engineering"],
    },
    {
      name: "Ferrari F8 Tributo",
      baseName: "Ferrari F8",
      category: "Sports",
      price: "$280,000",
      specs: ["Twin Turbo V12", "710 HP", "Italian Excellence"],
    },
    {
      name: "Rolls Royce Phantom",
      baseName: "Rolls Royce",
      category: "Luxury",
      price: "$550,000",
      specs: ["12-Cyl Engine", "563 HP", "Ultimate Comfort"],
    },
    {
      name: "Tesla Model Plaid",
      baseName: "Tesla Model S",
      category: "Electric",
      price: "$139,990",
      specs: ["0-60 in 1.99s", "1000 HP", "Future of Mobility"],
    },
  ];

  const nextFeaturedCar = () => {
    setCarouselIndex((prev) => (prev + 1) % featuredCars.length);
  };

  const prevFeaturedCar = () => {
    setCarouselIndex((prev) => (prev - 1 + featuredCars.length) % featuredCars.length);
  };

  return (
    <div className="bg-slate-950 text-foreground overflow-hidden dark">
      {/* Car Modal */}
      {selectedCar && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedCar(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden border-2 border-purple-500/50 glow"
          >
            <CarGradientCard carName={selectedCar} />
            <button
              onClick={() => setSelectedCar(null)}
              className="absolute top-4 right-4 bg-slate-800/80 hover:bg-slate-700 rounded-full p-3 transition border border-purple-500/30"
            >
              <X className="w-6 h-6 text-purple-300" />
            </button>
          </motion.div>
        </motion.div>
      )}

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-xl z-50 border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                🏎️
              </div>
              <span className="font-display text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                LuxeMotor
              </span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection("cars")}
                className="text-sm font-medium text-slate-300 hover:text-purple-400 transition"
              >
                Cars
              </button>
              <button
                onClick={() => scrollToSection("categories")}
                className="text-sm font-medium text-slate-300 hover:text-purple-400 transition"
              >
                Categories
              </button>
              <button
                onClick={() => scrollToSection("features")}
                className="text-sm font-medium text-slate-300 hover:text-purple-400 transition"
              >
                Why Us
              </button>
              <button
                onClick={() => scrollToSection("cta")}
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-2 rounded-lg font-medium hover:from-purple-500 hover:to-cyan-500 transition"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 -z-10" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl animate-pulse" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/50 mb-6 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span className="text-sm font-medium text-purple-300">
                  Discover Premium Vehicles
                </span>
              </div>
              <h1 className="font-display text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Own the Road. <br />
                <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Drive Excellence</span>
              </h1>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                Experience the world's most coveted luxury and sports cars. From
                iconic Ferraris to revolutionary Teslas, we bring automotive
                excellence to your doorstep.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection("cars")}
                  className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-500 hover:to-cyan-500 transition flex items-center justify-center gap-2 group shadow-lg shadow-purple-600/50"
                >
                  Explore Collection
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection("cta")}
                  className="border-2 border-purple-500/50 text-slate-300 px-8 py-4 rounded-lg font-semibold hover:bg-purple-600/20 transition backdrop-blur-sm"
                >
                  Schedule Demo
                </motion.button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/30 to-purple-600/30 rounded-3xl blur-2xl" />
              <motion.div
                className="relative rounded-3xl overflow-hidden h-96 cursor-pointer group border border-purple-500/30"
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedCar("Ferrari F8")}
              >
                <CarGradientCard carName="Ferrari F8" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8 text-white">
                  <div className="text-2xl font-bold mb-2">
                    World's Finest Automobiles
                  </div>
                  <div className="text-purple-200">Click to view full experience</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-16 animate-bounce">
          <ChevronDown className="w-6 h-6 text-purple-400" />
        </div>
      </section>

      {/* Car Categories */}
      <section id="categories" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4">
              Explore Our Categories
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Discover vehicles tailored to your lifestyle and preferences
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div
                  className={`bg-gradient-to-br ${category.color} rounded-2xl p-8 text-white h-64 flex flex-col justify-between hover:shadow-2xl transition duration-300 transform border border-white/20`}
                >
                  <div>
                    <h3 className="font-display text-3xl font-bold mb-3">
                      {category.name}
                    </h3>
                    <p className="text-white/80 text-sm leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-white font-semibold">
                    Explore <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Cars Showcase */}
      <section id="cars" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4">
              Featured Collection
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Handpicked masterpieces from the world's most prestigious
              manufacturers
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedCategory(null)}
              className={`px-6 py-2 rounded-full font-semibold transition border ${
                selectedCategory === null
                  ? "bg-gradient-to-r from-purple-600 to-cyan-600 text-white border-transparent shadow-lg shadow-purple-600/50"
                  : "bg-slate-800/50 text-slate-300 border-purple-500/30 hover:border-purple-500/50"
              }`}
            >
              All Cars
            </motion.button>
            {["Sports", "Luxury", "Electric"].map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition border ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-purple-600 to-cyan-600 text-white border-transparent shadow-lg shadow-purple-600/50"
                    : "bg-slate-800/50 text-slate-300 border-purple-500/30 hover:border-purple-500/50"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>

          {/* Quick Browse Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-16">
            {filteredCars.map((car, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer bg-slate-800/50 rounded-xl border border-purple-500/30 hover:border-cyan-500/50 transition overflow-hidden hover:shadow-lg hover:shadow-purple-600/30"
                onClick={() => setSelectedCar(car.name)}
              >
                <div className="aspect-square overflow-hidden">
                  <CarGradientCard carName={car.name} />
                </div>
                <div className="p-4 bg-slate-900/80 backdrop-blur-sm">
                  <p className="text-xs font-semibold text-purple-400 mb-1 uppercase">
                    {car.category}
                  </p>
                  <h3 className="font-semibold text-slate-200 text-sm">
                    {car.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Featured Cars Carousel */}
          <div className="relative">
            <motion.div
              key={carouselIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
              {[featuredCars[carouselIndex], featuredCars[(carouselIndex + 1) % featuredCars.length]].map((car, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-purple-500/30 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-purple-600/30 transition duration-300 cursor-pointer"
                  onClick={() => setSelectedCar(car.baseName)}
                >
                  <div className="aspect-video overflow-hidden relative">
                    <CarGradientCard carName={car.baseName} />
                  </div>
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <p className="text-sm font-semibold text-purple-400 uppercase mb-2">
                          {car.category}
                        </p>
                        <h3 className="font-display text-2xl font-bold text-white">
                          {car.name}
                        </h3>
                      </div>
                      <div className="text-right">
                        <p className="text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                          {car.price}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {car.specs.map((spec, i) => (
                        <span
                          key={i}
                          className="inline-block px-3 py-1 bg-purple-500/20 text-purple-300 text-xs font-medium rounded-full border border-purple-500/30"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                    <button className="mt-6 w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white py-3 rounded-lg font-semibold hover:from-purple-500 hover:to-cyan-500 transition shadow-lg shadow-purple-600/50">
                      View Details
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Carousel Controls */}
            <div className="flex items-center justify-between mt-8">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={prevFeaturedCar}
                className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white flex items-center justify-center hover:from-purple-500 hover:to-cyan-500 transition shadow-lg shadow-purple-600/50"
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>

              <div className="flex gap-2">
                {featuredCars.map((_, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.2 }}
                    onClick={() => setCarouselIndex(index)}
                    className={`h-3 rounded-full transition ${
                      index === carouselIndex
                        ? "bg-gradient-to-r from-purple-500 to-cyan-500 w-8 shadow-lg shadow-purple-600/50"
                        : "bg-slate-700 hover:bg-slate-600 w-3"
                    }`}
                  />
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={nextFeaturedCar}
                className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white flex items-center justify-center hover:from-purple-500 hover:to-cyan-500 transition shadow-lg shadow-purple-600/50"
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 relative overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4">
              Why Choose Us
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              We're committed to delivering unmatched quality and service
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-purple-600/30 transition duration-300"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-600/30 to-cyan-600/30 border border-purple-500/50 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-purple-400" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-secondary to-slate-900 text-white">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6">
            Ready to Drive Your Dream Car?
          </h2>
          <p className="text-lg text-slate-200 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who've found their perfect
            vehicle. Schedule a personalized consultation with our experts today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-secondary px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition text-lg flex items-center justify-center gap-2 group"
            >
              Schedule Test Drive
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-secondary transition text-lg"
            >
              Contact Sales
            </motion.button>
          </div>
        </motion.div>
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
