
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { ArrowRight, Hotel, Plane } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center px-4">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1460574283810-2aab119d8511?auto=format&fit=crop&w=2000')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto animate-fadeIn">
          <span className="inline-block text-white/90 mb-4 text-sm uppercase tracking-wider">
            Welcome to Luxury Travel
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display text-white mb-6">
            Travel in Exceptional Style
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Your premium destination for luxury hotels and exclusive flight bookings
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/hotels">
              <Button size="lg" className="group w-full sm:w-auto">
                <Hotel className="mr-2" size={20} />
                Explore Hotels
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/flights">
              <Button size="lg" variant="secondary" className="group w-full sm:w-auto">
                <Plane className="mr-2" size={20} />
                Find Flights
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <span className="text-primary mb-4 block text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-display mb-12">
            Premium Travel Experience
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {/* Hotels Service */}
            <div className="group rounded-lg overflow-hidden shadow-lg">
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80"
                  alt="Luxury Hotel"
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-2xl font-display mb-4">Luxury Hotels</h3>
                <p className="text-gray-600 mb-4">
                  Experience world-class hospitality in handpicked luxury hotels and resorts
                </p>
                <Link to="/hotels">
                  <Button variant="outline" className="group">
                    Browse Hotels
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Flights Service */}
            <div className="group rounded-lg overflow-hidden shadow-lg">
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80"
                  alt="Private Jet"
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-2xl font-display mb-4">Premium Flights</h3>
                <p className="text-gray-600 mb-4">
                  Travel in style with premium flight options and exclusive deals
                </p>
                <Link to="/flights">
                  <Button variant="outline" className="group">
                    Search Flights
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Hotels Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <span className="text-primary mb-4 block text-sm uppercase tracking-wider">
            Featured Properties
          </span>
          <h2 className="text-3xl md:text-4xl font-display mb-12">
            Discover Our Collection
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Featured Hotel Cards */}
            {[1, 2, 3].map((index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-md transition-transform hover:-translate-y-1"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={`https://images.unsplash.com/photo-148305783810-2aab119d8511?auto=format&fit=crop&w=800&q=80`}
                    alt="Luxury Hotel"
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <h3 className="text-white text-xl font-display mb-2">
                    Luxury Resort {index}
                  </h3>
                  <p className="text-white/90 text-sm mb-4">
                    Starting from $299/night
                  </p>
                  <Button variant="secondary" size="sm">
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
