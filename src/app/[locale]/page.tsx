import Header from "@/app/sections/Header";
import Hero from "@/app/sections/Hero";
import Logos from "@/app/sections/Logos";
import Products from "@/app/sections/Products";
import Pricing from "@/app/sections/Pricing";
import Testimonials from "@/app/sections/Testimonials";
import CallToAction from "@/app/sections/CallToAction";
import Footer from "@/app/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Logos />
      <Products />
      <Pricing />
      <Testimonials />
      <CallToAction />
      <Footer />
    </>
  );
}
