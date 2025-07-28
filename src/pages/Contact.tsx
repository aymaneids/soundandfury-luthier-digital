import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, Clock, MapPin, MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary mb-6">
                Contact & Appointments
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Ready to discuss your string instrument needs? We're available by appointment 
                to provide personalized service and expert consultation.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information & Form */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-heading font-bold text-primary mb-6">
                    Get in Touch
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    We believe in providing personalized attention to every musician. 
                    All services are available by appointment only to ensure you receive 
                    the dedicated time and expertise your instruments deserve.
                  </p>
                </div>

                {/* Contact Cards */}
                <div className="space-y-6">
                  <Card className="bg-gradient-card border-0 shadow-elegant">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-warm-gold/10">
                          <Phone className="h-6 w-6 text-warm-gold" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-card-foreground mb-2">
                            Phone
                          </h3>
                          <a 
                            href="tel:7203648669"
                            className="text-lg text-primary hover:text-warm-gold transition-colors font-medium"
                          >
                            (720) 364-8669
                          </a>
                          <p className="text-sm text-muted-foreground mt-1">
                            Call for immediate assistance or questions
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-card border-0 shadow-elegant">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-warm-gold/10">
                          <Mail className="h-6 w-6 text-warm-gold" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-card-foreground mb-2">
                            Email
                          </h3>
                          <a 
                            href="mailto:info@soundandfuryviolins.com"
                            className="text-lg text-primary hover:text-warm-gold transition-colors font-medium"
                          >
                            info@soundandfuryviolins.com
                          </a>
                          <p className="text-sm text-muted-foreground mt-1">
                            Send detailed inquiries and photos
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-card border-0 shadow-elegant">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-warm-gold/10">
                          <Clock className="h-6 w-6 text-warm-gold" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-card-foreground mb-2">
                            Hours
                          </h3>
                          <div className="text-card-foreground">
                            <div className="font-medium text-primary">Available by Appointment Only</div>
                            <div className="text-sm text-muted-foreground mt-1">
                              Monday - Saturday<br />
                              Flexible scheduling available
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Appointment Request Form */}
              <div>
                <Card className="bg-gradient-card border-0 shadow-luxury">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3 text-card-foreground">
                      <MessageSquare className="h-6 w-6 text-warm-gold" />
                      <span className="text-2xl font-heading">Request an Appointment</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name</Label>
                          <Input 
                            id="firstName" 
                            placeholder="Your first name"
                            className="border-border focus:border-warm-gold"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input 
                            id="lastName" 
                            placeholder="Your last name"
                            className="border-border focus:border-warm-gold"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder="your.email@example.com"
                          className="border-border focus:border-warm-gold"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input 
                          id="phone" 
                          type="tel" 
                          placeholder="(555) 123-4567"
                          className="border-border focus:border-warm-gold"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="service">Service Needed</Label>
                        <select 
                          id="service"
                          className="w-full px-3 py-2 border border-border rounded-md focus:border-warm-gold focus:outline-none focus:ring-2 focus:ring-warm-gold/20 bg-background"
                        >
                          <option value="">Select a service</option>
                          <option value="sales">Instrument Sales</option>
                          <option value="rentals">Instrument Rentals</option>
                          <option value="repairs">Repairs & Restoration</option>
                          <option value="school">School Services</option>
                          <option value="consultation">General Consultation</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea 
                          id="message" 
                          placeholder="Please describe your instrument needs, preferred appointment times, or any specific questions..."
                          rows={5}
                          className="border-border focus:border-warm-gold"
                        />
                      </div>

                      <Button variant="luxury" size="lg" className="w-full">
                        Send Appointment Request
                      </Button>

                      <p className="text-sm text-muted-foreground text-center">
                        We'll respond within 24 hours to confirm your appointment
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section id="location" className="py-20 bg-gradient-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-heading font-bold text-primary mb-6">
                Visit Our Workshop
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Located in Colorado, our workshop provides a comfortable environment 
                for consultation, instrument selection, and service discussions.
              </p>
            </div>

            <Card className="bg-gradient-card border-0 shadow-luxury max-w-4xl mx-auto">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-xl font-heading font-semibold text-card-foreground mb-4">
                      Workshop Location
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <MapPin className="h-5 w-5 text-warm-gold mt-1" />
                        <div>
                          <div className="font-medium text-card-foreground">Colorado Location</div>
                          <div className="text-sm text-muted-foreground">
                            Exact address provided upon appointment confirmation
                          </div>
                        </div>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Our workshop location details will be shared when you schedule 
                        your appointment to ensure personalized service and privacy.
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-muted/30 h-48 rounded-lg flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <MapPin className="h-12 w-12 mx-auto mb-2 text-warm-gold" />
                      <div>Map will be provided</div>
                      <div className="text-sm">upon appointment confirmation</div>
                    </div>
                  </div>
                </div>
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