"use client";
import React from "react";
import Link from "next/link";
import PagesLayout from "@/src/components/PagesLayout";

export default function ServicesPage() {
  const services = [
    {
      title: "Personalized Devotionals",
      description: "Deepen your spiritual journey with devotionals tailored to your unique needs.",
    },
    {
      title: "Tailor-Made Reflection Guides",
      description: "Guides crafted just for you to help you reflect and grow intentionally.",
    },
    {
      title: "Interactive Workbooks Made for You",
      description: "Engaging workbooks designed to support your learning and personal development.",
    },
    {
      title: "Planners Designed Just for You",
      description: "Organize your goals and daily activities with planners built around your lifestyle.",
    },
  ];

  return (
    <PagesLayout>
    <section className="min-h-screen bg-[#FAF8F2] py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-5xl mx-auto text-center mt-27">
        <h1 className="text-4xl md:text-5xl font-bold text-[#290303] mb-6">
          Our Services
        </h1>
        <p className="text-lg text-[#290303] mb-12">
          Want to create your digital journal? Choose a service that fits your journey.
        </p>

       
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="rounded-2xl shadow-md bg-white p-6 text-left hover:shadow-lg transition"
            >
              <h2 className="text-2xl font-semibold text-[#290303] mb-3">
                {service.title}
              </h2>
              <p className="text-[#290303]">{service.description}</p>
            </div>
          ))}
        </div>

        
        <div className="mt-16">
          <Link
            href="https://wa.me/c/2349130666766"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#290303] text-white px-8 py-4 rounded-xl shadow-md hover:bg-[#FAF8F2] hover:text-[#290303] transition"
          >
            Start Your Personalized Journal Journey
          </Link>
        </div>
      </div>
    </section>
    </PagesLayout>
  );
}
