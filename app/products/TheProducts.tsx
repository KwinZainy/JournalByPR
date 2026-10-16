import React from 'react'
import Image, { StaticImageData } from "next/image";
import chapters from './img/chapters.jpeg'
import chaptersN from './img/chaptersN.jpeg'
import waitingWell from './img/waitingwell.jpeg'
import whileIWait from './img/whileiwait.jpeg'
import enduring from './img/enduring.jpeg'
import sImg from './img/simg.jpeg'
import TestimonialBlock, { Quote } from '@/src/components/TestimonialBlock'
import Reveal from '@/src/components/Reveal'
import { smallButtonClass } from '@/src/components/buttonStyles'

interface Product {
  title: string
  image: StaticImageData
  intro: string[]
  bullets?: string[]
  outro?: string[]
  link: string
  cta: string
  testimonial?: { title: string; quotes: Quote[] }
}

const products: Product[] = [
  {
    title: "While I Wait: A Journal for Trusting God's Timing",
    image: whileIWait,
    intro: [
      "Waiting can be one of the hardest seasons of life, but it’s also one of the most transformative. While I Wait is a 30-day devotional journal designed to help you trust God’s timing, stay hopeful, and find peace in the waiting.",
      "Each day includes scriptures, words, songs, affirmations, reflection journaling prompts, and prayers to help you strengthen your faith, grow in patience, and rediscover joy while you wait.",
      "Whether you’re waiting for a job, a relationship, direction, healing, or a breakthrough, this journal offers a space to pause, reflect, and realign your heart with God’s will and promises. You may not control the waiting, but you can choose how you wait.",
    ],
    link: "https://selar.com/while_i_wait_journal",
    cta: "Start your 30-day journey today",
    testimonial: {
      title: "What Our Customers Are Saying",
      quotes: [
        {
          paragraphs: [
            "“During a tough waiting season, the While I Wait Devotional Journal helped me shift my mindset. Instead of feeling frustrated all the time, I started seeing it as a period to grow and spend more time with God.",
            "The messages always felt so personal, like they were written just for me. It became something I looked forward to every day, and it truly made that season feel more meaningful.”",
          ],
          author: "Gloria",
        },
      ],
    },
  },
  {
    title: "Waiting Well: An Abraham & Sarah Workbook",
    image: waitingWell,
    intro: [
      "Waiting can be one of the hardest seasons of life, yet it’s often where God does His deepest work in you. The Waiting Well workbook is designed to help you understand God’s timing, strengthen your faith, and stay encouraged while you wait for the promises He has spoken over your life.",
      "Inspired by the journey of Abraham and Sarah, this workbook includes guided reflections, faith-building exercises, creative prompts, and heart-searching questions to help you:",
    ],
    bullets: [
      "Recognize what God is shaping in you during the wait",
      "Deepen your trust in His process and His promises",
      "Let go of the need to control outcomes",
      "Celebrate God’s faithfulness even before the promise arrives",
    ],
    outro: [
      "Whether you’re waiting for clarity, marriage, a job, healing, provision, or a breakthrough, this workbook gives you a safe space to pause, reflect, and realign your heart with God’s will. You may not control when the promise comes, but you can choose how you wait.",
    ],
    link: "https://selar.com/waiting_well_workbook",
    cta: "Make your waiting season meaningful",
  },
  {
    title: "Enduring Trials with God: A Workbook to Grow Your Faith, Patience, and Hope Like Job",
    image: enduring,
    intro: [
      "Life doesn’t always unfold the way you expect. There are seasons of waiting, loss, silence, and deep questions, seasons that test your faith and stretch your heart.",
      "Enduring Trials with God is a faith-based devotional workbook inspired by the life of Job, one of Scripture’s greatest examples of unshakable faith in the midst of unimaginable suffering.",
      "Job’s story reminds you that trials are not signs of God’s absence but invitations into deeper trust, spiritual maturity, and transformation.",
      "This workbook is designed to walk with you through your journey of waiting, endurance, and restoration, helping you grow closer to God even in difficult seasons.",
      "Inside, you’ll find Scriptures, reflection prompts, faith exercises, guided prayers, self-assessments, and creative pages to help you:",
    ],
    bullets: [
      "Understand the purpose of your waiting season",
      "Find meaning in trials",
      "Respond with faith",
      "Hold on to hope",
      "Prepare your heart for restoration",
    ],
    outro: [
      "You are not alone in your trial. God is present, He is working, and your story is not over.",
    ],
    link: "https://selar.com/enduring_trials_workbook",
    cta: "Endure your trials with God",
  },
  {
    title: "Three Chapters a Day: An Old Testament Planner for Consistent Bible Reading",
    image: chapters,
    intro: [
      "Struggling to stay consistent with Bible reading? The Old Testament can feel long, overwhelming, or hard to keep up with.",
      "Three Chapters a Day (The Old Testament Edition) is a digital planner designed to help you build a simple, sustainable Old Testament reading habit. By focusing on just three chapters daily, you create structure, stay accountable, and grow spiritually without feeling pressured.",
      "Each page includes your daily chapter guide plus space to write insights and reflections, helping you:",
    ],
    bullets: [
      "Stay consistent with Old Testament reading",
      "Understand and internalize what you read",
      "Capture lessons and revelations",
      "Track your spiritual growth over time",
    ],
    outro: [
      "This planner helps you engage with God’s Word in a clear and manageable way, three chapters at a time, so you can grow in faith with confidence and peace.",
    ],
    link: "https://selar.com/three_chapters_a_day_oldtesta_planner",
    cta: "Build your Old Testament reading habit",
  },
  {
    title: "Three Chapters a Day: A New Testament Planner for Consistent Bible Reading",
    image: chaptersN,
    intro: [
      "Struggling to stay consistent with Bible reading? It’s easy to start strong and then lose momentum, especially when life gets busy.",
      "Three Chapters a Day (The New Testament Edition) is a digital planner designed to help you build a simple, sustainable New Testament reading habit. By focusing on just three chapters daily, you create structure, stay accountable, and grow spiritually without feeling overwhelmed.",
      "Each page includes your daily chapter guide plus space to write insights and reflections, helping you:",
    ],
    bullets: [
      "Stay consistent with New Testament reading",
      "Understand and internalize Scripture",
      "Capture lessons and personal revelations",
      "Track your spiritual growth over time",
    ],
    outro: [
      "This planner helps you engage deeply with the life, teachings, and promises found in the New Testament, three chapters at a time, so you can grow in faith with confidence and peace.",
    ],
    link: "https://selar.com/three_chapters_a_day_newtesta_planner",
    cta: "Build your New Testament reading habit",
  },
  {
    title: "Before Your Breakthrough 50 Worship Songs & 50 Scriptures to Strengthen Your Faith While You Wait",
    image: sImg,
    intro: [
      "Waiting can drain your faith, shake your confidence, and leave you feeling spiritually tired. In seasons where answers feel delayed and clarity seems far away, it’s easy to lose focus and slip into worry.",
      "Before Your Breakthrough is a faith-centered digital resource designed to help you stay spiritually grounded, emotionally steady, and hope-filled while you wait on God.",
      "Instead of feeling overwhelmed or discouraged, this resource helps you know exactly what to turn to when waiting feels heavy. Inside, you’ll receive a carefully curated collection of 50 worship songs and 50 Scriptures chosen to help you:",
    ],
    bullets: [
      "Strengthen your faith when prayers feel unanswered",
      "Find peace in moments of anxiety and uncertainty",
      "Stay connected to God even when the wait feels long",
      "Shift your focus from fear to trust",
      "Build consistency in worship and Scripture during difficult seasons",
    ],
    outro: [
      "This resource removes the stress of wondering what to read or what to listen to. Everything is already selected for you, so you can simply open it, worship, reflect, and breathe.",
      "Whether you are waiting for direction, healing, provision, restoration, or breakthrough, Before Your Breakthrough helps you remain spiritually anchored, reminding you that God is working, even when you cannot yet see it.",
    ],
    link: "https://selar.com/before_your_breakthough",
    cta: "Strengthen your faith while you wait",
  },
]

const TheProducts = () => {
  return (
    <div>
      {products.map((product, i) => (
        <Reveal key={product.title}>
        <div
          className={`mx-auto w-[90%] my-10 shadow-2xl rounded-2xl bg-white px-6 py-10 max-mobile:px-3 max-mobile:w-[100%] ${i === 0 ? 'max-mobile:my-7' : 'mt-40'}`}
        >
          <div className='flex gap-12 items-center max-tablet:flex-col'>
            <div className='w-[40%] max-tablet:w-[90%] overflow-hidden rounded-xl'>
              <Image src={product.image} alt={product.title} className='transition-transform duration-500 hover:scale-105' />
            </div>
            <div className='w-[60%] flex flex-col text-start gap-4 text-[18px] max-tablet:w-[90%] max-mobile:text-[14px]'>
              <h1 className='text-2xl font-bold max-mobile:text-[17px]'>{product.title}</h1>
              {product.intro.map((p, j) => <p key={j}>{p}</p>)}
              {product.bullets && (
                <ul>
                  {product.bullets.map((b) => <li key={b}>{b}</li>)}
                </ul>
              )}
              {product.outro?.map((p, j) => <p key={j}>{p}</p>)}
              <a
                href={product.link}
                target='_blank'
                rel='noopener noreferrer'
                className={smallButtonClass}
              >
                {product.cta}
              </a>
            </div>
          </div>

          {product.testimonial && (
            <div className='mt-10 text-[18px] max-mobile:text-[14px]'>
              <TestimonialBlock title={product.testimonial.title} quotes={product.testimonial.quotes} />
            </div>
          )}
        </div>
        </Reveal>
      ))}
    </div>
  )
}

export default TheProducts
