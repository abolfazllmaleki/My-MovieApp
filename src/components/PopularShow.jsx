import React from 'react'
import { useState, useEffect } from 'react'
import api from '../Api/key';
import axios from 'axios';

import { Swiper, SwiperSlide } from 'swiper/react';
import Card from './Card';

import 'swiper/css';


function PopularShow() {
  const[neww,setneww]=useState([])
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
  useEffect(()=>{axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${api}&language=en-US&page=1` )
  .then(res=>{setneww(res.data.results)})
  },[]);


  useEffect(() => {
    window.addEventListener('resize', detectSize)

    return () => {
      window.removeEventListener('resize', detectSize)
    }
  }, [windowDimenion])




  return (
      <div className='h-full w-full'>
          <div>

          this is trnding
          </div>
          <div>

    <Swiper
      spaceBetween={3}
      slidesPerView={windowDimenion.winWidth<640?3:6}


    //   onSwiper={(swiper) => console.log(swiper)}
    > 
      {neww.map(x=>{return(

          <SwiperSlide><Card moviename={x.name.substring(0,16)} image={`https://image.tmdb.org/t/p/w342${x.poster_path}`}/></SwiperSlide>
        
      )})

      }


      
    </Swiper>
          </div>
      </div>
  )
}

export default PopularShow