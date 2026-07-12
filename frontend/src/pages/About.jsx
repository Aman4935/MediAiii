import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import AboutHero from "../components/about/AboutHero";
import OurStory from "../components/about/OurStory";
import MissionVision from "../components/about/MissionVision";
import FeaturesHighlight from "../components/about/FeaturesHighlight";
import FutureVision from "../components/about/FutureVision";
import CallToAction from "../components/about/CallToAction";

function About() {
  return (
    <>
      <Navbar />

      <main className="pt-20">
        <AboutHero />
        <OurStory />
        <MissionVision />
        <FeaturesHighlight />
        <FutureVision />
        <CallToAction />
      </main>

      <Footer />
    </>
  );
}

export default About;