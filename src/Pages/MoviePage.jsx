import React from 'react'
import api from '../Api/key'
import axios from 'axios'
import { useEffect,useState } from 'react'
import Cast from '../components/Cast'
import Trailer from '../components/Trailer'
// 676705

function MoviePage() {

    const[poster,setPoster]=useState('')
    const[genres,setGenres]=useState([])
    const[overview,setoverview]=useState('')
    const[title,settitle]=useState('')
    const[cast,setcast]=useState([])
    const[trailer,settrailer]=useState('')




    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/movie/676705?api_key=${api}&language=en-US`)
        .then(res=>{
            console.log(res.data)
            setPoster(res.data.poster_path)
            setGenres(res.data.genres)
            setoverview(res.data.overview)
            settitle(res.data.title)
        axios.get(`https://api.themoviedb.org/3/movie/676705/credits?api_key=${api}&language=en-US`)
        .then(res=>{console.log(res)
        setcast(res.data.cast.slice(0,4))})
        axios.get(`https://api.themoviedb.org/3/movie/676705/videos?api_key=${api}&language=en-US`)
        .then(res=>{
            console.log(res.data)
            settrailer(res.data.results[0].key)
        })

        
        
        
        })
      },[])
      console.log(cast)
 
  return (
    <div className='w-screen h-screen p-4' >
        <div className='w-full h-1/2 mb-4' >
            <img className='w-full h-full rounded-xl' src={`https://image.tmdb.org/t/p/w780${poster}`} alt="" />

        </div>
        
        <div className= 'w-full flex justify-center mb-4 '>
            {
                genres.map((x)=>{
                    return(<span className="bg-gray-100 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">{x.name}</span>)

                })
            }
        

        </div>
        <div className='flex justify-center mb-2'>
            {title}
        </div>
        <div className='font-serif text-sm italic '>
        <p className='not-italic'>overview:</p>{overview}
            
        </div>
        <div className='flex justify-center my-2'>
            <button>

            <Trailer ukey={trailer}/>
            </button>
        </div>
        <div className='font-serif text-sm my-2'>
            cast:
        </div>
        <div className='flex justify-center'>
  
            {cast.map((x)=>{
                return(<Cast castimage={`https://image.tmdb.org/t/p/w185${x.profile_path}`} castname={x.name}></Cast>)

            })}

        </div>

    </div>
  )
}

export default MoviePage