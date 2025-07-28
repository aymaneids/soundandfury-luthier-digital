import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Music2, Music, Wrench } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Music2 className="h-8 w-8" />,
      title: "Instruments for Sale",
      description: "Discover our carefully curated collection of fine violins, violas, cellos, and basses. Each instrument is expertly selected and professionally set up.",
      features: [
        "Antique and contemporary instruments",
        "Full professional setup included", 
        "Certificate of authenticity",
        "30-day satisfaction guarantee"
      ],
      href: "/services/sales",
      cta: "Browse Gallery"
    },
    {
      icon: <Music className="h-8 w-8" />,
      title: "Instrument Rentals",
      description: "Professional quality rental instruments for students and professionals. All rentals include setup, maintenance, and upgrade options.",
      features: [
        "Student and professional levels",
        "Flexible rental terms",
        "Rent-to-own options available",
        "Full insurance coverage"
      ],
      href: "/services/rentals",
      cta: "Start Rental"
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Repairs & Restoration",
      description: "Expert repair and restoration services from minor adjustments to complete overhauls. Specializing in school instrument restoration.",
      features: [
        "Complete restoration services",
        "School instrument specialists",
        "Quick turnaround times",
        "Warranty on all work"
      ],
      href: "/services/repairs",
      cta: "Request Quote"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-primary mb-6">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive string instrument services designed to meet every musician's needs, 
              from student to professional level.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="group overflow-hidden border-0 bg-gradient-card shadow-elegant hover:shadow-luxury transition-all duration-300">
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4 text-white">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl font-heading text-primary">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="text-center">
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-2 mb-8 text-sm">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center justify-center text-card-foreground">
                          <ArrowRight className="h-4 w-4 mr-2 text-warm-gold" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <Button variant="luxury" className="w-full" asChild>
                      <a href={service.href}>
                        {service.cta}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-section">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-heading font-bold text-primary mb-6">
              Need Expert Advice?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Schedule a consultation to discuss your specific needs and find the perfect solution.
            </p>
            <Button variant="hero" size="lg" asChild>
              <a href="/contact">
                Schedule Appointment
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;