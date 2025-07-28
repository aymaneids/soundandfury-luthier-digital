import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ServicesOverview from "@/components/ServicesOverview";
import AboutTeaser from "@/components/AboutTeaser";
import FeaturedInstruments from "@/components/FeaturedInstruments";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <ServicesOverview />
        <AboutTeaser />
        <FeaturedInstruments />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
