import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Martinez",
      role: "Professional Violinist",
      content: "A. Wong restored my grandfather's 1910 violin to its former glory. The attention to detail and respect for the instrument's history was remarkable. It sounds better than ever.",
      rating: 5,
    },
    {
      name: "Jefferson High School",
      role: "Music Department",
      content: "Sound and Fury's school instrument restoration program has been transformational. Our student instruments are now in excellent condition, inspiring better practice and performance.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Music Student",
      content: "Started with a rental violin and eventually purchased it. The quality and setup made learning so much easier. A. Wong's expertise helped me choose the perfect instrument.",
      rating: 5,
    },
    {
      name: "Lisa Thompson",
      role: "Parent & Music Teacher",
      content: "Exceptional service and knowledge. A. Wong took time to explain everything and made sure we found the right instrument for my daughter's advancing skills. Highly recommended.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
            What Musicians Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The trust of musicians, students, and educators drives our commitment to excellence. 
            Here's what our clients have to say about their experience.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-0 shadow-elegant hover:shadow-luxury transition-all duration-300"
            >
              <CardContent className="p-8">
                <div className="space-y-6">
                  {/* Quote Icon */}
                  <div className="flex items-center justify-between">
                    <Quote className="h-8 w-8 text-warm-gold/50" />
                    <div className="flex items-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-warm-gold fill-current" />
                      ))}
                    </div>
                  </div>

                  {/* Testimonial Content */}
                  <blockquote className="text-card-foreground leading-relaxed italic">
                    "{testimonial.content}"
                  </blockquote>

                  {/* Author */}
                  <div className="border-t border-border pt-4">
                    <div className="font-semibold text-card-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-warm-gold">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-heading font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Satisfied Musicians</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-heading font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">School Programs Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-heading font-bold text-primary mb-2">20+</div>
              <div className="text-muted-foreground">Years of Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;