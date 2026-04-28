import React from "react";
import {
  InstagramIcon,
  LinkedinIcon,
  Phone,
} from "lucide-react";

const Footer = () => {
  return (
    <div className="bg-[#FAF8F2] max-tablet:px-6">

      {/* Mobile Socials */}
      <div className="hidden max-tablet:flex pb-3 gap-3 items-center">
        <h1 className="text-[#290303]">Follow us</h1>
        <main className="flex gap-2">
          <a
            href="https://www.linkedin.com/company/journals-by%C2%A0pa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinIcon className="text-[#290303]" />
          </a>
          <a
            href="https://www.instagram.com/journalsbypa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon className="text-[#290303]" />
          </a>
          <a href="tel:+2349130666766">
            <Phone className="text-[#290303]" />
          </a>
        </main>
      </div>

      <hr className="text-[#290303] h-2" />

      {/* Footer Bottom */}
      <div className="flex justify-between items-center py-14 px-30 max-tablet:px-3 max-tablet:py-5">

        {/* Left Text */}
        <main className="flex flex-col gap-1 max-tablet:text-center">
          <p className="text-[#290303] italic max-tablet:text-[14px] max-mobile:text-[12px]">
            © 2026 Journals by PA Concepts. All rights reserved
          </p>

          <p className="text-[#290303] italic max-tablet:text-[14px] max-mobile:text-[12px] text-start">
            Designed by{" "}
            <a
              href="https://www.isabitech.ng/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:opacity-70 transition"
            >
              Isabi Technologies
            </a>
          </p>
        </main>

        {/* Desktop Socials */}
        <main className="flex gap-5 max-tablet:hidden">
          <a
            href="https://www.linkedin.com/company/journals-by%C2%A0pa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinIcon className="text-[#290303]" />
          </a>
          <a
            href="https://www.instagram.com/journalsbypa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon className="text-[#290303]" />
          </a>
          <a href="tel:+2349130666766">
            <Phone className="text-[#290303]" />
          </a>
        </main>

      </div>
    </div>
  );
};

export default Footer;