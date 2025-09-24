"use client";
import React from 'react'
import Image from "next/image";
import img1 from '@/asset/img/img1.png'
import img2 from '@/asset/img/img2.png'
import img3 from '@/asset/img/img3.png'
import img4 from '@/asset/img/img4.png'
import img5 from '@/asset/img/img5.png'
import img6 from '@/asset/img/img6.png'
import img7 from '@/asset/img/img7.png'
import img8 from '@/asset/img/img8.png'
import img9 from '@/asset/img/img9.png'
import img11 from '@/asset/img/img11.png'
import img12 from '@/asset/img/img12.png'
import { useState } from "react";


const Designs = () => {
      const [open, setOpen] = useState(false)


  const images = [
    {
      image: img1
    },
    {
      image: img2
    },
    {
      image: img3
    },
    {
      image: img4
    },
  ]



  const dropImages = [
    {
      image: img5
    },
    {
      image: img6
    },
    {
      image: img7
    },
    {
      image: img8
    },
    {
      image: img9
    },
    {
      image: img11
    },
      {
      image: img12
    },
    
  ]
  return (
    <div>
          <div className=" mt-20 max-tablet:mt-35">
        <h1 className=" mb-10 text-[40px] text-center font-bold max-tablet:text-[30px] max-mobile:text-[25px] ">Journal Designs</h1>
        <div className=" grid grid-cols-4 mx-auto w-[85%] gap-7 bg-[#FAF8F2] p-3 rounded-2xl max-tablet:grid-cols-2">
          {images.map((e,i)=>(
            <div key={i}>
              <Image src={e.image} alt="image" className=" w-[350px]"/>
            </div>
          ))}
        </div>
        <div className="w-full flex justify-end mt-6">
          <button
          onClick={() => setOpen(!open)}
          className="text-2xl font-bold px-30 max-tablet: py-4 max-mobile:px-10 max-tablet:px-15 max-tablet:text-[20px]"
           >
          {open ? "View Less" : "View More"}
          </button>
          </div>

        
        {open && (  
          <div className=" grid grid-cols-4 mx-auto w-[85%] gap-7 bg-[#FAF8F2] p-3 rounded-2xl max-tablet:grid-cols-2">
          {dropImages.map((e,i)=>(
            <div key={i}>
              <Image src={e.image} alt="image" className=" w-[350px]"/>
            </div>
          ))}
        </div>
        )}
      </div>
    </div>
  )
}

export default Designs