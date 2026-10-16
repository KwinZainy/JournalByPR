"use client";
import React from 'react'
import Image from "next/image";
import logo from '@/asset/img/jlogo-removebg-preview.png'
import Menu from '../components/Menu'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navLinks, isActive } from './navLinks';

const Header = () => {
  const pathname = usePathname()

  return (
    <div>
       <div className=" flex justify-between px-35 max-xl:px-12 bg-[#FAF8F2]  items-center max-tablet:px-20 max-mobile:px-12 fixed w-full z-50">
          <div>
            <Link href={'/'}>
              <Image src={logo} alt="logo" className=" w-[110px] "/>
            </Link>
          </div>
          <div className=' flex gap-6 max-xl:gap-5 max-tablet:hidden text-[#290303]'>
            {navLinks.map((link) => {
              const active = isActive(pathname, link.href)
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? 'page' : undefined}
                  className={`nav-link text-[18px] ${active ? 'nav-link-active font-bold text-[#8b5e3c]' : 'font-medium hover:text-[#8b5e3c]'}`}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>
          <div className=' hidden max-tablet:block'>
            <Menu />
            </div>
        </div>
    </div>
  )
}

export default Header
