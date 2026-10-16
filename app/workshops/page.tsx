import React from "react";
import Image from "next/image";
import Link from "next/link";
import PagesLayout from "@/src/components/PagesLayout";
import TestimonialBlock, { Quote } from "@/src/components/TestimonialBlock";
import Reveal from "@/src/components/Reveal";
import { buttonClass } from "@/src/components/buttonStyles";

interface PastEvent {
  title: string;
  subtitle: string;
  description: string;
  // Path to the flyer inside /public (e.g. "/workshops/wealth-wednesday.jpg"). Leave empty to show a placeholder.
  image: string;
  imageLabel: string;
  testimonials?: Quote[];
  button: { label: string; href: string };
}

const workshopTopics = [
  "Journaling and reflective practices",
  "Purpose and personal growth",
  "Turning ideas into action",
  "Personal and professional development",
  "Legacy and intentional living",
];

const pastEvents: PastEvent[] = [
  {
    title: "How to Turn Your Purpose into Profit through Journaling",
    subtitle: "Speaking Engagement | Wealth Wednesday, Juneteenth NYC",
    description:
      "Journals by PA was featured at a Wealth Wednesday session hosted by Juneteenth NYC, exploring how journaling can go beyond reflection and become a tool for clarity, purpose, and creating opportunities for income.",
    image: "/workshops/wealth-wednesday.jpg",
    imageLabel: "Wealth Wednesdays flyer: Peace Oluwatayo on How to Turn Your Purpose into Profit through Journaling",
    button: { label: "Watch the Session", href: "https://www.youtube.com/watch?v=Gl3pfb_CL6I&t=2470s" },
  },
  {
    title: "The Legacy Lab 1.0 Workshop",
    subtitle: "Workshop | Legacy Lab 1.0",
    description:
      "Journals by PA was part of The Legacy Lab 1.0 Workshop, guiding participants through interactive reflection and journaling exercises designed to help them gain clarity, think intentionally about their legacy, and take meaningful steps forward.",
    image: "/workshops/legacy-lab.jpg",
    imageLabel: "The Legacy Lab Workshop flyer: a collaboration between Dr Gennelle Rice-Thomas and Peace Oluwatayo",
    testimonials: [
      {
        paragraphs: [
          "“The deliberate activity caused me to take time to reflect and put down what I actually want to achieve. I think this allows me to live more intentionally, working towards a set vision.”",
        ],
        author: "Anonymous Participant",
      },
      {
        paragraphs: [
          "“It was a moment of reflection for me. Sometimes you’re just overwhelmed with life and the challenges it contains and fail to look inward at the many possibilities that lie within you.",
          "The Legacy Lab made me want to push further and break the limitations so I can not only leave something behind for people, but leave something valuable in people.”",
        ],
        author: "Ayoola",
      },
    ],
    button: { label: "Watch the Workshop", href: "https://www.youtube.com/watch?v=nBX88sJn5iQ&t=1337s" },
  },
];


const EventImage = ({ src, label }: { src: string; label: string }) =>
  src ? (
    <Image src={src} alt={label} width={800} height={1000} className="w-full h-auto rounded-xl" />
  ) : (
    <div className="w-full aspect-[4/5] rounded-xl border-2 border-dashed border-[#290303]/40 bg-[#FAF8F2] flex items-center justify-center text-center text-[#290303]/70 p-4">
      {label} (image coming soon)
    </div>
  );

export default function WorkshopsPage() {
  return (
    <PagesLayout>
      <section className="min-h-screen bg-[#FAF8F2] py-16 px-6 md:px-12 lg:px-20 text-[#290303]">
        <div className="max-w-5xl mx-auto mt-27">
          <Reveal className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Workshops & Speaking</h1>
            <p className="text-2xl italic mb-6 max-mobile:text-xl">
              Create space for reflection, clarity, and meaningful conversations.
            </p>
            <div className="text-lg space-y-4">
              <p>
                Journals by PA facilitates workshops and speaking sessions that help people pause,
                reflect, put their thoughts into words, and think more intentionally about their
                purpose, growth, and next steps.
              </p>
              <p>
                Sessions can be tailored for organizations, communities, teams, conferences, and
                other gatherings based on the audience and goals of the event.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8 mt-16 text-[18px] max-mobile:text-[15px]">
            <Reveal className="h-full"><div className="h-full rounded-2xl shadow-md bg-white p-8 transition duration-300 hover:-translate-y-1 hover:shadow-xl max-mobile:p-5">
              <h2 className="text-3xl font-bold mb-4">Workshops</h2>
              <p className="mb-4">
                Interactive sessions that give participants practical tools, guided reflection, and
                space to engage with a topic beyond the session itself.
              </p>
              <p className="font-semibold mb-2">Workshop topics can include:</p>
              <ul className="list-disc pl-6 space-y-1">
                {workshopTopics.map((topic) => <li key={topic}>{topic}</li>)}
              </ul>
            </div></Reveal>
            <Reveal className="h-full" delay={150}><div className="h-full rounded-2xl shadow-md bg-white p-8 transition duration-300 hover:-translate-y-1 hover:shadow-xl max-mobile:p-5">
              <h2 className="text-3xl font-bold mb-4">Speaking</h2>
              <p className="mb-4">
                Speaking sessions and conversations designed to encourage audiences to reflect,
                rethink, and take meaningful action.
              </p>
              <p>Topics can be tailored to the audience, event, and objectives.</p>
            </div></Reveal>
          </div>

          <div className="mt-20">
            <Reveal className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-4xl font-bold mb-4 max-mobile:text-3xl">Past Workshops & Speaking</h2>
              <p className="text-lg">
                A look at some of the workshops, speaking engagements, and conversations Journals by
                PA has been part of.
              </p>
            </Reveal>

            <div className="flex flex-col gap-12">
              {pastEvents.map((event) => (
                <Reveal key={event.title}>
                <article
                  className="rounded-2xl shadow-2xl bg-white p-8 text-[18px] max-mobile:p-4 max-mobile:text-[15px]"
                >
                  <div className="flex gap-10 items-start max-tablet:flex-col">
                    <div className="w-[40%] max-tablet:w-full max-tablet:max-w-md max-tablet:mx-auto">
                      <EventImage src={event.image} label={event.imageLabel} />
                    </div>
                    <div className="w-[60%] max-tablet:w-full flex flex-col gap-4">
                      <h3 className="text-2xl font-bold max-mobile:text-xl">{event.title}</h3>
                      <p className="font-semibold">{event.subtitle}</p>
                      <p>{event.description}</p>
                      {event.testimonials && (
                        <TestimonialBlock title="What Participants Are Saying" quotes={event.testimonials} />
                      )}
                      <div className="mt-2">
                        <Link
                          href={event.button.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={buttonClass}
                        >
                          {event.button.label}
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal className="mt-20 text-center max-w-3xl mx-auto text-lg">
            <h2 className="text-3xl font-bold mb-4 max-mobile:text-2xl">
              Bring Journals by PA to Your Next Event
            </h2>
            <p className="mb-2">
              Looking for a workshop facilitator or speaker for your next event, community, team, or
              organization?
            </p>
            <p className="mb-2">Tell us about your event, audience, and what you’re looking for.</p>
            <p>
              Email{" "}
              <a href="mailto:peace@journalsbypa.com" className="font-semibold underline hover:text-[#8b5e3c] transition-colors">
                peace@journalsbypa.com
              </a>{" "}
              to enquire.
            </p>
          </Reveal>
        </div>
      </section>
    </PagesLayout>
  );
}
