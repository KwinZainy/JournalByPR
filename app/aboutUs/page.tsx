import PagesLayout from "@/src/components/PagesLayout";
import Reveal from "@/src/components/Reveal";
import React from "react";

const AboutPage = () => {
  return (
    <PagesLayout>
      <main className=" min-h-screen py-10 px-6 lg:px-24 bg-[#FAF8F2] ">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal className=" flex mt-40 items-end mb-5 justify-center max-tablet:mt-30 max-mobile:mt-40">
            <h1 className=" text-5xl font-bold max-tablet:text-3xl max-mobile:text-[28px] text-[#290303]">About Journals by PA</h1>

          </Reveal>

          <div className="space-y-8 text-[30px] max-mobile:text-[20px] text-[#290303] leading-relaxed">
            <Reveal><p>
              At Journals by PA, we help purpose-driven people (Creators, Coaches & Brands) bring their journal ideas to life beautifully and intentionally. We turn your knowledge into sellable products that elevate your brand.
            </p></Reveal>

            <Reveal><p>
              From guided reflections to themed workbooks, devotionals, and planners, each journal is custom-designed to reflect the heart of the creator and the purpose behind every page. Our journals are thoughtful, elegant, and meaningful, giving you a seamless journaling experience wherever you are.
            </p></Reveal>

            <Reveal><p>
              Trusted by clients who want more than templates, we create journals that inspire, motivate, and carry clarity and purpose. Every design is tailored, every page is intentional, your ideas, your story, beautifully brought to life.
            </p></Reveal>
            <Reveal><p>
              As a service-and-product brand, we offer both custom journal design and ready-to-use journals to meet your needs.
            </p></Reveal>
            <Reveal><p className="font-medium italic text-[#290303]">
              Every design is tailored. Every page is intentional.
            </p></Reveal>
          </div>
        </div>
      </main>
    </PagesLayout>
  );
};

export default AboutPage;
