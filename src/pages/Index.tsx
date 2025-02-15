
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
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
            Welcome to Luxury
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display text-white mb-6">
            Experience Exceptional Hospitality
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Discover handpicked luxury hotels and resorts around the world
          </p>
          <Link to="/hotels">
            <Button size="lg" className="group">
              Explore Hotels
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Featured Section */}
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
