import React from 'react'
import api from '../Api/key'
import axios from 'axios'
import { useEffect,useState } from 'react'
// 676705

function MoviePage() {

    const[poster,setPoster]=useState('')




    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/movie/676705?api_key=${api}&language=en-US`)
        .then(res=>{
            console.log(res.data)
            setPoster(res.data.poster_path)

        
        
        
        })
      },[])
  return (
    <div className='w-screen h-screen ' >
        <div className='w-full h-1/2' >
            <img className='w-full h-full rounded-xl' src={`https://image.tmdb.org/t/p/w780${poster}`} alt="" />

        </div>
        
        <div className='flex justify-center '>
        {/* <span class="bg-gray-100 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">Dark</span> */}

        </div>
        <div>
            
        </div>
    </div>
  )
}

export default MoviePage