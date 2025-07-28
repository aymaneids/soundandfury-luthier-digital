import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Target, Heart, ArrowRight } from "lucide-react";
import luthierPortrait from "@/assets/luthier-portrait.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary mb-6">
                The Craftsman Behind the Music
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Meet A. Wong, the master luthier whose passion for string instruments 
                and dedication to excellence drives Sound and Fury Violins, LLC.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <img
                  src={luthierPortrait}
                  alt="A. Wong in his workshop"
                  className="w-full rounded-2xl shadow-luxury"
                />
              </div>
              
              <div className="space-y-8">
                <Card className="bg-gradient-card border-0 shadow-elegant">
                  <CardContent className="p-8">
                    <blockquote className="text-2xl font-heading italic text-center text-card-foreground">
                      "Redefining the standards for school instrument restoration with the goal 
                      of inspiring students for generations to come."
                    </blockquote>
                    <div className="text-center text-warm-gold font-medium mt-4">
                      — A. Wong, Founder
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-heading font-bold text-primary mb-8">
                A Passion Born from Music
              </h2>
              
              <div className="space-y-6 text-foreground leading-relaxed">
                <p>
                  A. Wong's journey into the world of string instruments began not just as a craftsman, 
                  but as someone who understood the profound connection between musician and instrument. 
                  With over two decades of experience in the field, he has developed an unparalleled 
                  expertise in the restoration, repair, and sale of fine string instruments.
                </p>
                
                <p>
                  What sets A. Wong apart is his deep understanding that every instrument has a story 
                  to tell and music to make. Whether it's a treasured family heirloom passed down through 
                  generations or a student's first violin, each instrument receives the same meticulous 
                  attention and care.
                </p>
                
                <p>
                  His specialized focus on school instrument restoration stems from a belief that quality 
                  instruments are essential for inspiring young musicians. By redefining the standards 
                  for school instrument care, he ensures that students have access to instruments that 
                  not only function properly but inspire excellence and foster a lifelong love of music.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gradient-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-heading font-bold text-primary text-center mb-16">
              Our Core Values
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-gradient-card border-0 shadow-elegant text-center">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-warm-gold/10 mb-6 mx-auto">
                    <Award className="h-8 w-8 text-warm-gold" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-card-foreground mb-4">
                    Excellence
                  </h3>
                  <p className="text-muted-foreground">
                    Every instrument that passes through our workshop receives the highest standard 
                    of care and attention to detail.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-card border-0 shadow-elegant text-center">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-warm-gold/10 mb-6 mx-auto">
                    <Target className="h-8 w-8 text-warm-gold" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-card-foreground mb-4">
                    Precision
                  </h3>
                  <p className="text-muted-foreground">
                    Technical expertise combined with artistic sensibility ensures optimal 
                    performance and longevity for every instrument.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-card border-0 shadow-elegant text-center">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-warm-gold/10 mb-6 mx-auto">
                    <Heart className="h-8 w-8 text-warm-gold" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-card-foreground mb-4">
                    Passion
                  </h3>
                  <p className="text-muted-foreground">
                    A genuine love for string instruments and the music they create drives 
                    everything we do.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-heading font-bold text-primary mb-6">
              Ready to Experience the Difference?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Whether you need an instrument repaired, are looking to rent or purchase, 
              or want to learn about our school services, we're here to help.
            </p>
            <Button variant="luxury" size="lg" asChild>
              <a href="/contact">
                Schedule Your Appointment
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

export default About;