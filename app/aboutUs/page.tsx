import PagesLayout from "@/src/components/PagesLayout";
import React from "react";

const AboutPage = () => {
  return (
    <PagesLayout>
    <main className=" min-h-screen py-10 px-6 lg:px-24 bg-[#FAF8F2] ">
      <div className="max-w-4xl mx-auto text-center">
      <div className=" flex mt-40 items-end mb-5 justify-center max-tablet:mt-30 max-mobile:mt-20">
        <h1 className=" text-5xl font-bold max-tablet:text-2xl max-mobile:text-[20px] text-[#290303]">About Journals by PA</h1>
        
      </div>

        <div className="space-y-8 text-[30px] text-[#290303] leading-relaxed">
          <p>
            Journals by PA exists to help purpose driven people bring their
            journal ideas to life beautifully and intentionally. Each journal
            is custom designed to reflect the heart of the creator and the
            purpose behind the pages.
          </p>

          <p>
            From guided reflections to themed workbooks, devotionals, and
            planners, our focus is on creating digital journals that not only
            look good but feel right — thoughtful, clean, and aligned with the
            message inside.
          </p>

          <p>
            What started as a simple project has grown into a service trusted by
            clients who want more than templates. They want journals that carry
            meaning, elegance, and clarity.
          </p>

          <p className="font-medium italic text-[#290303]">
            Every design is tailored. Every page is intentional.
          </p>
        </div>
      </div>
    </main>
    </PagesLayout>
  );
};

export default AboutPage;
