import Navbar from "./Navbar";
import Hero from "./components/hero/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import WhyUs from "./components/WhyUs";
import Stats from "./components/Stats";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-[#050505] overflow-x-hidden">
      <Navbar />

      <Hero />

      <Services />

      <Portfolio />

      <WhyUs />

      <Stats />

      <Pricing />

      <Testimonials />

      <FAQ />

      <Contact />

      <Footer />
    </main>
  );
}