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
  Phone,
} from "lucide-react";
const Footer = () => {
  return (
    <div className="  bg-[#FAF8F2]  max-tablet:px-6">
      
      <div className=" hidden max-tablet:block pb-3 ">
        <h1 className=" text-[#290303] mb-2">Follow us</h1>
          <main className=" flex flex-col gap-2 ">
          <a href="https://www.linkedin.com/company/journals-by%C2%A0pa" target="_blank" rel="noopener noreferrer"><LinkedinIcon className=" text-[#290303]" /></a>
          <a href="https://www.instagram.com/journalsbypa" target="_blank" rel="noopener noreferrer"><InstagramIcon  className=" text-[#290303]"/> </a>
          <a href="tel:‪+2349130666766‬" target="_blank" rel="noopener noreferrer"> <Phone className=" text-[#290303]"/></a>
        </main>
      </div>
      <hr className=" text-[#290303] h-2" />
      <div className=" flex justify-end gap-93 py-14 max-tablet:justify-center px-30 max-mobile:px-3 max-tablet:py-5">
        <main>
          <p className=" text-[#290303] italic max-tablet:text-[14px] max-mobile-text-[12px]">© 2026 Journals by PA Concepts. All rights reserved</p>
        </main>
        <main className=" flex gap-5 max-tablet:hidden ">
          <a href="https://www.linkedin.com/company/journals-by%C2%A0pa" target="_blank" rel="noopener noreferrer"><LinkedinIcon className=" text-[#290303]" /></a>
          <a href="https://www.instagram.com/journalsbypa" target="_blank" rel="noopener noreferrer"><InstagramIcon  className=" text-[#290303]"/> </a>
          <a href="tel:‪+2349130666766‬" target="_blank" rel="noopener noreferrer"> <Phone className=" text-[#290303]"/></a>
         
        </main>
      </div>
    </div>
  );
};

export default Footer;
