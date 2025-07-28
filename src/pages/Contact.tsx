import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BookingForm from "@/components/BookingForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-primary mb-6">
              Contact & Appointments
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to discuss your string instrument needs? We're available by appointment 
              to provide personalized service and expert consultation.
            </p>
          </div>
        </section>

        {/* Contact Information & Booking */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-heading font-bold text-primary mb-8">
                  Get in Touch
                </h2>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Phone</h3>
                      <p className="text-muted-foreground">(720) 364-8669</p>
                      <p className="text-sm text-muted-foreground">Available by appointment only</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Email</h3>
                      <p className="text-muted-foreground">info@soundandfuryviolins.com</p>
                      <p className="text-sm text-muted-foreground">We respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Location</h3>
                      <p className="text-muted-foreground">Denver Metro Area</p>
                      <p className="text-sm text-muted-foreground">Exact address provided upon appointment</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Hours</h3>
                      <p className="text-muted-foreground">By Appointment Only</p>
                      <p className="text-sm text-muted-foreground">Monday - Saturday, flexible scheduling</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <Button variant="hero" size="lg" className="w-full sm:w-auto" asChild>
                    <a href="tel:7203648669">
                      <Phone className="h-5 w-5 mr-2" />
                      Call Now: (720) 364-8669
                    </a>
                  </Button>
                  
                  <div className="text-sm text-muted-foreground">
                    <p className="mb-2"><strong>Emergency Repairs:</strong> Same-day service available for urgent needs</p>
                    <p><strong>Consultations:</strong> Free initial consultation for repair assessments</p>
                  </div>
                </div>
              </div>

              {/* Booking Form */}
              <BookingForm />
            </div>
          </div>
        </section>

        {/* Quick Contact Form */}
        <section className="py-16 bg-gradient-section">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="border-0 bg-gradient-card shadow-luxury">
              <CardHeader>
                <CardTitle className="text-2xl font-heading text-primary text-center">
                  Quick Message
                </CardTitle>
                <p className="text-center text-muted-foreground">
                  Have a question? Send us a quick message and we'll get back to you.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="quickFirstName">First Name</Label>
                    <Input id="quickFirstName" placeholder="Enter first name" />
                  </div>
                  <div>
                    <Label htmlFor="quickLastName">Last Name</Label>
                    <Input id="quickLastName" placeholder="Enter last name" />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="quickEmail">Email</Label>
                  <Input id="quickEmail" type="email" placeholder="Enter your email" />
                </div>
                
                <div>
                  <Label htmlFor="quickSubject">Subject</Label>
                  <Input id="quickSubject" placeholder="What can we help you with?" />
                </div>
                
                <div>
                  <Label htmlFor="quickMessage">Message</Label>
                  <Textarea 
                    id="quickMessage" 
                    placeholder="Tell us about your needs, questions, or how we can help..."
                    rows={4}
                  />
                </div>

                <Button className="w-full" variant="luxury" size="lg">
                  Send Message
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

export default Contact;