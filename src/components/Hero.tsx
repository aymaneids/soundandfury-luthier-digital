import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import heroImage from "@/assets/hero-violin.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Exquisite violin craftsmanship"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-rich-brown/80 via-charcoal/60 to-rich-brown/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Trust Indicators */}
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-warm-gold fill-current" />
              ))}
            </div>
            <span className="text-warm-gold font-medium">Expert Craftsmanship</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-rich-brown-foreground mb-6 leading-tight">
            Expert Craftsmanship for the{" "}
            <span className="text-warm-gold">Modern Musician</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-rich-brown-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Specializing in the sale, rental, and meticulous repair of fine string instruments. 
            Redefining standards with a passion for inspiring musicians for generations to come.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button 
              variant="hero" 
              size="lg" 
              className="group w-full sm:w-auto"
              asChild
            >
              <a href="/services/sales">
                Explore Instruments for Sale
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto border-warm-gold text-warm-gold hover:bg-warm-gold hover:text-warm-gold-foreground"
              asChild
            >
              <a href="/services/rentals">
                Learn About Our Rental Program
              </a>
            </Button>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-rich-brown-foreground/80">
            <div className="text-center">
              <div className="font-semibold text-warm-gold mb-2">Available by Appointment</div>
              <div className="text-sm">Personalized service for every musician</div>
            </div>
            <div className="text-center">
              <div className="font-semibold text-warm-gold mb-2">School Services</div>
              <div className="text-sm">Specialized restoration for educational institutions</div>
            </div>
            <div className="text-center">
              <div className="font-semibold text-warm-gold mb-2">Expert Repairs</div>
              <div className="text-sm">From minor adjustments to major restorations</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-warm-gold rounded-full flex justify-center">
          <div className="w-1 h-3 bg-warm-gold rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;