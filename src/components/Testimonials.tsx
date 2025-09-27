import React from "react";
import Stars from "./Stars";

const testimonials = [
  "“Working with Journals by PA was seamless. I shared my idea, and it came to life more beautifully than I imagined. The design was intentional, clean, and truly aligned with my vision.” – Happy Client",
  "“I wasn’t even done with my first journal and I already knew I wanted to do another. That says it all. Journals by PA just gets it.” – Repeat Client",
  "“The attention to detail was outstanding. Every page felt carefully crafted and unique.” – Creative Director",
  "“I’ve never felt so connected to my journaling process. It feels personal and inspiring.” – Daily Writer",
  "“Professional, polished, and delivered on time. Couldn’t have asked for more.” – Corporate Client",
  "“From idea to execution, the journey was smooth and enjoyable. Highly recommended!” – Satisfied Customer",
];

const Testimonials = () => {
  return (
    <section className=" py-26 px-6 lg:px-20 bg-[#FAF8F2] ">
      <div className=" flex flex-col items-center">
      <h2 className="text-3xl lg:text-5xl font-bold text-center mb-7 text-[#290303]">
        Testimonials
      </h2>
      <p><Stars/></p>
      
      </div>
      <div className="flex flex-col gap-10 max-w-3xl mx-auto">
        {testimonials.map((t, i) => (
          <p key={i} className="text-[23px] font-medium text-[#290303] italic text-center">
            {t}
          </p>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
