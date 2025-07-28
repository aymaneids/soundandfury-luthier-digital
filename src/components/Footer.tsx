import { Phone, Mail, Clock, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-hero text-rich-brown-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-16">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="text-2xl font-heading font-bold text-warm-gold">
              Sound & Fury Violins
            </div>
            <p className="text-rich-brown-foreground/80 leading-relaxed">
              Expert craftsmanship for the modern musician. Specializing in sales, 
              rentals, and meticulous restoration of fine string instruments.
            </p>
            <div className="text-sm text-rich-brown-foreground/60">
              LLC - Professional Services
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-heading font-semibold text-warm-gold">
              Contact Us
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-warm-gold" />
                <a 
                  href="tel:7203648669" 
                  className="text-rich-brown-foreground/80 hover:text-warm-gold transition-colors"
                >
                  (720) 364-8669
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-warm-gold" />
                <a 
                  href="mailto:info@soundandfuryviolins.com" 
                  className="text-rich-brown-foreground/80 hover:text-warm-gold transition-colors"
                >
                  info@soundandfuryviolins.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-4 w-4 text-warm-gold mt-1" />
                <div className="text-rich-brown-foreground/80">
                  <div className="font-medium">Available by Appointment Only</div>
                  <div className="text-sm">Monday - Saturday</div>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-heading font-semibold text-warm-gold">
              Our Services
            </h3>
            <div className="space-y-2">
              <a 
                href="/services/sales" 
                className="block text-rich-brown-foreground/80 hover:text-warm-gold transition-colors"
              >
                Instruments for Sale
              </a>
              <a 
                href="/services/rentals" 
                className="block text-rich-brown-foreground/80 hover:text-warm-gold transition-colors"
              >
                Instrument Rentals
              </a>
              <a 
                href="/services/repairs" 
                className="block text-rich-brown-foreground/80 hover:text-warm-gold transition-colors"
              >
                Repairs & Restoration
              </a>
              <a 
                href="/services/repairs#school-services" 
                className="block text-rich-brown-foreground/80 hover:text-warm-gold transition-colors"
              >
                School Services
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-heading font-semibold text-warm-gold">
              Quick Links
            </h3>
            <div className="space-y-2">
              <a 
                href="/about" 
                className="block text-rich-brown-foreground/80 hover:text-warm-gold transition-colors"
              >
                About A. Wong
              </a>
              <a 
                href="/contact" 
                className="block text-rich-brown-foreground/80 hover:text-warm-gold transition-colors"
              >
                Contact & Appointments
              </a>
              <a 
                href="/contact#location" 
                className="block text-rich-brown-foreground/80 hover:text-warm-gold transition-colors"
              >
                Location & Directions
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-rich-brown-foreground/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-rich-brown-foreground/60 text-sm">
              © 2024 Sound and Fury Violins, LLC. All rights reserved.
            </div>
            <div className="text-rich-brown-foreground/60 text-sm">
              "Redefining standards for school instrument restoration"
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;