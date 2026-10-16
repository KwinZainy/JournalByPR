import React from "react";
import PagesLayout from "@/src/components/PagesLayout";
import Hero from "@/src/components/Hero";
import Explore from "@/src/components/Explore";
import Designs from "@/src/components/Designs";
import Testimonials from "@/src/components/Testimonials";
import Mission from "@/src/components/Mission";
import ContactCTA from "@/src/components/ContactCTA";

export default function Home() {
  return (
    <PagesLayout>
      <Hero />
      <Explore />
      <Designs />
      <Mission/>
      <Testimonials/>
      <ContactCTA />
    </PagesLayout>
  );
}
