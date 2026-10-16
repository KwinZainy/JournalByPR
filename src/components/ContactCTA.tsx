import React from "react";
import Link from "next/link";
import Reveal from "./Reveal";

const ContactCTA = () => {
  return (
    <section className="bg-[#FAF8F2] px-6 pb-20">
      <Reveal>
        <div className="max-w-4xl mx-auto bg-[#290303] text-[#FAF8F2] rounded-2xl px-10 py-14 text-center max-mobile:px-5 max-mobile:py-10">
          <h2 className="text-4xl font-bold mb-4 max-mobile:text-2xl">
            Have a question or want to work with us?
          </h2>
          <p className="text-lg mb-8">We would love to hear from you.</p>
          <Link
            href="/contactUs"
            className="btn-animate inline-block bg-[#FAF8F2] text-[#290303] border border-[#FAF8F2] px-8 py-4 rounded-xl font-semibold hover:bg-[#290303] hover:text-[#FAF8F2]"
          >
            Contact Us
          </Link>
        </div>
      </Reveal>
    </section>
  );
};

export default ContactCTA;
