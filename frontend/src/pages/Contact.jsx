import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import ContactHero from "../components/contact/ContactHero";
import ContactCards from "../components/contact/ContactCards";
import ContactForm from "../components/contact/ContactForm";
import FAQ from "../components/contact/FAQ";
import ContactCTA from "../components/contact/ContactCTA";

function Contact() {
  return (
    <>
      <Navbar />

      <main className="pt-20">

        <ContactHero />

        <ContactCards />

        <ContactForm />

        <FAQ />

        <ContactCTA />

      </main>

      <Footer />
    </>
  );
}

export default Contact;