import React from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Products from "./components/Products.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import Materials from "./components/Materials.jsx";
import Footer from "./components/Footer.jsx";
import WhatsAppBar from "./components/WhatsAppBar.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-paper text-ink font-sans pt-16">
      <Header />
      <Hero />
      <About />
      <Products />
      <HowItWorks />
      <Materials />
      <Footer />
      <WhatsAppBar />
      {/* espaço reservado pra barra fixa não cobrir o rodapé no mobile */}
      <div className="h-16 md:hidden" />
    </div>
  );
}
