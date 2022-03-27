import React from 'react'
import Menu from '../components/Menu'
import SelectedMovieList from '../components/SelectedMovieList'
import api from '../Api/key';
import axios from 'axios';
import { useState,useEffect } from 'react';
import Pagination from '../components/Pagination'

function SearchPage() {

  const[neww,setneww]=useState([])
  const[name,setname]=useState(null)
  const[type,settype]=useState('movie')
  const[genres,setgenres]=useState(null)
  const[trend,settrend]=useState('upcoming')
  const[page,setpage]=useState(1)

  if(type==='tv' && trend==='upcoming'){
    settrend('on_the_air')
  }

  



  
  useEffect(()=>{
  axios.get(`https://api.themoviedb.org/3/${type}/${trend}?api_key=${api}&language=en-US&page=${page}` )
    .then(res=>{
      
      if(genres=='comedy'){

        const the=res.data.results.filter(x=>x.genre_ids[0]==35)
        setneww(the)


          }

          else{
          setneww(res.data.results)

      }
    })}
    ,[type,trend,genres]);
  console.log(neww)


  return (
    <div>
      <div><Menu name={(e)=>setname(e)} type={(e)=>settype(e)} genres={(x)=>setgenres(x)} trend = {(x)=>settrend(x)} /></div>
      <div><SelectedMovieList movies={neww}/></div>
      <div><Pagination/></div>


      </div>
  )
}

export default SearchPage