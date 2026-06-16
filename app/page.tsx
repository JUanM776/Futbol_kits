import Header from "./components/Header";
import Hero from "./components/Hero";
import Archives from "./components/Archives";
import Catalog from "./components/Catalog";
import VideoShowcase from "./components/VideoShowcase";
import HowToBuy from "./components/HowToBuy";
import WhyUs from "./components/WhyUs";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Archives />
        <Catalog />
        <VideoShowcase />
        <HowToBuy />
        <WhyUs />
        <About />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}








