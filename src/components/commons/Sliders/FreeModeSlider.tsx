'use client';

import 'swiper/css';
import { FC, ReactNode } from 'react';
import 'swiper/css/free-mode';
import { FreeMode } from "swiper/modules";
import { Swiper } from "swiper/react";
import { Box } from '@mui/material';
import '@/assets/css/Slider.css'

export interface SliderProps {
    children: ReactNode
    customBreakpoints?: any
  }

const FreeModeSlider: FC<SliderProps> = ({
  children,
  customBreakpoints,
}) => {

  return (
    <Box>
      <Swiper
        slidesPerView="auto"
        spaceBetween={40}
        draggable={true}
        freeMode={true}
        modules={[FreeMode]}
        breakpoints={
          customBreakpoints || {
            640: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
          }
        }
        className='custom-Slider !w-auto mySwiper'
        >
        {children}
      </Swiper>
    </Box>
  )
}

export default FreeModeSlider