import React from "react";
import logo from "@/asset/img/logo.avif";
import Image from "next/image";
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
   NotebookPen ,
  Sparkles,
  LinkedinIcon,
} from "lucide-react";
const Footer = () => {
  return (
    <div className=" px-30 bg-[#FAF8F2]  max-tablet:px-6">
      <div className=" flex justify-between  py-20 items-center max-tablet:py-5">
        <main>
          <div className=" flex">
            <h1 className=" italic font-medium mb-4 max-tablet:mb-2">Journals by PA .</h1>
            < NotebookPen  className="w-6 h-6 text-black" />
          </div>
          <p className=" text-[17px] text-[#484C53] max-tablet:text-[12px]">“Write what should not be forgotten.” – Isabel Allende</p>

          <p className="text-sm flex items-center gap-1 text-[#484C53] max-tablet:text-[12px]">
            Stay consistent with your journaling journey
            <Sparkles className="w-4 h-4 text-[#484C53] inline" />
          </p>
        </main>
        <main>
          <Image src={logo} alt="logo" className=" w-[100px] max-tablet:hidden" />
        </main>
      </div>
      <div className=" hidden max-tablet:block pb-3">
        <h1 className=" text-[#484C53] mb-2">Follow us</h1>
          <main className=" flex flex-col gap-2 ">
          <TwitterIcon className=" text-[#484C53]" />
          <InstagramIcon  className=" text-[#484C53]"/>
          <FacebookIcon className="text-[#484C53]" />
        </main>
      </div>
      <hr className=" text-[#484C53] h-2" />
      <div className=" flex justify-between py-14 max-tablet:justify-center max-tablet:py-5">
        <main>
          <p className=" text-[#484C53] italic max-tablet:text-[14px]">© 2025 Journals by PA. All rights reserved</p>
        </main>
        <main className=" flex gap-5 max-tablet:hidden ">
          <LinkedinIcon className=" text-[#484C53]" />
          <InstagramIcon  className=" text-[#484C53]"/>
          <FacebookIcon className="text-[#484C53]" />
        </main>
      </div>
    </div>
  );
};

export default Footer;
