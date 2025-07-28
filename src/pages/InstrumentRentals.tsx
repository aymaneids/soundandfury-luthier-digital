import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, CheckCircle, Users, GraduationCap, Star } from "lucide-react";

const InstrumentRentals = () => {
  const rentalPricing = [
    {
      instrument: "Violin",
      student: "$25/month",
      intermediate: "$45/month", 
      advanced: "$75/month",
      sizes: "1/16, 1/10, 1/8, 1/4, 1/2, 3/4, 4/4"
    },
    {
      instrument: "Viola",
      student: "$30/month",
      intermediate: "$55/month",
      advanced: "$85/month", 
      sizes: "12\", 13\", 14\", 15\", 15.5\", 16\""
    },
    {
      instrument: "Cello",
      student: "$65/month",
      intermediate: "$95/month",
      advanced: "$145/month",
      sizes: "1/8, 1/4, 1/2, 3/4, 4/4"
    },
    {
      instrument: "Double Bass",
      student: "$95/month", 
      intermediate: "$135/month",
      advanced: "$195/month",
      sizes: "1/8, 1/4, 1/2, 3/4, 4/4"
    }
  ];

  const benefits = [
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Professional Setup",
      description: "Every rental instrument receives a complete professional setup before delivery."
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "Quality Guarantee", 
      description: "We only rent instruments that meet our high standards for sound and playability."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Family Discounts",
      description: "10% discount for families renting multiple instruments."
    },
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "School Programs",
      description: "Special rates and bulk discounts available for schools and music programs."
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
              Instrument Rentals
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional quality rental instruments for students and professionals. 
              Flexible terms, exceptional service, and instruments you can trust.
            </p>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-heading font-bold text-primary text-center mb-12">
              Why Rent from Sound & Fury Violins?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center border-0 bg-gradient-card shadow-elegant">
                  <CardContent className="pt-6">
                    <div className="mx-auto w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mb-4 text-white">
                      {benefit.icon}
                    </div>
                    <h3 className="text-lg font-heading font-semibold text-primary mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Table */}
        <section className="py-16 bg-gradient-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-heading font-bold text-primary text-center mb-12">
              Rental Pricing
            </h2>
            <div className="overflow-x-auto">
              <div className="grid gap-6">
                {rentalPricing.map((item, index) => (
                  <Card key={index} className="border-0 bg-gradient-card shadow-elegant">
                    <CardHeader>
                      <CardTitle className="text-xl font-heading text-primary flex items-center justify-between">
                        {item.instrument}
                        <Badge variant="outline" className="text-xs">
                          Sizes: {item.sizes}
                        </Badge>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="text-center">
                          <div className="text-lg font-semibold text-primary mb-1">Student</div>
                          <div className="text-2xl font-heading font-bold text-warm-gold">{item.student}</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-semibold text-primary mb-1">Intermediate</div>
                          <div className="text-2xl font-heading font-bold text-warm-gold">{item.intermediate}</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-semibold text-primary mb-1">Advanced</div>
                          <div className="text-2xl font-heading font-bold text-warm-gold">{item.advanced}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            <div className="text-center mt-8">
              <p className="text-muted-foreground mb-4">
                * Includes bow, case, and basic accessories. First month due upfront.
              </p>
              <p className="text-muted-foreground">
                * Rent-to-own options available. Contact us for details.
              </p>
            </div>
          </div>
        </section>

        {/* Rental Process */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-heading font-bold text-primary text-center mb-12">
              How It Works
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  1
                </div>
                <h3 className="text-lg font-heading font-semibold text-primary mb-2">Contact Us</h3>
                <p className="text-muted-foreground">Call or email to discuss your rental needs and schedule an appointment.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  2
                </div>
                <h3 className="text-lg font-heading font-semibold text-primary mb-2">Try & Choose</h3>
                <p className="text-muted-foreground">Visit our workshop to try instruments and find the perfect fit.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  3
                </div>
                <h3 className="text-lg font-heading font-semibold text-primary mb-2">Start Playing</h3>
                <p className="text-muted-foreground">Take your instrument home and begin your musical journey.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Rental Inquiry Form */}
        <section className="py-16 bg-gradient-section">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="border-0 bg-gradient-card shadow-luxury">
              <CardHeader>
                <CardTitle className="text-2xl font-heading text-primary text-center">
                  Start Your Rental Inquiry
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Enter first name" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Enter last name" />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Enter email" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" placeholder="Enter phone number" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="instrument">Instrument</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select instrument" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="violin">Violin</SelectItem>
                        <SelectItem value="viola">Viola</SelectItem>
                        <SelectItem value="cello">Cello</SelectItem>
                        <SelectItem value="bass">Double Bass</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="size">Size</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="4/4">4/4 (Full Size)</SelectItem>
                        <SelectItem value="3/4">3/4</SelectItem>
                        <SelectItem value="1/2">1/2</SelectItem>
                        <SelectItem value="1/4">1/4</SelectItem>
                        <SelectItem value="1/8">1/8</SelectItem>
                        <SelectItem value="1/10">1/10</SelectItem>
                        <SelectItem value="1/16">1/16</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="level">Playing Level</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select playing level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="beginner">Beginner</SelectItem>
                      <SelectItem value="student">Student</SelectItem>
                      <SelectItem value="intermediate">Intermediate</SelectItem>
                      <SelectItem value="advanced">Advanced</SelectItem>
                      <SelectItem value="professional">Professional</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message">Additional Information</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your musical goals, rental duration needs, or any special requirements..."
                    rows={4}
                  />
                </div>

                <Button className="w-full" variant="luxury" size="lg">
                  Submit Rental Inquiry
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default InstrumentRentals;