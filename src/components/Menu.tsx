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
              <div className='bg-[#FAF8F2] w-full flex flex-col gap-12 items-end  h-1/3 py-10 fixed top-0 right-0  z-1000 overflow-y-hidden'>
                <button className=' pr-10 ' onClick={() => setOpen(!open)} >
                  {open?  <X size={27} className='text-black'/> : <Menu size={25} className='text-black'/>}
                </button>
              <div className=' flex flex-col gap-4 mx-auto  max-tablet:mt-3 max-mobile:gap-2 it'>
            <Link href={'/'} className=' text-[18px] font-medium'>Home</Link>
            <Link href={'/aboutUs'} className=' text-[18px] font-medium'>About Us</Link>
            <Link href={'/contactUs'} className=' text-[18px] font-medium'>Contact Us</Link>
              </div>
              </div>
            )}
            </div>
          </div>
        </div>
    
  )
}

export default Header