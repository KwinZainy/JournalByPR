"use client";
import PagesLayout from "@/src/components/PagesLayout";
import React from "react";
import TheProducts from "./TheProducts";
import Reveal from "@/src/components/Reveal";


export default function ProductsPage() {
  return (
    <PagesLayout>
    <section className="min-h-screen flex justify-center bg-[#FAF8F2]  px-6">
      <div className="text-center mt-30">
        <Reveal>
        <h1 className="text-4xl md:text-5xl font-bold text-[#290303] mb-4 max-mobile:mb-2">
          {/* Our Products */}
          Our Products
        </h1>
        </Reveal>
        
        <TheProducts/>
      </div>
    </section>
    </PagesLayout>
  );
}
