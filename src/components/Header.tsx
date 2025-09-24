"use client";
import React from 'react'
import Image from "next/image";
import logo from '@/asset/img/logo.avif'
import Menu from '../components/Menu'
import Link from 'next/link';
const Header = () => {

  return (
    <div>
       <div className=" flex justify-between px-40 bg-[#FAF8F2] py-2 items-center max-tablet:px-20 max-mobile:px-12 fixed w-full z-50">
          <div>
            <Image src={logo} alt="logo" className=" w-[130px] "/>
          </div>
          <div className=' flex gap-6 max-tablet:hidden '>
            <Link href={'/'} className=' text-[18px] font-medium'>Home</Link>
            <Link href={'/aboutUs'} className=' text-[18px] font-medium'>About Us</Link>
            <Link href={'/contactUs'} className=' text-[18px] font-medium'>Contact Us</Link>
          </div>
          <div className=' hidden max-tablet:block'>
            <Menu />
            </div>
        </div>
    </div>
  )
}

export default Header