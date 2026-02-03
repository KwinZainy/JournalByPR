"use client";
import React from 'react'
import Image from "next/image";
import logo from '@/asset/img/jlogo-removebg-preview.png'
import Menu from '../components/Menu'
import Link from 'next/link';
const Header = () => {

  return (
    <div>
       <div className=" flex justify-between px-35 bg-[#FAF8F2]  items-center max-tablet:px-20 max-mobile:px-12 fixed w-full z-50">
          <div>
            <Image src={logo} alt="logo" className=" w-[110px] "/>
          </div>
          <div className=' flex gap-6 max-tablet:hidden text-[#290303]'>
            <Link href={'/'} className=' text-[18px] font-medium'>Home</Link>
            <Link href={'/aboutUs'} className=' text-[18px] font-medium'>About Us</Link>
              <Link href={'/services'} className=' text-[18px] font-medium'>Services</Link>
             <Link href={'/products'} className=' text-[18px] font-medium'>Products</Link>
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