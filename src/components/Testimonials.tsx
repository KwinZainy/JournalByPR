import React from "react";
import Stars from "./Stars";

const testimonials = [
  "“Working with Journals by PA on the Legacy Workbook project was such a great experience. What had been sitting on the back burner for so long finally came to life, and the impact has been incredible. It truly helped move RiceGlobalEnterprise to the next level.”  - RiceGlobalEnterprise LLC",
  "“During a tough waiting season, the While I Wait Devotional Journal helped me shift my mindset. Instead of feeling frustrated all the time, I started seeing it as a period to grow and spend more time with God. The messages always felt so personal, like they were written just for me. It became something I looked forward to every day, and it truly made that season feel more meaningful. I’m grateful for it” – Gloria"
];

const Testimonials = () => {
  return (
    <section className=" py-26 px-6 lg:px-20 bg-[#FAF8F2] ">
      <div className=" flex flex-col items-center">
        <h2 className="text-3xl lg:text-5xl font-bold text-center mb-7 text-[#290303]">
          Testimonials
        </h2>
        <p><Stars /></p>

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
