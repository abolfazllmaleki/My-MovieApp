import React from 'react'
import { useState, useEffect } from 'react'
import api from '../Api/key';
import axios from 'axios';

import { Swiper, SwiperSlide } from 'swiper/react';
import Card from './CardTv';

import 'swiper/css';


function SimilarSlider({movies}) {

    

  const [windowDimenion, detectHW] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
  })

  const detectSize = () => {
    detectHW({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    })
  }



  useEffect(() => {
    window.addEventListener('resize', detectSize)

    return () => {
      window.removeEventListener('resize', detectSize)
    }
  }, [windowDimenion])




  return (
      <div className='h-full w-full'>
          <div className='font-serif text-sm my-2'>

          similar tv shows:
          </div>
          <div>

    <Swiper
      spaceBetween={3}
      slidesPerView={windowDimenion.winWidth<640?3:6}

    > 
      {movies.map(x=>{return(

          <SwiperSlide key={x.id}><Card moviename={x.name.substring(0,16)} id={x.id} image={`https://image.tmdb.org/t/p/w342${x.poster_path}`}/></SwiperSlide>
        
      )})

      }


      
    </Swiper>
          </div>
      </div>
  )
}

export default SimilarSlider