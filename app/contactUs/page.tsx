"use client";

import PagesLayout from "@/src/components/PagesLayout";
import Reveal from "@/src/components/Reveal";
import React from "react";

const ContactPage = () => {
  return (
    <PagesLayout>
      <main className="bg-[#FAF8F2] min-h-screen py-16 px-6 lg:px-24 pt-40">
        <Reveal className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-[#290303]">
            Contact <span className="text-[#290303]">Us</span>
          </h1>
          <div className="text-[#290303] mb-10 space-y-5">
            <p>
              Have a question or want to work with Journals by PA? We would love
              to hear from you.
            </p>
            <div>
              <h2 className="font-bold text-xl mb-1">Business Inquiries</h2>
              <p>
                For general business inquiries, email{" "}
                <a href="mailto:hello@journalsbypa.com" className="font-semibold underline hover:text-[#8b5e3c] transition-colors">
                  hello@journalsbypa.com
                </a>
              </p>
            </div>
            <p>
              Or fill out the form below, and we’ll get back to you within 24
              hours.
            </p>
          </div>
        </Reveal>

        <Reveal delay={150}>
        <form
          action="https://formsubmit.co/journalsbypa@gmail.com"
          method="POST"
          className="max-w-2xl mx-auto bg-white shadow-md rounded-2xl p-8 space-y-6"
        >
          
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_next"
            value="https://journal-by-pr-vi5t.vercel.app/thank-you"
          />
          <input type="hidden" name="_template" value="table" />

          <div>
            <label htmlFor="name" className="block text-left font-medium mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#290303] focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-left font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#290303] focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-left font-medium mb-2">
              Phone Number (include country code  )
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#290303] focus:outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-left font-medium mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#290303] focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="btn-animate w-full bg-[#290303] text-white font-semibold py-3 rounded-lg shadow border border-[#290303] hover:bg-[#FAF8F2] hover:text-[#290303]"
          >
            Send Us an Inquiry
          </button>
        </form>
        </Reveal>
      </main>
    </PagesLayout>
  );
};

export default ContactPage;
