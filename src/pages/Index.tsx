import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import AboutPlant from "@/components/AboutPlant";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-1">
        <Hero />
        <Features />
        <AboutPlant />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
