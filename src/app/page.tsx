"use client";
import { CallToAction } from "@/sections/CallToAction";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import { Pricing } from "@/sections/Pricing";
import { ProductShowcase } from "@/sections/ProductShowcase";
import Testimonials from "@/sections/Testimonials";
import { useState } from "react";

export default function Home() {
  const [uiHover, setUiHover] = useState(false);
  
  return (
    <>
      <Hero setUiHover={setUiHover} />
      <LogoTicker />
      <ProductShowcase />
      <Pricing />
      <Testimonials />
      <CallToAction />
    </>
  );
}
