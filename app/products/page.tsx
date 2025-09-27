"use client";
import PagesLayout from "@/src/components/PagesLayout";
import React from "react";

export default function ProductsPage() {
  return (
    <PagesLayout>
    <section className="min-h-screen flex justify-center bg-[#FAF8F2]  px-6">
      <div className="text-center mt-50">
        <h1 className="text-4xl md:text-5xl font-bold text-[#290303] mb-4">
          Our Products
        </h1>
        <p className="text-[40px] text-[#290303] mt-10">
           Coming Soon Stay tuned for amazing products we’re crafting just for you!
        </p>
      </div>
    </section>
    </PagesLayout>
  );
}
