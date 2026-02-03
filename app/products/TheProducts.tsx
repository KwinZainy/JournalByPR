import React from 'react'
import Image from "next/image";  
import chapters from './img/chapters.jpeg'
import chaptersN from './img/chaptersN.jpeg'
import waitingWell from './img/waitingwell.jpeg'
import whileIWait from './img/whileiwait.jpeg'
import enduring from './img/enduring.jpeg'


const TheProducts = () => {
  return (
    <div>
       <div className=' flex  gap-12 mx-auto w-[90%] my-10 items-center shadow-2xl rounded-2xl bg-white px-6 py-10 max-tablet:flex-col max-mobile:px-3 max-mobile:w-[100%] max-mobile:my-7'>
        <div className=' w-[40%] max-tablet:w-[90%] '>
            <Image src={whileIWait} alt='wait' />
        </div>
        <div className=' w-[60%] flex flex-col text-start gap-4 text-[18px] max-tablet:w-[90%] max-mobile:text-[14px]'>
            <h1 className=' text-2xl font-bold max-mobile:text-[17px]'>{"While I Wait: A Journal for Trusting God's Timing"}</h1>
            <p>{"Waiting can be one of the hardest seasons of life, but it’s also one of the most transformative. While I Wait is a 30-day devotional journal designed to help you trust God’s timing, stay hopeful, and find peace in the waiting."}</p>
            <p>Each day includes scriptures, words, songs, affirmations, reflection journaling prompts, and prayers to help you strengthen your faith, grow in patience, and rediscover joy while you wait.</p>
            <p>{"Whether you’re waiting for a job, a relationship, direction, healing, or a breakthrough, this journal offers a space to pause, reflect, and realign your heart with God’s will and promises. You may not control the waiting, but you can choose how you wait."}</p>
            <p className=' text-[15px]'>Click to start your 30-day journey today 👉🏻 <a href="https://selar.com/while_i_wait_journal" target='_blank' rel='noopener noreferrer' className='text-blue-500' >https://selar.com/while_i_wait_journal</a></p>
        </div>
       </div>

       
          <div className=' flex  gap-12 mx-auto w-[90%] my-10 items-center shadow-2xl rounded-2xl bg-white px-6 py-10 mt-40 max-tablet:flex-col max-mobile:px-3 max-mobile:w-[100%] '>
        <div className=' w-[40%] max-tablet:w-[90%] '>
            <Image src={waitingWell} alt='wait' />
        </div>
        <div className=' w-[60%] flex flex-col text-start gap-4 text-[18px] max-tablet:w-[90%] max-mobile:text-[14px]'>
            <h1 className=' text-2xl font-bold max-mobile:text-[17px]'>Waiting Well: An Abraham & Sarah Workbook</h1>
            <p>{"Waiting can be one of the hardest seasons of life, yet it’s often where God does His deepest work in you. The Waiting Well workbook is designed to help you understand God’s timing, strengthen your faith, and stay encouraged while you wait for the promises He has spoken over your life."}</p>
            <p>Inspired by the journey of Abraham and Sarah, this workbook includes guided reflections, faith-building exercises, creative prompts, and heart-searching questions to help you:</p>
            <ul>
                <li>Recognize what God is shaping in you during the wait</li>
                <li>Deepen your trust in His process and His promises</li>
                <li>Let go of the need to control outcomes</li>
                <li>{"Celebrate God’s faithfulness even before the promise arrives"}</li>
            </ul>
            <p>{"Whether you’re waiting for clarity, marriage, a job, healing, provision, or a breakthrough, this workbook gives you a safe space to pause, reflect, and realign your heart with God’s will. You may not control when the promise comes, but you can choose how you wait."}</p>
            <p className='text-[15px]'>Click to make your waiting season meaningful 👉🏻<a href="https://selar.com/waiting_well_workbook" target='_blank' rel='noopener noreferrer' className='text-blue-500' >https://selar.com/waiting_well_workbook</a></p>
        </div>
       </div>
                 <div className=' flex  gap-12 mx-auto w-[90%] my-10 items-center shadow-2xl rounded-2xl bg-white px-6 py-10 mt-40 max-tablet:flex-col max-mobile:w-[100%] max-mobile:px-3'>
        <div className=' w-[40%] max-tablet:w-[90%] '>
            <Image src={enduring} alt='wait' />
        </div>
        <div className=' w-[60%] flex flex-col text-start gap-4 text-[18px] max-tablet:w-[90%] max-mobile:text-[14px]'>
            <h1 className=' text-2xl font-bold max-mobile:text-[17px]'>Enduring Trials with God: A Workbook to Grow Your Faith, Patience, and Hope Like Job</h1>
            <p>{"Life doesn’t always unfold the way you expect. There are seasons of waiting, loss, silence, and deep questions, seasons that test your faith and stretch your heart."}</p>
            <p>{"Enduring Trials with God is a faith-based devotional workbook inspired by the life of Job, one of Scripture’s greatest examples of unshakable faith in the midst of unimaginable suffering."}</p>
            <p>{"Job’s story reminds you that trials are not signs of God’s absence but invitations into deeper trust, spiritual maturity, and transformation."}</p>
            <p>This workbook is designed to walk with you through your journey of waiting, endurance, and restoration, helping you grow closer to God even in difficult seasons.</p>
            <p>{"Inside, you’ll find Scriptures, reflection prompts, faith exercises, guided prayers, self-assessments, and creative pages to help you:"}</p>
            <ul>
                <li>Understand the purpose of your waiting season</li>
                <li>Find meaning in trials</li>
                <li>Respond with faith</li>
                <li>Hold on to hope</li>
                <li>Prepare your heart for restoration</li>
            </ul>
            <p>You are not alone in your trial. God is present, He is working, and your story is not over.</p>
            <p className='text-[15px]'>Click to endure your trials with God 👉🏻<a href="https://selar.com/enduring_trials_workbook" target='_blank' rel='noopener noreferrer' className='text-blue-500' >https://selar.com/enduring_trials_workbook</a></p>
        </div>
       </div>

          <div className=' flex  gap-12 mx-auto w-[90%] my-10 items-center shadow-2xl rounded-2xl bg-white px-6 py-10 mt-40  max-tablet:flex-col max-mobile:px-3 max-mobile:w-[100%]'>
        <div className=' w-[40%] max-tablet:w-[90%] '>
            <Image src={chapters} alt='wait' />
        </div>
        <div className=' w-[60%] flex flex-col text-start gap-4 text-[18px] max-tablet:w-[90%] max-mobile:text-[14px]'>
            <h1 className=' text-2xl font-bold max-mobile:text-[17px]'>Three Chapters a Day: An Old Testament Planner for Consistent Bible Reading</h1>
            <p>Struggling to stay consistent with Bible reading? The Old Testament can feel long, overwhelming, or hard to keep up with.</p>
            <p>Three Chapters a Day (The Old Testament Edition) is a digital planner designed to help you build a simple, sustainable Old Testament reading habit. By focusing on just three chapters daily, you create structure, stay accountable, and grow spiritually without feeling pressured.</p>
            <p>Each page includes your daily chapter guide plus space to write insights and reflections, helping you:</p>
            <ul>
                <li>Stay consistent with Old Testament reading</li>
                <li>Understand and internalize what you read</li>
                <li>Capture lessons and revelations</li>
                <li>Track your spiritual growth over time</li>
            </ul>
            <p>{"This planner helps you engage with God’s Word in a clear and manageable way, three chapters at a time, so you can grow in faith with confidence and peace."}</p>
            <p className='text-[14px]'>Click to build your Old Testament reading habit 👉🏻<a href="https://selar.com/three_chapters_a_day_oldtesta_planner" target='_blank' rel='noopener noreferrer' className='text-blue-500 text-[12px]' >https://selar.com/three_chapters_a_day_oldtesta_planner</a></p>
        </div>
       </div>
         <div className=' flex  gap-12 mx-auto w-[90%] my-10 items-center shadow-2xl rounded-2xl bg-white px-6 py-10 mt-40 max-tablet:flex-col max-mobile:px-3 max-mobile:w-[100%]'>
        <div className=' w-[40%] max-tablet:w-[90%] '>
            <Image src={chaptersN} alt='wait' />
        </div>
        <div className=' w-[60%] flex flex-col text-start gap-4 text-[18px] max-tablet:w-[90%] max-mobile:text-[14px]'>
            <h1 className=' text-2xl font-bold max-mobile:text-[17px]'>Three Chapters a Day: A New Testament Planner for Consistent Bible Reading</h1>
            <p>{"Struggling to stay consistent with Bible reading? It’s easy to start strong and then lose momentum, especially when life gets busy."}</p>
            <p>Three Chapters a Day (The New Testament Edition) is a digital planner designed to help you build a simple, sustainable New Testament reading habit. By focusing on just three chapters daily, you create structure, stay accountable, and grow spiritually without feeling overwhelmed..</p>
            <p>Each page includes your daily chapter guide plus space to write insights and reflections, helping you:</p>
            <ul>
                <li>Stay consistent with New Testament reading</li>
                <li>Understand and internalize Scripture</li>
                <li>Capture lessons and personal revelations</li>
                <li>Track your spiritual growth over time</li>
            </ul>
            <p>This planner helps you engage deeply with the life, teachings, and promises found in the New Testament, three chapters at a time, so you can grow in faith with confidence and peace.</p>
            <p className='text-[13px]'>Click to build your New Testament reading habit 👉🏻<a href="https://selar.com/three_chapters_a_day_newtesta_planner" target='_blank' rel='noopener noreferrer' className='text-blue-500 text-[12px]' >https://selar.com/three_chapters_a_day_newtesta_planner</a></p>
        </div>
       </div>
    </div>
  )
}

export default TheProducts