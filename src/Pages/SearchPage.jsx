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



  console.log(neww)
  
  useEffect(()=>{
  if(name!=null){
    setneww([])
    try{
      axios.get(`https://api.themoviedb.org/3/search/${type}?api_key=${api}&query=${name}` )
      .then(res=>{
        console.log(res)
        setneww(res.data.results)})
      
    }catch{
      console.log('error')
    }
    

  }else{axios.get(`https://api.themoviedb.org/3/${type}/${trend}?api_key=${api}&language=en-US&page=${page}` )
    .then(res=>{
      
      if(genres=='comedy'){

        const the=res.data.results.filter(x=>x.genre_ids[0]===35)
        setneww(the)


        }
      else if(genres=='Drama'){

        const the=res.data.results.filter(x=>x.genre_ids[0]===18)
        setneww(the)


        }
      else if(genres=='horror'){

        const the=res.data.results.filter(x=>x.genre_ids[0]===27)
        setneww(the)


        }
      else if(genres=='action'){

        const the=res.data.results.filter(x=>x.genre_ids[0]===28)
        setneww(the)


        }
        else{
          setneww(res.data.results)

      }
    })}}
    ,[type,trend,genres,page]);
  



  return (
    <div>
      <div><Menu name={(e)=>setname(e)} type={(e)=>settype(e)} genres={(x)=>setgenres(x)} trend = {(x)=>settrend(x) } page={(x)=>{setpage(1)}} /></div>
      <div><SelectedMovieList movies={neww}/></div>
      <div><Pagination page={(x)=>{setpage(x)}} pgg={page}/></div>


      </div>
  )
}

export default SearchPage