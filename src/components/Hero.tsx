"use client";
import React, { useEffect, useRef, useState } from 'react'
import logo from '@/asset/img/jlogo-removebg-preview.png'
import Image from "next/image";

// Never keep visitors on the loader longer than this, even on a very slow connection.
const MAX_LOADING_MS = 8000;

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [loaded, setLoaded] = useState(false)
  const [loaderGone, setLoaderGone] = useState(false)

  useEffect(() => {
    // The video may already be ready (e.g. cached) before React attaches its handlers.
    if (videoRef.current && videoRef.current.readyState >= 3) setLoaded(true)
    const fallback = setTimeout(() => setLoaded(true), MAX_LOADING_MS)
    return () => clearTimeout(fallback)
  }, [])

  // Stop the page scrolling behind the loader, then remove the loader after its fade-out.
  useEffect(() => {
    if (!loaded) {
      document.body.style.overflow = 'hidden'
      return
    }
    document.body.style.overflow = ''
    const timer = setTimeout(() => setLoaderGone(true), 600)
    return () => clearTimeout(timer)
  }, [loaded])

  return (
    <div>
      {!loaderGone && (
        <div
          role="status"
          aria-label="Loading"
          className={`fixed inset-0 z-2000 flex items-center justify-center bg-[#FAF8F2] transition-opacity duration-500 ${loaded ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        >
          <Image src={logo} alt="Journals by PA" priority className="logo-blink w-40 max-mobile:w-30" />
        </div>
      )}

      <div className=" relative max-tablet:top-25 ">
        <div className=' absolute bg-black/50 inset-0 z-10'></div>
        <div className=" ">
          <video
            ref={videoRef}
            src='/herovid.mp4'
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            onCanPlay={() => setLoaded(true)}
            onError={() => setLoaded(true)}
            className=" w-full  max-tablet:"
          />
        </div>
        <div className=" absolute top-69 w-[45%] left-18 max-tablet:top-30 max-tablet:left-20 max-mobile:left-8 max-mobile:top-20 z-30">
          <h1 className={`text-[60px] font-bold text-center leading-tight text-[#FAF8F2] z-30 max-tablet:text-[28px] max-mobile:text-[18px] ${loaded ? 'animate-slideUp' : 'opacity-0'}`}>Turning ideas into Beautifully Designed, Sellable journals</h1>
        </div>
        <div className=" absolute bg-[#FAF8F2] bottom-3 right-6.5 px-7 rounded-2xl max-tablet:px-4 max-tablet:right-2 max-mobile:px-2 max-mobile:bottom-1 max-mobile:right-1">
          <Image src={logo} alt="logo" className=" w-[130px] max-tablet:w-[90px] max-mobile:w-[70px]" />
        </div>
      </div>
    </div>
  )
}

export default Hero
