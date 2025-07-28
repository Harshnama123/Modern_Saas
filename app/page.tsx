
import Image from "next/image";
import Hero from "./Hero";
import Features from "./features";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar"; // Ensure Navbar is imported correctly

export default function Home() {
  return (
    <>
      <Navbar/>
      <main id="home">
        <section id="home"><Hero /></section>
        <section id="features"><Features /></section>
        <section id="pricing"><Pricing /></section>
        <section id="testimonials"><Testimonials /></section>
        <section id="contact"><CTA /></section>
      </main>
      <Footer />
      {/* ...existing code... */}
    </>
  );
}
