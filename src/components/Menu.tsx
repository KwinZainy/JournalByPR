"use client";
import React, { useState } from 'react'
import { Menu, X } from "lucide-react";
import Link from 'next/link';
const Header = () => {
  const [open, setOpen] = useState(false)
  return (
    <div>
       
          <div className=' lg:hidden'>
            <button
            onClick={()=> setOpen(!open)}
            className=''
            >       
              {open?  <X size={25} className='text-black'/> : <Menu size={25} className='text-black'/>}
            </button>
            <div className=' '>
            {open &&(
              <div className='bg-[#FAF8F2] w-full flex flex-col gap-12 items-end  h-1/3 py-8 fixed top-0 right-0  z-1000 overflow-y-hidden'>
                <button className=' pr-10 ' onClick={() => setOpen(!open)} >
                  {open?  <X size={27} className='text-black'/> : <Menu size={25} className='text-black'/>}
                </button>
              <div className=' flex flex-col gap-6 mx-auto  max-tablet:mt-2 max-mobile:gap-2 it pb-10'>
            <Link href={'/'} className=' text-[20px] font-medium shadow-md text-center rounded-[10px] px-3 py-2'>Home</Link>
            <Link href={'/aboutUs'} className=' text-[20px] font-medium shadow-md text-center rounded-[10px] px-3 py-2'>About Us</Link>
            <Link href={'/contactUs'} className=' text-[20px] font-medium shadow-md text-center rounded-[10px] px-3 py-2'>Contact Us</Link>
              </div>
              </div>
            )}
            </div>
          </div>
        </div>
    
  )
}

export default Header