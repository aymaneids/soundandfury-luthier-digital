import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Home, Wrench, GraduationCap, ArrowRight } from "lucide-react";

const ServicesOverview = () => {
  const services = [
    {
      icon: ShoppingBag,
      title: "Sales",
      description: "Curated collection of fine violins, violas, and cellos from trusted makers. Each instrument is carefully selected and set up for optimal performance.",
      link: "/services/sales",
      accent: "text-warm-gold",
    },
    {
      icon: Home,
      title: "Rentals",
      description: "Quality instrument rental program designed for students and professionals. Flexible terms with option to purchase.",
      link: "/services/rentals",
      accent: "text-primary",
    },
    {
      icon: Wrench,
      title: "Repairs & Restoration",
      description: "Expert repair services from minor adjustments to complete restorations. Bringing instruments back to their full potential.",
      link: "/services/repairs",
      accent: "text-charcoal",
    },
    {
      icon: GraduationCap,
      title: "School Instrument Services",
      description: "Specialized restoration services for educational institutions. Redefining standards to inspire students for generations.",
      link: "/services/repairs#school-services",
      accent: "text-warm-gold",
    },
  ];

  return (
    <section className="py-20 bg-gradient-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
            Our Expert Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From sales to restoration, we provide comprehensive string instrument services 
            with the precision and care that fine instruments deserve.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-luxury transition-all duration-300 border-0 bg-gradient-card"
            >
              <CardContent className="p-8">
                <div className="text-center">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/50 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className={`h-8 w-8 ${service.accent}`} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-heading font-semibold text-card-foreground mb-4">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Learn More Link */}
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="group/btn text-primary hover:text-primary/80"
                    asChild
                  >
                    <a href={service.link}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Button variant="luxury" size="lg" asChild>
            <a href="/contact">
              Schedule Your Appointment Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            All services available by appointment only
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;