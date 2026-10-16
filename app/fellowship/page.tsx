import React from "react";
import Link from "next/link";
import PagesLayout from "@/src/components/PagesLayout";
import TestimonialBlock from "@/src/components/TestimonialBlock";
import Reveal from "@/src/components/Reveal";
import { buttonClass } from "@/src/components/buttonStyles";

const activities = [
  {
    title: "Bible Study",
    description: "Explore what God's Word teaches us about waiting, faith, trust, hope, and God's faithfulness.",
  },
  {
    title: "Prayer",
    description: "Bring our requests before God and stand in prayer for one another.",
  },
  {
    title: "Reflection & Conversations",
    description: "Create space to process our experiences, ask questions, journal, and reflect on what God may be teaching us.",
  },
  {
    title: "Community",
    description: "Walk alongside people who understand what it means to wait, while encouraging and celebrating one another along the way.",
  },
];

const expectations = [
  "Greater faith and trust in God's timing",
  "Hope and peace in uncertain seasons",
  "Courage to keep moving forward",
  "Joy in the journey, not just the outcome",
  "A community to walk with",
];

export default function FellowshipPage() {
  return (
    <PagesLayout>
      <section className="min-h-screen bg-[#FAF8F2] py-16 px-6 md:px-12 lg:px-20 text-[#290303]">
        <div className="max-w-5xl mx-auto mt-27">
          <Reveal className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">While I Wait Fellowship</h1>
            <p className="text-2xl italic mb-6 max-mobile:text-xl">{"You don't have to wait alone."}</p>
            <div className="text-lg space-y-4">
              <p>
                While I Wait Fellowship is a faith-based community initiative of Journals by PA,
                created for people navigating seasons of waiting and learning to trust God in the
                process.
              </p>
              <p>
                Waiting seasons can be difficult. You may be trusting God for a job, relationship,
                direction, healing, a breakthrough, or simply clarity about what comes next.
              </p>
              <p>
                {"We create space to study God's Word, pray, reflect, have honest conversations, and encourage one another along the way."}
              </p>
            </div>
          </Reveal>

          <div className="mt-16">
            <Reveal>
              <h2 className="text-4xl font-bold text-center mb-10 max-mobile:text-3xl">What We Do</h2>
            </Reveal>
            <div className="grid md:grid-cols-2 gap-8 text-[18px] max-mobile:text-[15px]">
              {activities.map((a, i) => (
                <Reveal key={a.title} delay={(i % 2) * 150} className="h-full"><div className="h-full rounded-2xl shadow-md bg-white p-8 transition duration-300 hover:-translate-y-1 hover:shadow-xl max-mobile:p-5">
                  <h3 className="text-2xl font-bold mb-3">{a.title}</h3>
                  <p>{a.description}</p>
                </div></Reveal>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-16 text-[18px] max-mobile:text-[15px]">
            <Reveal className="h-full"><div className="h-full rounded-2xl shadow-md bg-white p-8 max-mobile:p-5">
              <h2 className="text-3xl font-bold mb-4">What You Can Expect</h2>
              <ul className="list-disc pl-6 space-y-2">
                {expectations.map((e) => <li key={e}>{e}</li>)}
              </ul>
            </div></Reveal>
            <Reveal className="h-full" delay={150}><div className="h-full rounded-2xl shadow-md bg-white p-8 max-mobile:p-5">
              <TestimonialBlock
                title="What Our Community Says"
                quotes={[
                  {
                    paragraphs: [
                      "“I used to focus on what I was waiting for, but the group helped me focus on Who I’m waiting on.”",
                    ],
                  },
                ]}
              >
                <p className="mt-4">
                  One member shared how the While I Wait Fellowship Community helped them understand
                  their waiting season differently, grow in confidence in God’s Word, and trust Him
                  more deeply.
                </p>
              </TestimonialBlock>
            </div></Reveal>
          </div>

          <Reveal className="mt-20 text-center max-w-3xl mx-auto text-lg">
            <h2 className="text-3xl font-bold mb-4 max-mobile:text-2xl">Who Is It For?</h2>
            <p className="mb-4">
              {"While I Wait Fellowship is for anyone navigating a season of waiting, whether you're waiting for a job, relationship, direction, healing, a breakthrough, or something else you're trusting God for."}
            </p>
            <p className="mb-8 font-semibold">
              {"You don't have to have everything figured out. You just don't have to wait alone."}
            </p>
            <Link
              href="https://bit.ly/JoinWhileIWaitFellowshipCommunity"
              target="_blank"
              rel="noopener noreferrer"
              className={buttonClass}
            >
              Join the Fellowship
            </Link>
          </Reveal>
        </div>
      </section>
    </PagesLayout>
  );
}
