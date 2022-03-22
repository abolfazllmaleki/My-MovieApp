import React, { useEffect, useLayoutEffect, useState } from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import SwiperCore, { Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import api from '../Api/key';

import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import axios from 'axios';



function HeroSlider() {

  const[neww,setneww]=useState([])


  SwiperCore.use([Autoplay]);


  useEffect(()=>{axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${api}&language=en-US&page=1` )
  .then(res=>{setneww(res.data.results.slice(0,4))})
  },[]);

  return (
    <div className= 'h-full w-screen'>

      <Swiper

      className='h-full px-0 sm:h-full lg:h-full lg:px-15 w-full '

      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
  
      loop={true}
      autoplay={{
          delay: 10000,
          disableOnInteraction: false
      }}
    >
    <SwiperSlide className='h-full w-full flex flex-row  '>
      <div className='h-full w-1/2  lg:w-1/4 md:w-2/5 bg-contain bg-no-repeat mr-2' style={{ backgroundImage: `url(${neww.length>0?'https://image.tmdb.org/t/p/w780/'+neww[0].poster_path:null})` }}></div>
      <div className='h-full w-full '>
        <div className='mb-3 m-3'><p className='font-serif text-lg sm:text-xl'>{neww.length>0?neww[0].title:null}</p><p className='text-sm sm:text-lg'>{neww.length>0?neww[0].vote_average:null}*</p></div>
        <p className='mb-2 text-sm sm:text-lg'>overview :</p><p className='mb-2 text-xs sm:text-sm'>{neww.length>0?neww[0].overview:null}</p>
        </div></SwiperSlide>
    <SwiperSlide className='h-full w-full flex flex-row  '>
      <div className='h-full w-1/2 lg:w-1/4 md:w-2/5 bg-contain bg-no-repeat mr-2' style={{ backgroundImage: `url(${neww.length>0?'https://image.tmdb.org/t/p/w780/'+neww[1].poster_path:null})` }}></div>
      <div className='h-full w-full '>
        <div className='mb-3 m-3'><p className='font-serif text-lg sm:text-xl'>{neww.length>0?neww[1].title:null}</p><p className='text-sm sm:text-lg'>{neww.length>0?neww[1].vote_average:null}*</p></div>
        <p className='mb-2 text-sm sm:text-lg'>overview :</p><p className='mb-2 text-xs sm:text-sm'>{neww.length>0?neww[1].overview:null}</p>
        </div></SwiperSlide>
    <SwiperSlide className='h-full w-full flex flex-row  '>
      <div className='h-full w-1/2 lg:w-1/4 md:w-2/5 bg-contain bg-no-repeat mr-2' style={{ backgroundImage: `url(${neww.length>0?'https://image.tmdb.org/t/p/w780/'+neww[2].poster_path:null})` }}></div>
      <div className='h-full w-full '>
        <div className='mb-3 m-3'><p className='font-serif text-lg sm:text-xl'>{neww.length>0?neww[2].title:null}</p><p className='text-sm sm:text-lg'>{neww.length>0?neww[2].vote_average:null}*</p></div>
        <p className='mb-2 text-sm sm:text-lg'>overview :</p><p className='mb-2 text-xs sm:text-sm'>{neww.length>0?neww[2].overview:null}</p>
        </div></SwiperSlide>
    <SwiperSlide className='h-full w-full flex flex-row  '>
      <div className='h-full w-1/2 lg:w-1/4 md:w-2/5 bg-contain bg-no-repeat mr-2' style={{ backgroundImage: `url(${neww.length>0?'https://image.tmdb.org/t/p/w780/'+neww[3].poster_path:null})` }}></div>
      <div className='h-full w-full '>
        <div className='mb-3 m-3'><p className='font-serif text-lg sm:text-xl'>{neww.length>0?neww[3].title:null}</p><p className='text-sm sm:text-lg'>{neww.length>0?neww[3].vote_average:null}*</p></div>
        <p className='mb-2 text-sm sm:text-lg'>overview :</p><p className='mb-2 text-xs sm:text-sm'>{neww.length>0?neww[3].overview:null}</p>
        </div></SwiperSlide>


    
  </Swiper>
    </div>
  )
}

export default HeroSlider;