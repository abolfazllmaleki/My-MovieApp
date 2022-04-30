import React from 'react'
import api from '../Api/key'
import axios from 'axios'
import { useEffect,useState } from 'react'
import Cast from '../components/Cast'
import Trailer from '../components/Trailer'
import SimilarSlider from '../components/SimiarSlider'
import { useParams } from 'react-router-dom'


function MoviePage() {

    const[poster,setPoster]=useState('')
    const[genres,setGenres]=useState([])
    const[overview,setoverview]=useState('')
    const[title,settitle]=useState('')
    const[cast,setcast]=useState([])
    const[trailer,settrailer]=useState('')
    const[similar,setsimilar]=useState([])
    const[backdrop,setbackdrop]=useState('')
    const params=useParams()


    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=${api}&language=en-US`)
        .then(res=>{

            setPoster(res.data.poster_path)
            setGenres(res.data.genres)
            setoverview(res.data.overview)
            settitle(res.data.title)
            setbackdrop(res.data.backdrop_path)
        axios.get(`https://api.themoviedb.org/3/movie/${params.id}/credits?api_key=${api}&language=en-US`)
        .then(res=>{
        setcast(res.data.cast.slice(0,4))})
        axios.get(`https://api.themoviedb.org/3/movie/${params.id}/videos?api_key=${api}&language=en-US`)
        .then(res=>{

            settrailer(res.data.results[0].key)
        })
        axios.get(`https://api.themoviedb.org/3/movie/${params.id}/similar?api_key=${api}&language=en-US&page=1`)
        .then(res=>{
            setsimilar(res.data.results.slice(0,6))
        })
        
        })
      },[])
      
 
  return (
    <div className='w-full h-screen p-4 lg:px-14 xl:px-24' >
        <div className='w-full h-1/2 mb-4 sm:h-5/6  flex justify-center rounded-lg  bg-no-repeat' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1280${backdrop})`}}>
            <div className='w-full h-full brightness-50 bg-contain  rounded-lg ' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1280${backdrop})`}}></div>
            <div className='w-full lg:w-1/2  ' >
                {poster?<img className='w-full h-full ' src={`https://image.tmdb.org/t/p/w780${poster}`} alt="" />:<div className='border border-blue-300 shadow rounded-md bg-slate-200 animate-pulse w-full h-full rounded-xl'></div>}
            

            </div>

        </div>
        
        <div className= 'w-full flex justify-center mb-4 '>
            {
                genres.map((x)=>{
                    return(<span className="bg-gray-100 xl:text-sm text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">{x.name}</span>)

                })
            }
        

        </div>
        <div className='flex justify-center mb-2'>
            {title}
        </div>
        <div className='font-serif text-sm italic xl:text-base '>
        <p className='not-italic'>overview:</p>{overview}
            
        </div>
        <div className='flex justify-center'>

        <div className='flex justify-center bg-slate-900 my-2 xl:text-base w-36 h-10 rounded-lg hover:bg-white transition-all'>
            <button className='bg-red text-white w-full h-10 hover:text-black border-2'>

            <Trailer ukey={trailer}/>
            </button>
        </div>
        </div>
        <div className='font-serif text-sm my-2 xl:text-base '>
            cast:
        </div>
        <div className='flex justify-center'>
  
            {cast.map((x)=>{
                return(<Cast key={x.name} castimage={`https://image.tmdb.org/t/p/w185${x.profile_path}`} castname={x.name}></Cast>)

            })}

        </div>
        <div>
            <SimilarSlider movies={similar}/>
        </div>

    </div>
  )
}

export default MoviePage