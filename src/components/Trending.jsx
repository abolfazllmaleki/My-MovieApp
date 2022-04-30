import React from 'react'
import { useState, useEffect } from 'react'
import api from '../Api/key';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from './Card';

import 'swiper/css';


function Trending() {
  const[movies,setmovies]=useState([])

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
  useEffect(()=>{axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${api}&language=en-US&page=1` )
  .then(res=>{setmovies(res.data.results)})
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

          trending movies
          </div>
          <div>

    <Swiper
      spaceBetween={3}
      slidesPerView={windowDimenion.winWidth<640?3:6}

    > 
      {movies.map(x=>{return(

          <SwiperSlide key={x.id} className='mx-2 mb-2'><Card moviename={x.title.substring(0,16)} id={x.id} image={`https://image.tmdb.org/t/p/w342${x.poster_path}`}/></SwiperSlide>
        
      )})

      }


      
    </Swiper>
          </div>
      </div>
  )
}

export default Trending