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

  const [movies, setmovies] = useState([])


  SwiperCore.use([Autoplay]);


  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${api}&language=en-US&page=1`)
    .then(res => { setmovies(res.data.results.slice(0, 4)) })
  }, []);


  const th = movies.map((x) => {
    if (x.overview.length > 190) {
      return x.overview.slice(0, 185) + '...'
    } else {
      return x.overview
    }

  })

  return (
    <div className='h-full w-full'>

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
          <HeroSliderItem movie={movies[0]}></HeroSliderItem>
        </SwiperSlide>
        <SwiperSlide >
          <HeroSliderItem movie={movies[1]}></HeroSliderItem>
        </SwiperSlide>
        <SwiperSlide >
          <HeroSliderItem movie={movies[2]}></HeroSliderItem>
        </SwiperSlide>
        <SwiperSlide >
          <HeroSliderItem movie={movies[3]}></HeroSliderItem>
        </SwiperSlide>




      </Swiper>
    </div>
  )
}

export default HeroSlider;