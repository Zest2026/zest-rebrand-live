import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import TrackRecord from "@/components/TrackRecord";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import Advisors from "@/components/Advisors";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen text-foreground bg-gradient-to-b from-[hsl(220,25%,7%)] via-[hsl(220,30%,10%)] via-[hsl(220,25%,8%)] to-[hsl(220,25%,7%)]">
      <Navigation />
      <main className="pt-20">
        <Hero />
        <Services />
        <TrackRecord />
        <Testimonials />
        <About />
        <Advisors />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
