import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, Wrench, GraduationCap, Award, Clock, CheckCircle } from "lucide-react";
import instrumentsGallery from "@/assets/instruments-gallery.jpg";

const RepairsRestoration = () => {
  const services = [
    {
      category: "General Repairs",
      services: [
        "Sound post adjustments",
        "Bridge fitting and adjustments", 
        "String replacement and setup",
        "Tuning peg adjustments",
        "Tailpiece and chin rest fitting",
        "Fingerboard reconditioning"
      ]
    },
    {
      category: "Advanced Restoration",
      services: [
        "Crack repairs and prevention",
        "Varnish restoration and touch-ups",
        "Structural repairs and reinforcement",
        "Neck resetting and alignment",
        "Bass bar and sound post replacement",
        "Complete instrument overhauls"
      ]
    },
    {
      category: "School Instruments",
      services: [
        "Bulk repair programs",
        "Emergency repair services",
        "Preventive maintenance",
        "Rental fleet restoration",
        "Quick turnaround repairs",
        "Educational discounts"
      ]
    }
  ];

  const beforeAfter = [
    {
      title: "Antique Violin Restoration",
      description: "Complete restoration of a 1890s violin including crack repairs, varnish restoration, and setup.",
      before: instrumentsGallery,
      after: instrumentsGallery
    },
    {
      title: "School Cello Program",
      description: "Restoration of 15 cellos for local middle school orchestra program.",
      before: instrumentsGallery,
      after: instrumentsGallery
    },
    {
      title: "Professional Viola Repair",
      description: "Sound post adjustment and bridge fitting for professional musician.",
      before: instrumentsGallery,
      after: instrumentsGallery
    }
  ];

  const highlights = [
    {
      icon: <Award className="h-6 w-6" />,
      title: "Expert Craftsmanship",
      description: "Over 20 years of experience in string instrument repair and restoration."
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Quick Turnaround",
      description: "Most repairs completed within 1-2 weeks, emergency services available."
    },
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "School Specialists",
      description: "Redefining standards for school instrument restoration to inspire students."
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Warranty Included",
      description: "All repairs come with our satisfaction guarantee and warranty."
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
              Repairs & Restoration
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Expert repair and restoration services for all string instruments. 
              Specializing in school instrument restoration to inspire the next generation of musicians.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <a href="#quote-form">
                  Request Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button variant="luxury" size="lg" asChild>
                <a href="tel:7203648669">
                  Emergency Repairs
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-16 bg-gradient-section">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <blockquote className="text-2xl md:text-3xl font-heading font-medium text-primary mb-6 italic">
              "Redefining the standards for school instrument restoration with the goal of inspiring students for generations to come."
            </blockquote>
            <p className="text-lg text-muted-foreground">
              Our mission drives everything we do. Every repair, every restoration, 
              every adjustment is performed with the knowledge that we're helping to shape the musical future.
            </p>
          </div>
        </section>

        {/* Highlights */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-heading font-bold text-primary text-center mb-12">
              Why Choose Our Repair Services?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {highlights.map((highlight, index) => (
                <Card key={index} className="text-center border-0 bg-gradient-card shadow-elegant">
                  <CardContent className="pt-6">
                    <div className="mx-auto w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mb-4 text-white">
                      {highlight.icon}
                    </div>
                    <h3 className="text-lg font-heading font-semibold text-primary mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {highlight.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 bg-gradient-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-heading font-bold text-primary text-center mb-12">
              Our Services
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((category, index) => (
                <Card key={index} className="border-0 bg-gradient-card shadow-elegant">
                  <CardHeader>
                    <CardTitle className="text-xl font-heading text-primary flex items-center">
                      <Wrench className="h-5 w-5 mr-2" />
                      {category.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {category.services.map((service, serviceIndex) => (
                        <li key={serviceIndex} className="flex items-start">
                          <CheckCircle className="h-4 w-4 mt-0.5 mr-2 text-warm-gold flex-shrink-0" />
                          <span className="text-sm text-card-foreground">{service}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Before/After Gallery */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-heading font-bold text-primary text-center mb-12">
              Before & After Gallery
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {beforeAfter.map((project, index) => (
                <Card key={index} className="overflow-hidden border-0 bg-gradient-card shadow-elegant">
                  <div className="grid grid-cols-2">
                    <div className="relative">
                      <img 
                        src={project.before} 
                        alt="Before restoration"
                        className="w-full h-32 object-cover"
                      />
                      <Badge className="absolute top-2 left-2 bg-destructive text-destructive-foreground">
                        Before
                      </Badge>
                    </div>
                    <div className="relative">
                      <img 
                        src={project.after} 
                        alt="After restoration"
                        className="w-full h-32 object-cover"
                      />
                      <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">
                        After
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-lg font-heading font-semibold text-primary mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {project.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Quote Request Form */}
        <section id="quote-form" className="py-16 bg-gradient-section">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="border-0 bg-gradient-card shadow-luxury">
              <CardHeader>
                <CardTitle className="text-2xl font-heading text-primary text-center">
                  Request a Repair Quote
                </CardTitle>
                <p className="text-center text-muted-foreground">
                  Fill out this form for a detailed quote on your instrument repair needs.
                </p>
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
                    <Label htmlFor="instrument">Instrument Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select instrument" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="violin">Violin</SelectItem>
                        <SelectItem value="viola">Viola</SelectItem>
                        <SelectItem value="cello">Cello</SelectItem>
                        <SelectItem value="bass">Double Bass</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="urgency">Urgency</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select urgency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="routine">Routine (2-3 weeks)</SelectItem>
                        <SelectItem value="standard">Standard (1-2 weeks)</SelectItem>
                        <SelectItem value="rush">Rush (3-5 days)</SelectItem>
                        <SelectItem value="emergency">Emergency (same day)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="repairType">Type of Repair Needed</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select repair type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="setup">Setup/Adjustment</SelectItem>
                      <SelectItem value="bridge">Bridge Work</SelectItem>
                      <SelectItem value="soundpost">Sound Post</SelectItem>
                      <SelectItem value="cracks">Crack Repair</SelectItem>
                      <SelectItem value="restoration">Full Restoration</SelectItem>
                      <SelectItem value="school">School Instrument Restoration</SelectItem>
                      <SelectItem value="other">Other/Multiple</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="description">Detailed Description</Label>
                  <Textarea 
                    id="description" 
                    placeholder="Please describe the issues with your instrument, any damage you've noticed, and your repair goals..."
                    rows={5}
                  />
                </div>

                <div>
                  <Label htmlFor="timeline">Preferred Timeline</Label>
                  <Input id="timeline" placeholder="When do you need the repair completed?" />
                </div>

                <Button className="w-full" variant="luxury" size="lg">
                  Submit Repair Request
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  We'll respond within 24 hours with a detailed quote and timeline for your repair.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default RepairsRestoration;