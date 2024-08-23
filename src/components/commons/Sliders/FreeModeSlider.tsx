'use client';

import { FC, ReactNode } from 'react';
import 'swiper/css';
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import { Swiper } from "swiper/react";

import 'swiper/css/free-mode';
import 'swiper/css/pagination';
// import "swiper/css/navigation";


export interface SliderProps {
    children: ReactNode
    customBreakpoints?: any
  }

const FreeModeSlider: FC<SliderProps> = ({
  children,
  customBreakpoints,
}) => {

  return (
      <Swiper
      slidesPerView={'auto'}
      spaceBetween={50}
      // grabCursor={true}
      // navigation={true}
      freeMode={true}
      pagination={{
         clickable: true,
       }}
       autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
       breakpoints={customBreakpoints || {
        760: {
          slidesPerView: 1,
          spaceBetween: 50,
        },
        830: {
          slidesPerView: 2,
          spaceBetween: 50,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 70,
        },
        1185: {
          slidesPerView: 2,
          spaceBetween: 70,
        },
        1370: {
          slidesPerView: 3,
          spaceBetween: 70,
        },
        1600: {
          slidesPerView: 3,
          spaceBetween: 70,
        },
      }}
        modules={[FreeMode, Pagination, Autoplay]}
        className='h-[580px] !px-6 lg:!px-14'
        >
        {children}
      </Swiper>
  )
}

export default FreeModeSlider
