import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Eye, MapPin } from "lucide-react";
import instrumentsGallery from "@/assets/instruments-gallery.jpg";

const InstrumentSales = () => {
  const instruments = [
    {
      id: 1,
      name: "German Workshop Violin",
      maker: "Wilhelm Schuster",
      year: "1920s",
      origin: "Mittenwald, Germany",
      description: "Beautiful antique violin with rich, warm tone. Recently restored with new strings, professional setup, and detailed sound post adjustment. Features flamed maple back and spruce top with stunning natural finish.",
      price: "$2,800",
      status: "Available",
      size: "4/4",
      image: instrumentsGallery,
      condition: "Excellent"
    },
    {
      id: 2,
      name: "French Violin",
      maker: "J.B. Vuillaume School",
      year: "1890s",
      origin: "Paris, France",
      description: "Elegant French violin with exceptional projection and sweet, singing tone. Perfect for advanced students and professionals. Features beautiful amber varnish and excellent craftsmanship throughout.",
      price: "Inquire",
      status: "Under Restoration",
      size: "4/4",
      image: instrumentsGallery,
      condition: "Very Good"
    },
    {
      id: 3,
      name: "Contemporary Cello",
      maker: "Modern Workshop",
      year: "2010s",
      origin: "United States",
      description: "Modern cello with traditional craftsmanship techniques. Outstanding value for developing musicians with a rich, projected tone suitable for orchestra and solo work. Recently fitted with Larsen strings.",
      price: "$4,200",
      status: "Available",
      size: "4/4",
      image: instrumentsGallery,
      condition: "Excellent"
    },
    {
      id: 4,
      name: "Student Viola",
      maker: "Contemporary Maker",
      year: "2020s",
      origin: "Europe",
      description: "High-quality student viola, professionally set up and ready to inspire young musicians. Features solid wood construction and includes bow and case. Perfect for intermediate students.",
      price: "$1,200",
      status: "Available",
      size: "15.5\"",
      image: instrumentsGallery,
      condition: "New"
    },
    {
      id: 5,
      name: "Antique Violin",
      maker: "Saxon Workshop",
      year: "1880s",
      origin: "Saxony, Germany",
      description: "Historic violin from the Saxon school with deep, complex tone. Recently underwent major restoration including crack repairs and new fingerboard. A wonderful instrument for the serious collector.",
      price: "$3,500",
      status: "Available",
      size: "4/4",
      image: instrumentsGallery,
      condition: "Very Good"
    },
    {
      id: 6,
      name: "Professional Cello",
      maker: "Heinrich Dörfler",
      year: "1950s",
      origin: "Mittenwald, Germany",
      description: "Professional-level cello with powerful, focused tone. Perfect for orchestral and chamber music. Features aged spruce top and beautiful maple back and sides with rich brown varnish.",
      price: "$8,500",
      status: "Available",
      size: "4/4",
      image: instrumentsGallery,
      condition: "Excellent"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Available":
        return "default";
      case "Under Restoration":
        return "secondary";
      case "Sold":
        return "destructive";
      default:
        return "outline";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-primary mb-6">
              Instruments for Sale
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover our carefully curated collection of fine string instruments. 
              Each instrument is expertly selected, professionally restored, and set up to the highest standards.
            </p>
          </div>
        </section>

        {/* Instruments Gallery */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {instruments.map((instrument) => (
                <Card 
                  key={instrument.id} 
                  className="group overflow-hidden border-0 bg-gradient-card shadow-elegant hover:shadow-luxury transition-all duration-300"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={instrument.image}
                      alt={instrument.name}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-rich-brown/40 via-transparent to-transparent" />
                    
                    {/* Status Badge */}
                    <Badge 
                      variant={getStatusColor(instrument.status)}
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
                    <div className="mb-4">
                      <h3 className="text-xl font-heading font-semibold text-card-foreground mb-1">
                        {instrument.name}
                      </h3>
                      <p className="text-sm text-warm-gold font-medium mb-1">
                        {instrument.maker} • {instrument.year}
                      </p>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <MapPin className="h-3 w-3 mr-1" />
                        {instrument.origin}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 mb-4 text-xs">
                      <div>
                        <span className="font-medium text-card-foreground">Size:</span> {instrument.size}
                      </div>
                      <div>
                        <span className="font-medium text-card-foreground">Condition:</span> {instrument.condition}
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground mb-6 leading-relaxed line-clamp-3">
                      {instrument.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-heading font-bold text-primary">
                        {instrument.price}
                      </div>
                      <Button variant="luxury" size="sm" asChild>
                        <a href="/contact">
                          Inquire
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-gradient-section">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-heading font-bold text-primary mb-6">
              Interested in an Instrument?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Schedule an appointment to try instruments in person or inquire about specific pieces.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <a href="/contact">
                  Schedule Appointment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button variant="luxury" size="lg" asChild>
                <a href="tel:7203648669">
                  Call (720) 364-8669
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default InstrumentSales;