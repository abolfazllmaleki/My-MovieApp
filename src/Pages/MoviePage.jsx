import React from 'react'
import api from '../Api/key'
import axios from 'axios'
import { useEffect,useState } from 'react'
// 676705

function MoviePage() {

    const[poster,setPoster]=useState('')
    const[genres,setGenres]=useState([])
    const[overview,setoverview]=useState('')
    const[title,settitle]=useState('')
    const[cast,setcast]=useState([])




    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/movie/676705?api_key=${api}&language=en-US`)
        .then(res=>{
            console.log(res.data)
            setPoster(res.data.poster_path)
            setGenres(res.data.genres)
            setoverview(res.data.overview)
            settitle(res.data.title)
        axios.get(`https://api.themoviedb.org/3/movie/676705/credits?api_key=${api}&language=en-US`)
        .then(res=>console.log(res))

        
        
        
        })
      },[])
 
  return (
    <div className='w-screen h-screen p-4' >
        <div className='w-full h-1/2 mb-4' >
            <img className='w-full h-full rounded-xl' src={`https://image.tmdb.org/t/p/w780${poster}`} alt="" />

        </div>
        
        <div className= 'w-full flex justify-center mb-4 '>
            {
                genres.map((x)=>{
                    return(<span class="bg-gray-100 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">{x.name}</span>)

                })
            }
        

        </div>
        <div className='flex justify-center mb-2'>
            {title}
        </div>
        <div className='font-serif text-sm italic '>
        <p className='not-italic'>overview:</p>{overview}
            
        </div>
        <div>

        </div>
    </div>
  )
}

export default MoviePage