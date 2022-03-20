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
  // https://api.themoviedb.org/3/discover/movie?api_key=' + '6116d2ac7ca36dc0cda41feab8d70dfa'+ '&primary_release_year=2017&sort_by=revenue.desc

  useLayoutEffect(()=>{axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${api}&language=en-US&page=1` )
  .then(res=>{setneww(res.data.results.slice(0,4))})
  },[]);
  console.log(neww)
  return (
    <div className='h-screen w-screen'>

      <Swiper

      className='h-screen w-screen'

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
    <SwiperSlide className='h-screen w-screen grid grid-cols-3'><div className='h-4/6 w-6/6 bg-contain bg-no-repeat col-span-1' style={{ backgroundImage: `url(${neww.length>0?'https://image.tmdb.org/t/p/w780/'+neww[0].poster_path:null})` }}></div><div><div className='mb-10'><p className='font-serif text-3xl'>{neww.length>0?neww[0].title:null}</p><p className='text-lg'>{neww.length>0?neww[0].vote_average:null}*</p></div><p className='mb-2 text-xl'>overview :</p>{neww.length>0?neww[0].overview:null}</div></SwiperSlide>


    
  </Swiper>
    </div>
  )
}

export default HeroSlider;