import React, { useEffect, useLayoutEffect, useState } from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import SwiperCore, { Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import api from '../Api/key';
import axios from 'axios';
import HeroSliderItem from './HeroSliderItem';

import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';




function HeroSlider() {

  const[neww,setneww]=useState([])


  SwiperCore.use([Autoplay]);


  useEffect(()=>{axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${api}&language=en-US&page=1` )
  .then(res=>{setneww(res.data.results.slice(0,4))})
  },[]);


  const th= neww.map((x)=>{
    if(x.overview.length>190){
      return x.overview.slice(0,185) + '...'
    }else{
      return x.overview
    }

  })
  
  console.log(neww)
  return (
    <div className= 'h-full w-full'>

      <Swiper

      className='h-full px-0 sm:h-full lg:h-full lg:px-15  w-full '

      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      navigation

  
      loop={true}
      autoplay={{
          delay: 4000,
          disableOnInteraction: false
      }}
    >
    <SwiperSlide>
      <HeroSliderItem movie={neww[0]}></HeroSliderItem>
        </SwiperSlide>
    <SwiperSlide >
      <HeroSliderItem movie={neww[1]}></HeroSliderItem>
</SwiperSlide>
    <SwiperSlide >
      <HeroSliderItem movie={neww[2]}></HeroSliderItem>
</SwiperSlide>
    <SwiperSlide >
      <HeroSliderItem movie={neww[3]}></HeroSliderItem>
</SwiperSlide>



    
  </Swiper>
    </div>
  )
}

export default HeroSlider;