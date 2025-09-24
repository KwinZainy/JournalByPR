import React from "react";
import PagesLayout from "@/src/components/PagesLayout";
import Hero from "@/src/components/Hero";
import Designs from "@/src/components/Designs";
import TheMan from "@/src/components/TheMan";
import Testimonials from "@/src/components/Testimonials";
import Mission from "@/src/components/Mission";

export default function Home() {
  return (
    <PagesLayout>
      <Hero />
      <Designs />
      <TheMan/>
      <Testimonials/>
      <Mission/>
    </PagesLayout>
  );
}
