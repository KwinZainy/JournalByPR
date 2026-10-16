import React from 'react'
import img1 from '@/asset/img/img1.png'
import img2 from '@/asset/img/img2.png'
import img3 from '@/asset/img/img3.png'
import img4 from '@/asset/img/img4.png'
import img5 from '@/asset/img/img5.png'
import img6 from '@/asset/img/img6.png'
import img7 from '@/asset/img/img7.png'
import img8 from '@/asset/img/img8.png'
import img9 from '@/asset/img/img9.png'
import img11 from '@/asset/img/img11.png'
import img12 from '@/asset/img/img12.png'
import Reveal from "./Reveal";
import DesignCarousel from "./DesignCarousel";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img11, img12]

const Designs = () => {
  return (
    <div className=" pt-20 pb-6 bg-[#FAF8F2] ">
      <Reveal>
        <h1 className=" mb-10 text-[40px] text-center font-bold max-tablet:text-[30px] max-mobile:text-[25px] text-[#290303]"> Designs</h1>
      </Reveal>
      <Reveal className="max-w-5xl mx-auto">
        <DesignCarousel images={images} />
      </Reveal>
    </div>
  )
}

export default Designs
