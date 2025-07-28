import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Award, Users, Clock } from "lucide-react";
import luthierPortrait from "@/assets/luthier-portrait.jpg";

const AboutTeaser = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
                Meet the Craftsman Behind the Music
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                A. Wong brings decades of expertise and an unwavering passion for string instruments 
                to every restoration, repair, and sale. His commitment to excellence has earned the trust 
                of musicians and institutions across Colorado.
              </p>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-warm-gold/10 mb-3 mx-auto">
                  <Award className="h-6 w-6 text-warm-gold" />
                </div>
                <div className="text-2xl font-heading font-bold text-primary">20+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-warm-gold/10 mb-3 mx-auto">
                  <Users className="h-6 w-6 text-warm-gold" />
                </div>
                <div className="text-2xl font-heading font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Happy Musicians</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-warm-gold/10 mb-3 mx-auto">
                  <Clock className="h-6 w-6 text-warm-gold" />
                </div>
                <div className="text-2xl font-heading font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">By Appointment</div>
              </div>
            </div>

            {/* Mission Statement */}
            <Card className="bg-gradient-card border-0 shadow-elegant">
              <CardContent className="p-6">
                <blockquote className="text-lg italic text-card-foreground text-center">
                  "Redefining the standards for school instrument restoration with the goal 
                  of inspiring students for generations to come."
                </blockquote>
                <div className="text-center text-sm text-muted-foreground mt-4">
                  — Mission Statement
                </div>
              </CardContent>
            </Card>

            {/* CTA Button */}
            <div>
              <Button variant="elegant" size="lg" className="group" asChild>
                <a href="/about">
                  Read My Story
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-luxury">
              <img
                src={luthierPortrait}
                alt="A. Wong, Expert Luthier"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rich-brown/20 via-transparent to-transparent" />
            </div>
            
            {/* Floating Card */}
            <Card className="absolute -bottom-6 -left-6 bg-card border-0 shadow-luxury max-w-xs">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="text-lg font-heading font-semibold text-card-foreground">
                    A. Wong
                  </div>
                  <div className="text-warm-gold font-medium">Master Luthier</div>
                  <div className="text-sm text-muted-foreground mt-2">
                    Specializing in fine string instrument restoration and repair
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTeaser;