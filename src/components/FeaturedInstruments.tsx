import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Eye } from "lucide-react";
import instrumentsGallery from "@/assets/instruments-gallery.jpg";

const FeaturedInstruments = () => {
  const instruments = [
    {
      id: 1,
      name: "German Workshop Violin",
      year: "1920s",
      description: "Beautiful antique violin with rich, warm tone. Recently restored with new strings and professional setup.",
      price: "$2,800",
      status: "Available",
      image: instrumentsGallery,
    },
    {
      id: 2,
      name: "French Violin",
      year: "1890s",
      description: "Elegant French violin with exceptional projection. Perfect for advanced students and professionals.",
      price: "Inquire",
      status: "Under Restoration",
      image: instrumentsGallery,
    },
    {
      id: 3,
      name: "Contemporary Cello",
      year: "2010s",
      description: "Modern cello with traditional craftsmanship. Outstanding value for developing musicians.",
      price: "$4,200",
      status: "Available",
      image: instrumentsGallery,
    },
    {
      id: 4,
      name: "Student Viola",
      year: "2020s",
      description: "High-quality student viola, professionally set up and ready to inspire young musicians.",
      price: "$1,200",
      status: "Available",
      image: instrumentsGallery,
    },
  ];

  return (
    <section className="py-20 bg-gradient-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
            Featured Instruments
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our curated selection of fine string instruments, each carefully selected 
            and expertly prepared for musicians who demand excellence.
          </p>
        </div>

        {/* Instruments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {instruments.map((instrument) => (
            <Card 
              key={instrument.id} 
              className="group overflow-hidden border-0 bg-gradient-card shadow-elegant hover:shadow-luxury transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={instrument.image}
                  alt={instrument.name}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-rich-brown/40 via-transparent to-transparent" />
                
                {/* Status Badge */}
                <Badge 
                  variant={instrument.status === "Available" ? "default" : "secondary"}
                  className="absolute top-3 right-3 bg-background/90 text-foreground"
                >
                  {instrument.status}
                </Badge>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-charcoal/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button variant="hero" size="sm">
                    <Eye className="h-4 w-4 mr-2" />
                    View Details
                  </Button>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="mb-3">
                  <h3 className="text-lg font-heading font-semibold text-card-foreground mb-1">
                    {instrument.name}
                  </h3>
                  <p className="text-sm text-warm-gold font-medium">
                    {instrument.year}
                  </p>
                </div>

                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {instrument.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="text-xl font-heading font-bold text-primary">
                    {instrument.price}
                  </div>
                  <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                    Inquire
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button variant="luxury" size="lg" asChild>
            <a href="/services/sales">
              View Complete Gallery
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Over 20+ instruments available for sale and rental
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturedInstruments;