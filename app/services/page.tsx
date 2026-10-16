"use client";
import React from "react";
import Link from "next/link";
import PagesLayout from "@/src/components/PagesLayout";
import TestimonialBlock, { Quote } from "@/src/components/TestimonialBlock";
import Reveal from "@/src/components/Reveal";
import { buttonClass } from "@/src/components/buttonStyles";

const WHATSAPP_LINK =
  "https://wa.me/2349130666766?text=Hi%20Journals%20by%20PA,%20I’m%20interested%20in%20creating%20a%20digital/physical%20journal.%20I%20would%20love%20to%20know%20how%20it%20works.";

interface ServiceDetail {
  title: string;
  intro: string;
  body: string[];
  offerings?: { name: string; description: string }[];
  resultLabel: string;
  result: string;
  testimonial?: Quote;
  closingHeading: string;
  closingText: string;
  button?: { label: string; href: string };
  email?: { address: string; action: string };
}

const serviceDetails: ServiceDetail[] = [
  {
    title: "Journal Blueprint Session",
    intro: "Have an idea for a journal or guided resource but need clarity on how to bring it together?",
    body: [
      "The Journal Blueprint Session is a focused strategy session designed to help you move from an idea to a clear plan.",
      "We’ll explore your concept, audience, purpose, content structure, design direction, pricing, and next steps, giving you a practical blueprint to guide the development of your resource.",
    ],
    resultLabel: "You’ll leave with:",
    result: "A clearer concept, structured direction, and an actionable roadmap for bringing your idea to life.",
    testimonial: {
      paragraphs: [
        "“What I appreciated most was that she did not just tell me what to do; she made sure I truly understood why I was doing it…”",
      ],
      author: "Laura",
    },
    closingHeading: "Ready to work through your idea?",
    closingText: "Book a Journal Blueprint Session and let’s map out your resource together.",
    button: { label: "Book a Blueprint Session", href: "https://selar.com/the_journal_blueprint_session" },
  },
  {
    title: "Journal Design",
    intro: "Have your content ready and need a professional design to bring it together?",
    body: [
      "Our Journal Design service transforms your existing content into a polished, engaging, and cohesive resource that reflects your brand and serves your audience.",
      "From the cover and interior layout to typography, page structure, and visual direction, we create a thoughtful design for your resource, whether it’s intended for digital use, print, or both.",
    ],
    resultLabel: "You’ll receive:",
    result: "A professionally designed, publication-ready resource that is visually cohesive and easy for your audience to use.",
    testimonial: {
      paragraphs: [
        "“Working with Journals by PA on the Legacy Workbook project was such a great experience. What had been sitting on the back burner for so long finally came to life, and the impact has been incredible. It truly helped move RiceGlobalEnterprise to the next level.”",
      ],
      author: "RiceGlobalEnterprise LLC",
    },
    closingHeading: "Ready to bring your content together?",
    closingText: "Let’s turn your completed content into a polished, professionally designed resource that’s ready to share, print, or publish.",
    button: { label: "Start Your Design", href: WHATSAPP_LINK },
  },
  {
    title: "Journal Development & Design",
    intro: "Have an idea but need help developing the content and bringing the finished resource to life?",
    body: [
      "Our Journal Development & Design service takes your resource from concept to publication-ready product.",
      "We work with you to shape the concept, define the purpose and audience, develop the content structure, refine prompts and exercises, provide editorial support, and create a custom design that brings everything together.",
      "This is our end-to-end service for clients who want support not just with how their resource looks, but with how it is developed and experienced by their audience.",
    ],
    resultLabel: "You’ll receive:",
    result: "A thoughtfully developed and professionally designed resource that is aligned with your vision, audience, and goals.",
    closingHeading: "Have the idea? Let’s build it together.",
    closingText: "From developing the concept to designing the final resource, we’ll work with you to turn your idea into a finished product you’re proud to share.",
    email: { address: "peace@journalsbypa.com", action: "to request a custom quote." },
  },
  {
    title: "Editorial & Writing Services",
    intro: "Need help developing, refining, or completing your written work?",
    body: [
      "We provide full editorial and writing support for authors, creators, coaches, and brands at different stages of the writing process.",
      "Whether you have a complete manuscript that needs editing, an idea that needs to be developed into written content, or you want ongoing support as you write, we can work with you to strengthen your work while keeping your voice and message at the centre.",
    ],
    offerings: [
      {
        name: "Full Manuscript Editing",
        description: "Developmental editing, line editing, and copyediting to strengthen your manuscript from structure and flow to clarity, consistency, and readability.",
      },
      {
        name: "Writing Support",
        description: "Support with developing ideas, structuring content, drafting, and turning your thoughts into well-written pieces.",
      },
      {
        name: "Ongoing Editorial & Writing Support",
        description: "Continued support through a monthly retainer for clients who need an editor or writing partner they can work with consistently.",
      },
    ],
    resultLabel: "Best for:",
    result: "Books, manuscripts, devotionals, articles, thought-leadership content, workbooks, and other long-form written projects.",
    closingHeading: "Ready to talk about your project?",
    closingText: "Tell us what you’re working on, where you are in the process, and the kind of support you need.",
    email: { address: "peace@journalsbypa.com", action: "to discuss your project." },
  },
];

export default function ServicesPage() {
  return (
    <PagesLayout>
      <section className="min-h-screen bg-[#FAF8F2] py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-5xl mx-auto text-center mt-27">
          <Reveal>
            <h1 className="text-4xl md:text-5xl font-bold text-[#290303] mb-6">
              Our Services
            </h1>
            <div className="text-lg text-[#290303] mb-12 space-y-4 max-w-3xl mx-auto">
              <p>Have an idea for a journal, workbook, devotional, planner, or reflection guide?</p>
              <p>
                Whether you’re starting with an idea, already have your content, or need support
                developing and designing the entire resource, we can help you take it from idea to
                finished product.
              </p>
            </div>
          </Reveal>

          <div className="flex flex-col gap-12">
            {serviceDetails.map((service) => (
              <Reveal key={service.title}>
                <article className="rounded-2xl shadow-md bg-white p-10 text-left text-[#290303] text-[18px] transition-shadow duration-300 hover:shadow-xl max-mobile:p-5 max-mobile:text-[15px]">
                  <h2 className="text-3xl font-bold mb-4 max-mobile:text-2xl">{service.title}</h2>
                  <p className="font-semibold mb-4">{service.intro}</p>
                  <div className="space-y-4">
                    {service.body.map((p, i) => <p key={i}>{p}</p>)}

                    {service.offerings && (
                      <div>
                        <p className="font-bold mb-2">What we offer:</p>
                        <ul className="list-disc pl-6 space-y-2">
                          {service.offerings.map((o) => (
                            <li key={o.name}>
                              <span className="font-bold">{o.name}</span> - {o.description}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <p>
                      <span className="font-bold">{service.resultLabel}</span> {service.result}
                    </p>
                  </div>

                  {service.testimonial && (
                    <div className="mt-8">
                      <TestimonialBlock title="What Clients Say" quotes={[service.testimonial]} />
                    </div>
                  )}

                  <div className="mt-8 pt-6 border-t border-[#290303]/15">
                    <h3 className="text-xl font-bold mb-2">{service.closingHeading}</h3>
                    <p className="mb-5">{service.closingText}</p>
                    {service.button && (
                      <Link
                        href={service.button.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={buttonClass}
                      >
                        {service.button.label}
                      </Link>
                    )}
                    {service.email && (
                      <p>
                        Email{" "}
                        <a href={`mailto:${service.email.address}`} className="font-semibold underline hover:text-[#8b5e3c] transition-colors">
                          {service.email.address}
                        </a>{" "}
                        {service.email.action}
                      </p>
                    )}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-20 max-w-3xl mx-auto text-[#290303]">
            <h2 className="text-3xl font-bold mb-4 max-mobile:text-2xl">
              Not sure which service is right for you?
            </h2>
            <p className="text-lg mb-8">
              If you have an idea but aren’t sure where to begin, we can help you determine the best
              starting point based on where you are in the process.
            </p>
            <Link
              href="https://calendly.com/journalsbypa/intro-chat"
              target="_blank"
              rel="noopener noreferrer"
              className={buttonClass}
            >
              Book a Discovery Call
            </Link>
          </Reveal>
        </div>
      </section>
    </PagesLayout>
  );
}
