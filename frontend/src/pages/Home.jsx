import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import Features from "../components/home/Features";
import Services from "../components/home/Services";
import WhyChoose from "../components/home/WhyChoose";
import HowItWorks from "../components/home/HowItWorks";
import Stats from "../components/home/Stats";
import Testimonials from "../components/home/Testimonials";
import FAQ from "../components/home/FAQ";
import Footer from "../components/layout/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Services />
      <WhyChoose />
      <HowItWorks />
      <Stats />
      <Testimonials />
      <FAQ />
      <>
  {/* All Sections */}

  <Footer />
</>
    </>
  );
}

export default Home;