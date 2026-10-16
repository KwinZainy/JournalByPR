import React from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, Mic, PenTool, ShoppingBag, Users } from "lucide-react";
import Reveal from "./Reveal";

const sections = [
  {
    title: "About Us",
    href: "/aboutUs",
    icon: BookOpen,
    description:
      "We help purpose-driven creators, coaches and brands bring their journal ideas to life, beautifully and intentionally.",
  },
  {
    title: "Services",
    href: "/services",
    icon: PenTool,
    description:
      "From a Journal Blueprint Session to full development, design and editorial support, we take your resource from idea to finished product.",
  },
  {
    title: "Products",
    href: "/products",
    icon: ShoppingBag,
    description:
      "Ready-to-use devotional journals, workbooks and planners to help you trust God’s timing and grow in faith.",
  },
  {
    title: "Workshops & Speaking",
    href: "/workshops",
    icon: Mic,
    description:
      "Workshops and speaking sessions that help people pause, reflect and think intentionally about their purpose and next steps.",
  },
  {
    title: "While I Wait Fellowship",
    href: "/fellowship",
    icon: Users,
    description:
      "A faith-based community for people navigating seasons of waiting. You don’t have to wait alone.",
  },
];

const Explore = () => {
  return (
    <section className="bg-[#FAF8F2] pt-20 pb-10 px-6 max-tablet:pt-35 text-[#290303]">
      <Reveal>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-[40px] font-bold max-tablet:text-[30px] max-mobile:text-[25px]">
            Explore Journals by PA
          </h2>
          <p className="text-lg mt-3">
            Everything we offer, from custom journal design to community and conversations.
          </p>
        </div>
      </Reveal>

      <div className="flex flex-wrap justify-center gap-8 mx-auto w-[85%] max-tablet:w-full">
        {sections.map((s, i) => {
          const Icon = s.icon;
          return (
            <Reveal
              key={s.href}
              delay={(i % 3) * 150}
              className="w-[calc((100%-4rem)/3)] max-tablet:w-[calc((100%-2rem)/2)] max-mobile:w-full"
            >
              <Link
                href={s.href}
                className="group flex flex-col h-full bg-white rounded-2xl shadow-md p-8 transition duration-300 hover:-translate-y-2 hover:shadow-2xl max-mobile:p-6"
              >
                <span className="flex items-center justify-center w-14 h-14 rounded-full bg-[#FAF8F2] mb-5 transition-colors duration-300 group-hover:bg-[#290303]">
                  <Icon className="w-7 h-7 text-[#290303] transition-colors duration-300 group-hover:text-white" />
                </span>
                <h3 className="text-2xl font-bold mb-3">{s.title}</h3>
                <p className="text-[17px] mb-6 flex-1">{s.description}</p>
                <span className="inline-flex items-center gap-2 font-semibold text-[#8b5e3c]">
                  Learn more
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
                </span>
              </Link>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
};

export default Explore;
