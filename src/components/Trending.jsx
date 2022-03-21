import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import Card from './Card';

import 'swiper/css';


function Trending() {
  return (
      <div>
          <div>

          this is trnding
          </div>
          <div>

    <Swiper
      spaceBetween={0}
      slidesPerView={'auto'}

      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><Card/></SwiperSlide>
      <SwiperSlide><Card/></SwiperSlide>
      <SwiperSlide><Card/></SwiperSlide>
      <SwiperSlide><Card/></SwiperSlide>
      <SwiperSlide><Card/></SwiperSlide>
      <SwiperSlide><Card/></SwiperSlide>
      <SwiperSlide><Card/></SwiperSlide>
      <SwiperSlide><Card/></SwiperSlide>
      
    </Swiper>
          </div>
      </div>
  )
}

export default Trending