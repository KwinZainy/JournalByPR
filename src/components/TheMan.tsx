import Image from 'next/image'
import React from 'react'
import Man from '@/asset/img/theman.jpg'

const TheMan = () => {
  return (
    <div className=' flex px-60 bg-[#FAF8F2] py-30 justify-between mt-20 max-tablet:flex-col max-tablet:px-10 max-tablet:gap-20 '>
        <div>
            <Image src={Man} alt=''/>
        </div>
        <div className=' w-[46%] max-tablet:w-full'>
            <p className=' text-2xl text-[#CC302B] mb-3'>George Stewart</p>
            <h1 className=' text-6xl text-[#303030] font-bold mb-3'>The Man in the Glass House</h1>
            <p className=' text-[27px] italic mb-9  text-[#41414A]'>Philip Johnson, Architect of the Modern Century</p>
            <p className=' text-[18px] mb-7  text-[#41414A] '>We work with our partners to streamline project plans that don’t just deliver on product perfection, but also delivers on time – crucial to success in a highly competitive market where every day counts. We work with our partners to streamline project plans that don’t just deliver on product perfection, but also delivers on time.</p>
            <p className=' text-[25px] mb-7 text-[#41414A]'>Price: <span className=' text-[#CC302B]'> $14.99</span></p>
            <button className=' bg-[#385777] text-white px-10 text-[20px] rounded-4xl py-3'>
                Read more
            </button>
        </div>
    </div>
  )
}

export default TheMan