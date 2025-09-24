"use client";

import PagesLayout from "@/src/components/PagesLayout";
import React, { useState } from "react";

const ContactPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    alert("Thank you for reaching out! We’ll get back to you soon.");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <PagesLayout>
    <main className="bg-[#FAF8F2] min-h-screen py-16 px-6 lg:px-24 pt-30">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
          Contact <span className="text-[#290303]">Us</span>
        </h1>
        <p className="text-gray-600 mb-10">
          We’d love to hear from you. Fill out the form below and we’ll be in
          touch.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-white shadow-md rounded-2xl p-8 space-y-6"
      >
        <div>
          <label htmlFor="name" className="block text-left font-medium mb-2">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
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
            value={form.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#290303] focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-left font-medium mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#290303] focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-left font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#290303] focus:outline-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#290303] text-white font-semibold py-3 rounded-lg shadow hover:bg-[#FAF8F2] hover:text-[#290303] transition"
        >
          Send Message
        </button>
      </form>
    </main>
    </PagesLayout>
  );
};

export default ContactPage;
