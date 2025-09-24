import React from 'react'
import logo from '@/asset/img/logo.avif'
import Image from "next/image";
const Hero = () => {
  return (
    <div>
          <div className=" relative max-tablet:top-25">
                 <div className=' absolute bg-black/50 inset-0 z-10'></div>
                <div className=" ">
                  <video
                  src='/herovid.mp4'
                  autoPlay 
                  loop
                  muted
                  playsInline
                  className=" w-full  max-tablet:"
                  />
                </div>
                <div className=" absolute top-75 w-[45%] left-35 max-tablet:top-30 max-tablet:left-20 max-mobile:left-8 max-mobile:top-20 z-30">
                  <h1 className=" text-[55px] font-bold text-center leading-tight text-[#FAF8F2] z-30 animate-slideUp max-tablet:text-[28px] max-mobile:text-[18px]">Turning journal ideas into beautiful, customized digital designs.</h1>
                  </div>
                  <div className=" absolute bg-[#FAF8F2] bottom-3 right-6.5 px-7 rounded-2xl max-tablet:px-4 max-tablet:right-2 max-mobile:px-2 max-mobile:bottom-1 max-mobile:right-1">
                  <Image src={logo} alt="logo" className=" w-[130px] max-tablet:w-[90px] max-mobile:w-[70px]"/>
                </div>
              </div>
    </div>
  )
}

export default Hero