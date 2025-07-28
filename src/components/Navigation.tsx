import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
  const location = useLocation();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const serviceLinks = [
    { href: "/services/sales", label: "Instruments for Sale" },
    { href: "/services/rentals", label: "Instrument Rentals" },
    { href: "/services/repairs", label: "Repairs & Restoration" },
  ];

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 shadow-elegant">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="text-2xl font-heading font-bold text-primary">
              Sound & Fury
            </div>
            <div className="text-sm text-muted-foreground font-medium">
              Violins, LLC
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-medium transition-colors duration-200 hover:text-primary ${
                  location.pathname === link.href
                    ? "text-primary"
                    : "text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-sm font-medium text-foreground hover:text-primary transition-colors duration-200">
                <span>Services</span>
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 bg-card border border-border shadow-luxury">
                {serviceLinks.map((link) => (
                  <DropdownMenuItem key={link.href} asChild>
                    <Link
                      to={link.href}
                      className="flex items-center px-4 py-2 text-sm text-card-foreground hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Contact Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button
              variant="hero"
              size="sm"
              className="hidden sm:flex items-center space-x-2"
              asChild
            >
              <a href="tel:7203648669">
                <Phone className="h-4 w-4" />
                <span>(720) 364-8669</span>
              </a>
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-card">
                <div className="flex flex-col space-y-6 mt-8">
                  <div className="text-xl font-heading font-bold text-primary">
                    Navigation
                  </div>
                  
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      onClick={() => setIsMobileOpen(false)}
                      className={`text-base font-medium transition-colors duration-200 hover:text-primary ${
                        location.pathname === link.href
                          ? "text-primary"
                          : "text-card-foreground"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}

                  <div className="border-t border-border pt-4">
                    <div className="text-lg font-semibold text-primary mb-3">
                      Services
                    </div>
                    {serviceLinks.map((link) => (
                      <Link
                        key={link.href}
                        to={link.href}
                        onClick={() => setIsMobileOpen(false)}
                        className="block text-base text-card-foreground hover:text-primary transition-colors duration-200 mb-3"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>

                  <Button
                    variant="hero"
                    className="w-full"
                    asChild
                  >
                    <a href="tel:7203648669">
                      <Phone className="h-4 w-4 mr-2" />
                      Call (720) 364-8669
                    </a>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;