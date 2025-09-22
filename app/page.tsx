import Footer from "@/src/components/Footer";
import Header from "@/src/components/Header";
import PagesLayout from "@/src/components/PagesLayout";
import Image from "next/image";
import logo from '@/asset/img/logo.avif'


export default function Home() {
  return (
      <PagesLayout>
      <div className="">
        <div className=" relative max-tablet:top-25">
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
        <div className=" absolute top-75 w-[45%] left-38 max-tablet:top-30 max-tablet:left-20 max-mobile:left-10 max-mobile:top-20">
          <h1 className=" text-[55px] font-bold text-center leading-tight text-[#5A1A01] animate-slideUp max-tablet:text-[28px] max-mobile:text-[18px]">Turning journal ideas into beautiful, customized digital designs.</h1>
          </div>
          <div className=" absolute bg-[#FAF8F2] bottom-3 right-6.5 px-7 rounded-2xl max-tablet:px-4 max-tablet:right-2">
          <Image src={logo} alt="logo" className=" w-[130px] max-tablet:w-[90px]"/>
        </div>
      </div>
      </div>
      </PagesLayout>
  );
}
